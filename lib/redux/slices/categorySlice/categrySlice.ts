import { Category } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "../../rootReducer";
import build from "next/dist/build";
import { createCategoryAPI, deleteCategoryByIdAPI, getCategoryAPI, getCategoryByIdAPI, getProductCategoryAPI, updateCategoryByIdAPI } from "./thunk";

const initialState:{categories:Category[],category:Category}={
    categories:[],
    category:{} as Category
}
export const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getCategoryAPI.fulfilled,(state,action)=>{
            state.categories=action.payload
        }).addCase(getCategoryByIdAPI.fulfilled,(state,action)=>{
            state.category=action.payload
        }).addCase(createCategoryAPI.fulfilled,(state,action)=>{
            state.category=action.payload
        }).addCase(updateCategoryByIdAPI.fulfilled,(state,action)=>{
            state.category=action.payload
        }).addCase(deleteCategoryByIdAPI.fulfilled,(state,action)=>{
            state.categories=action.payload
        }).addCase(getProductCategoryAPI.fulfilled,(state,action)=>{
            state.categories=action.payload
        })
    }
})

