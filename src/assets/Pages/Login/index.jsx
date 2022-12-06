import React, { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../../Components/Input'
import { loginSchema } from './loginSchema'
import { api } from "../../Api"
import { Navbar } from '../../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = ({ toast }) => {

  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate ()
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  });  

  const userLogin = async (formData) => {

    try {

      setLoading(true);  
      const response = await api.post("sessions", formData)
      const usersToken = response.data.token
      
      if (usersToken) {
        
        setTimeout (() => {
          localStorage.setItem ("@USER.TOKEN",usersToken)
          localStorage.setItem ("@USER.ID",response.data.user.id)
          toast.success(`Seja bem vindo ${(response.data.user.name).toUpperCase()}! Vamos redirecionar você para a sua página inicial.`)
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

  const submit = async (data) => {

    await userLogin(data);

    reset({
        email: "",
        password: "",
    });
  }

    return (

      <>

        <Navbar name="Voltar" type="" hidden={true}/>

        <main>

          <h2>Login</h2>
                
          <form noValidate onSubmit={handleSubmit(submit)}>
                
            <Input type="email" id="email" label="E-mail " placeholder="Digite aqui o seu e-mail" register={register("email")} disabled={loading} />
            {errors.email && <p aria-label="Error: E-mail">{errors.email.message}</p>}
                
            <Input autoComplete="autoComplete" type="password" id="password" label="Senha " placeholder="Crie aqui a sua senha" register={register("password")} disabled={loading} />
            {errors.password && <p aria-label="Error: Password">{errors.password.message}</p>}
                
            <button type="submit" disabled={loading}>
              {loading ? 'Solicitando login...' : 'Entrar'}
            </button>

             <p>Ainda não possui uma conta?</p>

            <Link to={"/register"}>Cadastre-se</Link>
                
          </form> 
                
        </main>

      </>  
    )
}