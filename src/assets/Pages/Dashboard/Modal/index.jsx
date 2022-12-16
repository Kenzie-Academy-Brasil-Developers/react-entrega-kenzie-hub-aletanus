import { useContext, useState } from "react"
import { TechContext } from "../../../../Context/techContext"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import { techSchema } from "./techSchema"
import { StyledForm } from "../../../../Styles/form-style"
import { Header } from "../../../Components/Header"
import { Input } from "../../../Components/Input"
import { StyledModalCreateTecnology } from "./style"
import { StyledButton } from "../../../../Styles/buttons-style"

export const ModalCreateTecnology = () => {

    const [loading, setLoading] = useState(false); 
    const { registerUsersTechSkill, setModal } = useContext(TechContext)
    const { register, handleSubmit, formState: {errors}, reset } = useForm ({
        mode: "onChange",
        resolver: yupResolver(techSchema)
    });

    const submit = async (data) => {

        registerUsersTechSkill (data)
        reset({
            title: "",
            status: "",
        });
    }

  return (

    <StyledModalCreateTecnology>

        <div>

            <Header 
                onClick={() => setModal(false)}
                username="Cadastrar Tecnologia"
                buttonTitle="x"
                id="h2"
            />

            <StyledForm noValidate onSubmit={handleSubmit(submit)}>

                <Input type="text" id="title" label="Tecnologia" placeholder="Nome da tecnologia" register={register("title")} disabled={loading}/>
                {errors.title && <p className="p-error" aria-label="Error: Title">{errors.title.message}</p>}
                
                <fieldset>
                    <label htmlFor="status">Selecionar status </label>
                    <select id="status" {...register("status")}>
                        <option key="Iniciante" value="Iniciante">Iniciante</option>
                        <option key="Intermediário" value="Intermediário">Intermediário</option>
                        <option key="Avançado" value="Avançado">Avançado</option>
                    </select>
                </fieldset>

                <StyledButton className='pink-button' type="submit" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar Tecnologia'}
                </StyledButton>

            </StyledForm>

        </div>

    </StyledModalCreateTecnology>
  )

}