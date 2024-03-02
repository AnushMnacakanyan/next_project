import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxion } from "../../store";
import { Category } from "@/type";

export const getCategoryAPI = createAsyncThunk(
    "get category",
    async () => {
        const { data } = await myAxion.get("/categories")
        return data;
    }
)

export const getCategoryByIdAPI = createAsyncThunk(
    "get categoryById",
    async (id:number) => {
        const { data } = await myAxion.get("/categories/"+id)
        return data;
    }
)

export const createCategoryAPI = createAsyncThunk(
    "create category",
    async (obj:Category) => {
        const { data } = await myAxion.post("/categories/",obj)
        return data;
    }
)

export const updateCategoryByIdAPI = createAsyncThunk(
    "update categoryById",
    async ({id,obj}:{id:number,obj:Category}) => {
        const { data } = await myAxion.put("/categories/"+id,obj)
        return data;
    }
)

export const deleteCategoryByIdAPI = createAsyncThunk(
    "delete categoryById",
    async (id:number) => {
        const { data } = await myAxion.delete("/categories/"+id)
        return data;
    }
)

export const getProductCategoryAPI = createAsyncThunk(
    "get productcategory",
    async (id:number) => {
        const { data } = await myAxion.delete(`/categories/${id}/products`)
        return data;
    }
)
