import * as yup from "yup";

export const techSchema = yup.object().shape({

    title: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, "O nome precisa de ao menos 3 caracteres"),

    status: yup.string().required("Selecione um status"),

});