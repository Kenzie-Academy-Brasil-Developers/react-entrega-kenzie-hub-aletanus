import { api } from "../assets/Api" 
import { useEffect, useState, createContext } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../../src/Context/userContext"
import { useContext } from "react"

export const TechContext = createContext()

export const TechProvider = ({ children }) => {

  const { userToken, loggedUserData, usersTechSkills, setUsersTechSkills, } = useContext(UserContext)
  const [modal, setModal] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [tech, setTech] = useState([])
  api.defaults.headers.authorization = `Bearer ${userToken}`

  const registerUsersTechSkill = async (formData) => {

    console.log(formData)
    if (userToken) {
      const postTech = async () => {
        try {
          const response = await api.post("/users/techs", formData)
          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, nova tecnologia adicionada.`
          )
         setUsersTechSkills([...usersTechSkills, response.data].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
         
        } catch (error) {
          console.log(error)
          toast.success(
            `${loggedUserData.name.toUpperCase().trim()}, ${error.response.data.message}.`
          )
        } finally {
          setModal(false)
        }
      }
      postTech()
    }
  }

  const editUsersTechSkill = async (editedTechSkill) => {

    if (userToken) {

      const editTech = async () => {

        try {
          const response = await api.put(`/users/techs/${tech.id}`, editedTechSkill)
          toast.success (`${loggedUserData.name.toUpperCase().trim()}, tecnologia editada!`)
          const uneditedTechSkills = usersTechSkills.filter (skill => skill.title !== editedTechSkill.title)
          setUsersTechSkills ([...uneditedTechSkills, response.data].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        } catch (error) {
          console.log(error)
          console.log(error.response)
          toast.success(`${loggedUserData.name.toUpperCase().trim()}, ${error.response.data.message}.`)
        } finally {
          setModalEdit(false)
        }
      }
      editTech()
    }
  }

  const techDelete = async (techId) => {

    try {
      const response = await api.delete(`/users/techs/${techId}`)
      toast.success(
        `${loggedUserData.name.toUpperCase().trim()}, tecnologia excluída.`
      )
      const newTechSkills = usersTechSkills.filter (skill => skill.id !== techId)
      setUsersTechSkills(newTechSkills)
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
        modal, 
        setModal,
        editUsersTechSkill,
        tech,
        setTech,
        modalEdit, 
        setModalEdit,
        techDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}