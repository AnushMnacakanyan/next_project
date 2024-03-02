import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxion } from "../../store";
import { User } from "@/type";

export const getUsersAPI = createAsyncThunk(
    "get users",
    async () => {
        const { data } = await myAxion.get("/users")
        return data;
    }
)

export const getUsersByIdAPI = createAsyncThunk(
    "get usersById",
    async (id: number) => {
        const { data } = await myAxion.get("/users/" + id)
        return data;
    }
)
export const createUserAPI=createAsyncThunk(
    "create user",
    async(obj:User)=>{
        const {data}=await myAxion.post("/users/",obj)
        return data
    }
)

export const updateUserAPI = createAsyncThunk(
    "update users",
    async ({ id, obj }: { id: number, obj: { email: string, name: string } }) => {
        console.log(id, obj);
        const token=localStorage.token
        
        const { data } = await myAxion.put("/users/" + id, obj,{headers:{Authorization:`Bearer ${token}`}})
        return data;
    }
)

export const loginAPI = createAsyncThunk(
    "  auth login",
    async (obj: { email: string, password: string }) => {
        const { data } = await myAxion.post("/auth/login", obj)
        return data
    }
)
export const  profilAPI=createAsyncThunk(
    "get profil",
    async ()=>{
        const token=localStorage.token
        const {data}=await myAxion.get("/auth/profile",{headers:{Authorization:`Bearer ${token}`}})
        return data
    }
)

