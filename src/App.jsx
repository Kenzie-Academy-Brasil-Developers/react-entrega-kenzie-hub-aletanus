import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginPage } from "./assets/Pages/Login"
import { RegisterPage } from "./assets/Pages/Register"
import { DashboardPage } from "./assets/Pages/Dashboard"
import { NotFoundPage } from "./assets/Pages/NotFound"
// import React from "react"
// import reactLogo from "./assets/react.svg"
// import "./App.css"

function App () {

  return (

    <div className="App">

      <Routes>

        <Route path="/" element= {<LoginPage/>}/>
        <Route path="/register" element= {<RegisterPage/>}/>
        <Route path="/dashboard" element= {<DashboardPage/>}/>
        <Route path="*" element= {<NotFoundPage/>}/>

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>

  )
}

export default App
