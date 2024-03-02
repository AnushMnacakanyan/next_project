"use client"
import { getCategoryAPI, getUsersAPI, selectUser, useDispatch, useSelector } from "@/lib/redux"
import Link from "next/link"
import { useEffect } from "react"

export default function Users(){
    const {users}=useSelector(selectUser)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUsersAPI())

    })

    return(<div className="users">
      <h1 className="h1_users">Users</h1>
      <div className="div_users">
      {users?.map(elm=>{
        return(<div key={elm.id} className="div_1">
            <h4>{elm.name}</h4>
            <p>{elm.email}</p>
            <Link href={"/user/"+elm.id}>See More</Link>

        </div>)
      })}  
      </div>
    </div>)
}