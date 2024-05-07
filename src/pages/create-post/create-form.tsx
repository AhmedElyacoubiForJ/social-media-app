import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const schema = yup.object().shape({
        title: yup.string().required("You must provide a title."),
        description: yup.string().required("You must add a description.")
    })

    const { register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const onCreatePost = (data: CreateFormData) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")} />
            {
                errors.title && <p style={{color: "red"}}>{errors.title.message}</p>
            }
            <input placeholder="Description..." {...register("description")} />
            {
                errors.description && <p style={{color: "red"}}>{errors.description.message}</p>
            }
            <button> Submit </button>
        </form>
    )
}