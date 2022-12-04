import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../../Components/Input'
import { registerSchema } from './registerSchema'
// import { api } from "../../api/api"
import { toast } from 'react-toastify'
import { Navbar } from '../../Components/Navbar'

export const RegisterPage = () => {

  const navigate = useNavigate ()
  const [loading, setLoading] = useState(false); 
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  });  


  /* oneOf (yup.ref("password")) */
  const userRegister = async (formData) => {
    try {
      setLoading(true);  
      const response = await api.post('user', formData);
      toast.success(response.data.message);
      navigate ("/")
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
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        bio: "",
        contact: "",
        // module: event.target.children[1].value,
    });
  }

  return (

    <>

      {/* <h1>/// REGISTER ///</h1> */}

      <Navbar to={"/"} linkName="Voltar" type="" hidden={false}/>

      {/* to, alt, name, type, hidden */}

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
                
          <Input type="number" id="contact" label="Contato " placeholder="Opção de contato" register={register("contact")} disabled={loading} />
          {errors.contact && <p aria-label="Error: contact">{errors.contact.message}</p>}
                
          <fieldset>
            <label htmlFor="module">Módulo </label>
            <select id="module" {...register("module")}>
              <option key="Primeiro módulo" value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option key="Segundo módulo" value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option key="Terceiro módulo" value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option key="Quarto módulo" value="Quarto módulo (Backend Avançado)">Quarto módulo</option> 
            </select>
          </fieldset>
                
                
          {/* <select value={formData.category} onChange={(event) => setFormData({ ...formData, category: event.target.value })}>
                    
            <option key="Primeiro módulo" value={category.value}>Primeiro módulo (Introdução ao Frontend)</option>
                    
            {categoryList.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
                    
          </select> */}
                
          <button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
                
        </form> 
                
      </main>

    </>  
  )
}

// export default RegisterPage