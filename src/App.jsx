import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./assets/Pages/Login"
import { RegisterPage } from "./assets/Pages/Register"
import { DashboardPage } from "./assets/Pages/Dashboard"
import { NotFoundPage } from "./assets/Pages/NotFound"
import React, { useState } from "react"
import { ToastContainer } from "react-toastify";
// import React from "react"
// import "./App.css"

function App () {

  const localStorageLoggedUser = localStorage.getItem("@LOGGED-USER");
  const [loggedUser, setLoggedUser] = useState(localStorageLoggedUser ? JSON.parse(localStorageLoggedUser) : [])

  return (

    <div className="App">

      <Routes>
        <Route path="/" element= {<LoginPage/>} />
        <Route path="/register" element= {<RegisterPage/>} />
        <Route path="/dashboard" element= {<DashboardPage/>} />
        <Route path="*" element= {<NotFoundPage/>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
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
