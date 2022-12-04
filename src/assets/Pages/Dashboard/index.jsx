import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Input } from '../../Components/Input'
// import { registerSchema } from './registerSchema'
// import { api } from "../../api/api"
import { toast } from 'react-toastify'
import { Navbar } from '../../Components/Navbar'
import { Header } from '../../Components/Header'
import { TechSkill } from '../../Components/TechSkill'
          
export const DashboardPage = () => {

  const [loading, setLoading] = useState(false); 
//   const { register, handleSubmit, formState: {errors}, reset } = useForm({
//     mode: "onChange",
//     resolver: yupResolver(registerSchema)
//   });  


  /* oneOf (yup.ref("password")) */
//   const userRegister = async (formData) => {
//     try {
//       setLoading(true);  
//       const response = await api.post('user', formData);
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(error.response.data.error);  
//     } finally {
//       setLoading(false);  
//     }
//   }

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

      <Navbar linkName="Sair" type="" to={"/"}/>
      <Header username="Username" pDescription="User's Module" hidden={true}/>

      <main>

        <Header h2Title="Tecnologias" buttonTitle="+" onClick={() => submit()} type="button" />
                
        <article>
            <section>
                <TechSkill tecnologyName={"Utilize o botão "+" para adicionar a primeira tecnologia à sua lista de competências."} type="button" hidden={true} />
            </section>
        </article>

      </main>

    </>  
  )
}