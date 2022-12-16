import { Navbar } from "../../Components/Navbar"
import { Input } from "../../Components/Input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"
import { Form, useNavigate } from "react-router-dom"
import { UserContext } from "../../../Context/userContext"
import { useContext } from "react"
import { StyledForm } from "../../../Styles/form-style"
import { StyledButton } from "../../../Styles/buttons-style"
import { StyledRegister } from "./style"

export const RegisterPage = () => {

  const { userRegister } = useContext (UserContext)

    const navigate = useNavigate ()
    const [loading, setLoading] = useState(false); 
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
      mode: "onChange",
      resolver: yupResolver(registerSchema)
  }); 

  const submit = async (data) => {
  
    await userRegister(data);

    reset({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      bio: "",
      contact: "",
      module: "Primeiro Módulo",
    });
  }

  const returnPage = (event) => {
    
    event.preventDefault()
    navigate ("/")
  }

  return (

    <StyledRegister>

      <Navbar onClick={(event) => (returnPage(event))} buttonTitle="Voltar" type="" hidden={false}/>

      <main>

        <h2>Crie sua conta</h2>
        <p className='p'>Rapido e grátis, vamos nessa!</p>
                
        <StyledForm noValidate onSubmit={handleSubmit(submit)}>
                
          <Input type="text" id="name" label="Nome " placeholder="Digite aqui o seu nome" register={register("name")} disabled={loading}/>
          {errors.name && <p className="p-error" aria-label="Error: Name">{errors.name.message}</p>}
                
          <Input type="email" id="email" label="E-mail " placeholder="Digite aqui o seu e-mail" register={register("email")} disabled={loading} />
          {errors.email && <p className="p-error" aria-label="Error: E-mail">{errors.email.message}</p>}
                
          <Input autoComplete="autoComplete" type="password" id="password" label="Senha " placeholder="Crie aqui a sua senha" register={register("password")} disabled={loading} />
          {errors.password && <p className="p-error" aria-label="Error: Password">{errors.password.message}</p>}
                
          <Input autoComplete="autoComplete" type="password" id="passwordConfirm" label="Confirmar Senha " placeholder="Confirme aqui a sua senha" register={register("passwordConfirm")} disabled={loading} />
          {errors.passwordConfirm && <p className="p-error" aria-label="Error: Password Confirmation">{errors.passwordConfirm.message}</p>}
                
          <Input type="text" id="bio" label="Bio " placeholder="Fale sobre você" register={register("bio")} disabled={loading} />
          {errors.bio && <p className="p-error" aria-label="Error: Bio text needed">{errors.bio.message}</p>}
                
          <Input type="string" id="contact" label="Contato " placeholder="Opção de contato" register={register("contact")} disabled={loading} />
          {errors.contact && <p className="p-error" aria-label="Error: contact">{errors.contact.message}</p>}
                
          <fieldset>
            <label htmlFor="course_module">Módulo </label>
            <select id="course_module" {...register("course_module")}>
              <option key="Primeiro módulo" value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
              <option key="Segundo módulo" value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
              <option key="Terceiro módulo" value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
              <option key="Quarto módulo" value="Quarto módulo (Backend Avançado)">Quarto módulo</option> 
            </select>
          </fieldset>
                
          <StyledButton className='pink-button' type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </StyledButton>
                
        </StyledForm> 
                
      </main>

    </StyledRegister>  
  )
}