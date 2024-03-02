"use client"
import { getUsersAPI, loginAPI, selectUser, useDispatch, useSelector } from "@/lib/redux"
import { error } from "console"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useRouter()
  const {users}=useSelector(selectUser)
  const router=useRouter()
  console.log(navigate);
  console.log(users);
  const { register, reset, handleSubmit } = useForm<{ email: string, password: string }>()
  useEffect(()=>{
    dispatch(getUsersAPI())
  },[])
  const save = (data: { email: string, password: string }) => {
    console.log(data);
    dispatch(loginAPI(data))
      .unwrap()
      .then(res => {
        console.log(res);
        localStorage.token=res.access_token;
        navigate.push("/profile")
        reset()
      }).catch(()=>router.push("/register"))
  }
  return (<div className="div_logIn">
    <h3 className="login">LogIn</h3>
    <div>
    <form onSubmit={handleSubmit(save)} className="login_form" >
      <input type="email" placeholder="Enter your email" {
        ...register("email", {
          required: "enter email"
        })
      } />
      <input type="password" placeholder="Enter your password" {
        ...register("password", {
          required: "enter password"
        })
      } />
      <button className="login_btn" >save</button>
    </form>
    </div>

    

  </div>)
}