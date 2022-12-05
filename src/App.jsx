import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { LoginPage } from "./assets/Pages/Login"
import { RegisterPage } from "./assets/Pages/Register"
import { DashboardPage } from "./assets/Pages/Dashboard"
import { NotFoundPage } from "./assets/Pages/NotFound"
import React, { useState } from "react"
// import React from "react"
// import "./App.css"

function App () {

  const localStorageLoggedUser = localStorage.getItem("@LOGGED-USER");
  const [loggedUser, setLoggedUser] = useState(localStorageLoggedUser ? JSON.parse(localStorageLoggedUser) : [])

  return (

    <div className="App">

      <Routes>

        <Route path="/" element= {<LoginPage toast={toast} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />} />
        <Route path="/register" element= {<RegisterPage toast={toast} />} />
        <Route path="/dashboard" element= {<DashboardPage toast={toast} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />} />
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
