import { User } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "../../rootReducer";
import { buffer } from "stream/consumers";
import build from "next/dist/build";
import { createUserAPI, getUsersAPI, getUsersByIdAPI, profilAPI, updateUserAPI } from "./thunk";

const initialState:{users:User[],user:User}={
    users:[],
    user:{} as User
}
export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getUsersAPI.fulfilled, (state,action)=>{
            state.users=action.payload
        }).addCase(getUsersByIdAPI.fulfilled,(state,action)=>{
            state.user=action.payload
        }).addCase(updateUserAPI.fulfilled,(state,action)=>{
            state.user=action.payload
        }).addCase(profilAPI.fulfilled,(state,action)=>{
            state.user=action.payload
        }).addCase(createUserAPI.fulfilled,(state,action)=>{
            state.users=action.payload
        })
    }

})