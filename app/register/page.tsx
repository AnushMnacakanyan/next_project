"use client"
import { createUserAPI, useDispatch } from "@/lib/redux";
import { User } from "@/type";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useRouter()
    const { register, reset, handleSubmit, formState: { errors } } = useForm<User>()
    const save = (data: User) => {
        dispatch(createUserAPI(data))
            .unwrap()
            .then((res)=>
            navigate.push("/")
            )
            .catch(console.warn)
    }
    return (<div className="div_register">
        <h3 className="register">Reagister</h3>
        <form onSubmit={handleSubmit(save)} className="form_register" >
            <div>
            <input type="text" placeholder="Enter your name" {
                ...register("name", {
                    required: "Enter your name"
                })
            } />
            {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
            <input type="email" placeholder="Enter your email" {
                ...register("email", {
                    required: "Enter your email"
                })
            } />
            {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
            <input type="password" placeholder="Enter your password" {
                ...register("password", {
                    required: "Enter your password"
                })
            } />
            {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
            <input type="URL" placeholder="Enter your avatr " {
                ...register("avatar", {
                    required: "Enter your avatar"
                })
            } />
            {errors.avatar && <p>{errors.avatar.message}</p>}
            </div>

            <button className="btn1">save</button>
        </form>

    </div>)
}