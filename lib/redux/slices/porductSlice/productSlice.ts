import { Product } from "@/type";
import { createProductAPI, deleteProductByIdAPI, filterCategoryIdAPI, filterPriceAPI, filterPricerangeAPI, filterTitleAPI, getProductAPI, getProductByIdAPI, updateProductByIdAPI } from "./thunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState:{products:Product[],product:Product}={
    products:[],
    product:{} as Product
}
export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getProductAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(getProductByIdAPI.fulfilled,(state,action)=>{
            state.product=action.payload
        }).addCase(createProductAPI.fulfilled,(state,action)=>{
            state.product=action.payload
        }).addCase(updateProductByIdAPI.fulfilled,(state,action)=>{
            state.product=action.payload
        }).addCase(filterCategoryIdAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(filterPriceAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(filterPricerangeAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        }).addCase(filterTitleAPI.fulfilled,(state,action)=>{
            state.products=action.payload
        })
   
    }
})
