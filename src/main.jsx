import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./Context/userContext"
import { TechProvider } from "./Context/techContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <App/>
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)