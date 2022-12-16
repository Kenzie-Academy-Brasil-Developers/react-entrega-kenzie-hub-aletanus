import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../Context/userContext"

export const ProtectedRoutes = () => { 

    const { loggedUserData } = useContext(UserContext)

    return (

        <>
        { 
            loggedUserData ? <Outlet/> : <Navigate to={ "/" } />
        }
        </>
    )
    
}