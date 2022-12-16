import { useContext, useState } from "react"
import { TechContext } from "../../../../Context/techContext"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import { editTechSchema } from "./editTechSchema" 
import { StyledForm } from "../../../../Styles/form-style"
import { Header } from "../../../Components/Header"
import { Input } from "../../../Components/Input"
import { StyledModalEditTecnology } from "./style"
import { StyledButton } from "../../../../Styles/buttons-style"

export const ModalEditTecnology = () => {

    const [loading, setLoading] = useState(false); 
    const { editUsersTechSkill, modalEdit, setModalEdit } = useContext(TechContext)
    const { register, handleSubmit, formState: {errors}, reset } = useForm ({
        mode: "onChange",
        resolver: yupResolver(editTechSchema)
    });

    const submit = async (newData) => {

        editUsersTechSkill (newData)

        reset({
            title: "",
            status: "",
        })
    }

  return (

    <StyledModalEditTecnology>

        <div>

            <Header 
                onClick={() => setModalEdit(false)}
                username="Tecnologia Detalhes"
                buttonTitle="x"
                id="h2"
            />

            <StyledForm noValidate onSubmit={handleSubmit(submit)}>

                <Input value="HTML" type="text" id="title" label="Nome do projeto" placeholder="Nome do projeto" register={register("title")} disabled={loading}/>
                {errors.title && <p aria-label="Error: Title">{errors.title.message}</p>}
                
                <fieldset>
                    <label htmlFor="status">Status </label>
                    <select id="status" {...register("status")}>
                        <option key="Iniciante" value="Iniciante">Iniciante</option>
                        <option key="Intermediário" value="Intermediário">Intermediário</option>
                        <option key="Avançado" value="Avançado">Avançado</option>
                    </select>
                </fieldset>

                <StyledButton className='pink-button' type="submit" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Salvar alterações'}
                </StyledButton>

            </StyledForm>

        </div>

    </StyledModalEditTecnology>
  )

}