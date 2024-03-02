import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxion } from "../../store";
import { Product } from "@/type";

export const getProductAPI = createAsyncThunk(
    "get product",
    async () => {
        const { data } = await myAxion.get("/products")
        return data;
    }
)

export const getProductByIdAPI = createAsyncThunk(
    "get productById",
    async (id:number) => {
        const { data } = await myAxion.get("/products/"+id)
        return data;
    }
)

export const createProductAPI = createAsyncThunk(
    "create product",
    async (obj:Product) => {
        const { data } = await myAxion.post("/products/",obj)
        return data;
    }
)


export const updateProductByIdAPI = createAsyncThunk(
    "update productById",
    async ({id,obj}:{id:number,obj:Product}) => {
        const { data } = await myAxion.put("/products/"+id,obj)
        return data;
    }
)

export const deleteProductByIdAPI = createAsyncThunk(
    "delete productById",
    async (id:number) => {
        const { data } = await myAxion.delete("/products/"+id)
        return data;
    }
)

export const filterTitleAPI = createAsyncThunk(
    "filter title",
    async (title:string) => {
        const { data } = await myAxion.get("/products/?title="+ title)
        return data;
    }
)

export const filterPriceAPI = createAsyncThunk(
    "filter price",
    async (price:number) => {
        const { data } = await myAxion.get("/products/?price="+price)
        return data;
    }
)


export const filterPricerangeAPI = createAsyncThunk(
    "filter pricerange",
    async ({min,max}:{min:number,max:number}) => {
        const { data } = await myAxion.get(`/products/?price_min=${min}&price_max=${max}`)
        return data;
    }
)

export const filterCategoryIdAPI = createAsyncThunk(
    "filter CategoryId",
    async (id:number) => {
        const { data } = await myAxion.get("/products/?categoryId="+id)
        return data;
    }
)
