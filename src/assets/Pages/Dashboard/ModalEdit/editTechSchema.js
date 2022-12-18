import * as yup from "yup"

export const editTechSchema = yup.object().shape({

    title: yup
    .string(),
    // .required('O nome é obrigatório'),

    status: yup
    .string()
    .required("Selecione um status"),

})