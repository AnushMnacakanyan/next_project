"use client"
import { getUsersAPI, getUsersByIdAPI, profilAPI, selectUser, updateUserAPI, useDispatch, useSelector } from "@/lib/redux"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function SettingUser() {
    const { user } = useSelector(selectUser)
    const dispatch = useDispatch()
    const router = useRouter()
    const { id } = useParams()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<{ name: string, email: string }>()
    useEffect(() => {
        if (id) {
            dispatch(getUsersByIdAPI(+id))
                .unwrap()
                .then(res => {
                    console.log(res);
                }).catch(console.warn)
        }
    }, [id])
    const change = (data: { name: string, email: string }) => {
        dispatch(updateUserAPI({ id: user.id, obj: data }))
            .unwrap()
            .then(console.log )
            reset()
    }
    return (<div className="add_div">
        <h1 className="h1_add">Settings</h1>
        <div className="div_set">
        <form onSubmit={handleSubmit(change)} className="form_set">
            <input type="text" placeholder="Change your name" {
                ...register("name", {
                    required: "Change name"
                })
            } />
            {errors.name && <p>{errors.name.message}</p>}
            <input type="email" placeholder="Change your email" {
                ...register("email", {
                    required: "Change email"
                })
            } />
            {errors.email && <p>{errors.email.message}</p>}
            <button className="btn_set">Change</button>
        </form>
        </div>
    </div>)
}
