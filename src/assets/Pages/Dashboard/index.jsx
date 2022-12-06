import React, { useState, useEffect } from 'react'
import { api } from "../../Api"
import { Navbar } from '../../Components/Navbar'
import { Header } from '../../Components/Header'
import { TechSkill } from '../../Components/TechSkill'
import { useNavigate } from 'react-router-dom'
          
export const DashboardPage = ({ toast }) => {

  const [loading, setLoading] = useState(false); 
  const [loggedUserData, setloggedUserData] = useState([]);
  const navigate = useNavigate ()

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
    }
  }, []);  

  const logout = (even) => {

    even.preventDefault ()
    localStorage.removeItem("@USER.TOKEN")
    localStorage.removeItem("@USER.ID")
    setTimeout (() => {
      toast.success(`Até logo ${(loggedUserData.username).toUpperCase()}!`)
    }, 100)
    setTimeout (() => {
      navigate ("/")
    }, 4000)
  }

  const addSkill = (even) => {

    even.preventDefault ()
    console.log ("Add a skill")

  }

  return (

    <>

      {!loading ? ( <h1>...loading</h1>) : (
                  
        <>

          <Navbar aTitle="Sair" type="" onClick={(even) => logout(even)} />
          <Header 
            username={`${loggedUserData.username}`} 
            pDescription={`${loggedUserData.userCourseModule}`} 
            hidden={true}
          />
  
          <main>
  
            <Header h2Title="Tecnologias" buttonTitle="+" type="button" onClick={(even) => addSkill(even)} />
                  
            <article>
              <section>
                <TechSkill tecnologyName={"Utilize o botão "+" para adicionar a primeira tecnologia à sua lista de competências."} type="button" hidden={true} />
              </section>
            </article>
  
          </main>
        </>

      )}

    </>  
  )

}