import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../../Components/Input'
import { registerSchema } from './registerSchema'
import { api } from "../../Api"
import { Navbar } from '../../Components/Navbar'

export const RegisterPage = ({ toast }) => {

  const navigate = useNavigate ()
  const [loading, setLoading] = useState(false); 
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  });  

  const userRegister = async (formData) => {

    try {

      setLoading(true);  
      const response = await api.post('users', formData);
      // toast.success(`Seja bem vindo${response.data.name}`);
      console.log (response)
      console.log (response.data.name)
      navigate ("/")
    } catch (error) {

      // toast.error(error.response.data.error);  
      toast.error(error.response)  
      console.log (error.response)
      console.log (error.response.data.message)
    } finally {

      setLoading(false);  
    }
  }

  const submit = async (data) => {

    console.log (data)

    await userRegister(data);

    reset({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        bio: "",
        contact: "",
        module: "Primeiro Módulo",
        // module: event.target.children[1].value,
    });
  }

  return (

    <>

      <Navbar to={"/"} linkName="Voltar" type="" hidden={false}/>

      <main>

        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa!</p>
                
        <form noValidate onSubmit={handleSubmit(submit)}>
                
          <Input type="text" id="name" label="Nome " placeholder="Digite aqui o seu nome" register={register("name")} disabled={loading}/>
          {errors.name && <p aria-label="Error: Name">{errors.name.message}</p>}
                
          <Input type="email" id="email" label="E-mail " placeholder="Digite aqui o seu e-mail" register={register("email")} disabled={loading} />
          {errors.email && <p aria-label="Error: E-mail">{errors.email.message}</p>}
                
          <Input autoComplete="autoComplete" type="password" id="password" label="Senha " placeholder="Crie aqui a sua senha" register={register("password")} disabled={loading} />
          {errors.password && <p aria-label="Error: Password">{errors.password.message}</p>}
                
          <Input autoComplete="autoComplete" type="password" id="passwordConfirm" label="Confirmar Senha " placeholder="Confirme aqui a sua senha" register={register("passwordConfirm")} disabled={loading} />
          {errors.passwordConfirm && <p aria-label="Error: Password Confirmation">{errors.passwordConfirm.message}</p>}
                
          <Input type="text" id="bio" label="Bio " placeholder="Fale sobre você" register={register("bio")} disabled={loading} />
          {errors.bio && <p aria-label="Error: Bio text needed">{errors.bio.message}</p>}
                
          <Input type="string" id="contact" label="Contato " placeholder="Opção de contato" register={register("contact")} disabled={loading} />
          {errors.contact && <p aria-label="Error: contact">{errors.contact.message}</p>}
                
          <fieldset>
            <label htmlFor="course_module">Módulo </label>
            <select id="course_module" {...register("course_module")}>
              <option key="Primeiro módulo" value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option key="Segundo módulo" value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option key="Terceiro módulo" value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option key="Quarto módulo" value="Quarto módulo (Backend Avançado)">Quarto módulo</option> 
            </select>
          </fieldset>
                
          <button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
                
        </form> 
                
      </main>

    </>  
  )
}