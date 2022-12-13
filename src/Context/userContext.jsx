import { api } from "../assets/Api";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext ();

export const UserProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate ()

    const userLogin = async (formData) => {
  
      try {
        setLoading (true);  
        const response = await api.post("sessions", formData)
        const usersToken = response.data.token
        if (usersToken) {
          setTimeout (() => {
            localStorage.setItem ("@USER.TOKEN",usersToken)
            localStorage.setItem ("@USER.ID",response.data.user.id)
            toast.success(`${(response.data.user.name).toUpperCase().trim()}, seja bem vindo!`)
          }, 100)
          setTimeout (() => {
            navigate("/dashboard")
          }, 4000)
        }
      } catch (error) {
        toast.error(error.response.data.message)
        console.log (error.response.data.message) 
      } finally {
        setLoading(false);  
      }
    }
  
    const userRegister = async (formData) => {
  
      try {
        setLoading(true);  
        const response = await api.post('users', formData);
        if (response) {
          setTimeout (() => {
            toast.success(`Oi ${(response.data.name).toUpperCase()}! Agora faça o seu login.`);
            console.log (response)
            console.log (response.data.name)
          }, 100)
          setTimeout (() => {
            navigate ("/")
          }, 4000)
        }
      } catch (error) { 
        toast.error(error.response)  
        console.log (error.response)
        console.log (error.response.data.message)
      } finally {
        setLoading(false);  
      }
    }

    const [loggedUserData, setloggedUserData] = useState([]);

    const requestLoggedUserData = () => {

        useEffect(() => {
            const userToken = localStorage.getItem('@USER.TOKEN');
            if (userToken) {
        
              const getApi = async () => {
        
                try { 
                    const response = await api.get("/profile", { 
                        headers: {"Authorization" : `Bearer ${userToken}`}
                    })
          
                    setloggedUserData ({
                        username: response.data.name,
                        userCourseModule: response.data.course_module,
                        userTecs: response.data.techs,
                        userBio: response.data.bio,
                    })
        
                    } catch (error) {
                  console.log(error)
        
                    } finally {
                    setLoading (true)
                    }
                }
                getApi ()
                } else {
                navigate ("/")
                }
            }, []);  
    }
    
    return (
        <UserContext.Provider value={ { toast, userLogin, userRegister, navigate, requestLoggedUserData, loggedUserData, setloggedUserData, loading } }>
            {children}
        </UserContext.Provider>
    )
  
}