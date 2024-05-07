import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const CreateForm = () => {
    const schema = yup.object().shape({
        title: yup.string().required("You must provide a title."),
        description: yup.string().required("You must add a description.")
    })
    const { register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onCreatePost = (data: any) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder="Title..." {...register("title")} />
            <input placeholder="Description..." {...register("description")} />
            <button> Submit </button>
        </form>
    )
}