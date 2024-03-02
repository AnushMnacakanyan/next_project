"use client"
import { getUsersByIdAPI, selectUser, useDispatch, useSelector } from "@/lib/redux"
import { useParams } from "next/navigation"
import { useEffect } from "react"

export default function seeUser(){
    const {user}=useSelector(selectUser)
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(id){
            dispatch(getUsersByIdAPI(+id))
        }
    },[id])
    return(<div className="div_user">
        <div className="div2_user">
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <img src={user?.avatar} alt="" width={300} />
        </div>

    </div>)
}