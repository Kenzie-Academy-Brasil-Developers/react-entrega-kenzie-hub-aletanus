import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../../Components/Input'
import { loginSchema } from './loginSchema'
// import { api } from "../../api/api"
import { toast } from 'react-toastify'
import { Navbar } from '../../Components/Navbar'
import { Link } from 'react-router-dom'

export const LoginPage = () => {

  const [loading, setLoading] = useState(false); 
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  });  


  /* oneOf (yup.ref("password")) */
  const userRegister = async (formData) => {
    try {
      setLoading(true);  
      const response = await api.post('user', formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);  
    } finally {
      setLoading(false);  
    }
  }

  const submit = async (data) => {
    await userRegister(data);
    //Se estiver vazio, o reset vai resetar todos os campos
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