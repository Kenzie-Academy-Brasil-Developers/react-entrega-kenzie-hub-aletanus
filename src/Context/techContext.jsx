import { api } from "../assets/Api" 
import { useEffect, useState, createContext } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../../src/Context/userContext"
import { useContext } from "react"

export const TechContext = createContext()

export const TechProvider = ({ children }) => {

  const { loggedUserData, setloggedUserData, setLoading } = useContext(UserContext)
  const [usersTechSkills, setUsersTechSkills] = useState([])
  const [modal, setModal] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [techId, setTechId] = useState([])
  const userToken = localStorage.getItem("@USER.TOKEN")
  
  console.log(loggedUserData)

  useEffect(() => {
    
    if (userToken) {

      const getApi = async () => {
        try {
          setLoading(true)
          
          const response = await api.get("/profile", {
            headers: { Authorization: `Bearer ${userToken}` },
          })

          setloggedUserData (response.data)
          setModal(false)

        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      };
      getApi()
    }
  }, [usersTechSkills])

  const registerUsersTechSkill = async (formData) => {

    if (userToken) {
      console.log(userToken)
      console.log(formData)

      const getApi = async () => {
        try {
          const response = await api.post("/users/techs", formData, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          console.log(response)

          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, nova tecnologia adicionada.`
          );

          setUsersTechSkills([
            ...usersTechSkills,
            loggedUserData.userTecs,
          ]);
        } catch (error) {
          console.log(error)
          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, ${error.response.data.message}.`
          )
        } finally {
          setModal(false)
        }
      }
      getApi()
    } else {
      // navigate ("/")
    }
  }

  const editUsersTechSkill = async (formData) => {

    if (userToken) {
      console.log(userToken)
      console.log(formData)
      console.log(techId)

      const edit = async () => {
        try {
          const response = await api.put(`/users/techs/${techId}`, formData, {
            headers: { Authorization: `Bearer ${userToken}` },
          });

          console.log(response)

          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, tecnologia editada!`
          );

          setUsersTechSkills([
            ...usersTechSkills,
            loggedUserData.userTecs,
          ]);
        } catch (error) {
          console.log(error)
          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, ${error.response.data.message}.`
          )
        } finally {
          setModalEdit(false)
        }
      }
      edit()
    } else {
      // navigate ("/")
    }
  }

  const techDelete = async (techId) => {

    console.log(techId)

      try {
        const response = await api.delete(`/users/techs/${techId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })

        console.log(response);
        console.log(usersTechSkills) 

        toast.success(
          `${loggedUserData.name.toUpperCase().trim()}, tecnologia excluída.`
        )

        setUsersTechSkills([
          ...usersTechSkills,
          loggedUserData.userTecs,
        ])

      } catch (error) {
        console.log(error)
      } finally {
        setModal(false)
      }
  }

  return (
    <TechContext.Provider
      value={{
        registerUsersTechSkill,
        usersTechSkills, 
        setUsersTechSkills,
        modal, 
        setModal,
        editUsersTechSkill,
        setTechId,
        modalEdit, 
        setModalEdit,
        techDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}
