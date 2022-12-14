import { api } from "../assets/Api";
import { useEffect, useState, createContext } from "react";
// import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../src/Context/userContext"
import { useContext } from "react" 

export const TechContext = createContext ();

export const TechProvider = ({ children }) => {
  
  const { toast, navigate, requestLoggedUserData, loggedUserData, loading, setLoading} = useContext (UserContext)

    // const [loading, setLoading] = useState(false); 
    // const navigate = useNavigate ()
  
    const [usersTechSkillDataToRecord, setusersTechSkillDataToRecord] = useState([]);
    const [allUsersTechSkills, setAllUsersTechSkills] = useState([]);

    console.log(loggedUserData.userTecs)
    // setAllUsersTechSkills ([...allUsersTechSkills, loggedUserData.userTecs])

    const registerUsersTechSkill = async (formData) => {
      
      useEffect(() => {

        const userToken = localStorage.getItem('@USER.TOKEN');

        console.log(userToken)
        console.log(formData)

        if (userToken) {
    
          console.log(userToken)
          console.log(formData)
            
          // const getApi = async () => {
    
          //   try { 
          //     const response = await api.post("/users/techs", { 
          //       headers: {"Authorization" : `Bearer ${userToken}`},
          //       body: formData
          //     })

          //     console.log(response)

          //     setAllUsersTechSkills ({
          //       // username: response.data.name,
          //       // userCourseModule: response.data.course_module,
          //       // userTecs: response.data.techs,
          //       // userBio: response.data.bio,
          //     })
    
          //   } catch (error) {
          //   console.log(error)
    
          //   } finally {
          //     setLoading (true)
          //   }
          // }
          //   getApi ()
        } else {
          // navigate ("/")
        }

      }, []);  

    }

    // const [loggedUserData, setloggedUserData] = useState([]);

    // const requestLoggedUserData = () => {

    //     useEffect(() => {
    //         const userToken = localStorage.getItem('@USER.TOKEN');
    //         if (userToken) {
        
    //           const getApi = async () => {
        
    //             try { 
    //                 const response = await api.get("/profile", { 
    //                     headers: {"Authorization" : `Bearer ${userToken}`}
    //                 })
          
    //                 setloggedUserData ({
    //                     username: response.data.name,
    //                     userCourseModule: response.data.course_module,
    //                     userTecs: response.data.techs,
    //                     userBio: response.data.bio,
    //                 })
        
    //                 } catch (error) {
    //               console.log(error)
        
    //                 } finally {
    //                 setLoading (true)
    //                 }
    //             }
    //             getApi ()
    //             } else {
    //             navigate ("/")
    //             }
    //         }, []);  
    // }
    
    return (
        <TechContext.Provider value={ { registerUsersTechSkill, allUsersTechSkills, setAllUsersTechSkills } }>
            {children}
        </TechContext.Provider>
    )
  
}