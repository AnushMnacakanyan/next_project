"use client"

import { createCategoryAPI, createProductAPI, getCategoryAPI, getProductAPI, selectCategory, selectProduct, useDispatch, useSelector } from "@/lib/redux"
import { Product } from "@/type"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function AddProduct(){
    const {categories}=useSelector(selectCategory)
    const {products}=useSelector(selectProduct)
    const dispatch=useDispatch()
    const {register,reset,handleSubmit,formState:{errors}}=useForm<Product>()
    useEffect(()=>{
        dispatch(getCategoryAPI())
        dispatch(getProductAPI())
    })
    const save=(data:Product)=>{
        dispatch(createProductAPI(data))
        reset()
    }
    return(<div className="add_div">

        <h1 className="h1_add">AddProduct</h1>
        <div className="div2_add">
        <form onSubmit={handleSubmit(save)} className="form_add">
            <input type="text" placeholder="Enter title" {
                ...register("title",{
                    required:"Enter title"
                })
            } />
            {errors.title && <p>{errors.title.message}</p>}
            <input type="number" placeholder="Enter price" {
                ...register("price",{
                    required:"Enter price"
                })
            } />
            {errors.price && <p>{errors.price.message}</p>}
            <input type="text" placeholder="Enter decoration" {
                ...register("decoration",{
                    required:"Enter decoration"
                })
            }  />
            {errors.decoration && <p>{errors.decoration.message}</p>}
            <input type="URL" placeholder="Enter image URL" {
                ...register("images",{
                    required:"Enter image URL"
                })
            }/>
            {errors.images && <p>{errors.images.message}</p>}
            <select className="sel" {...register("category")}>
                <option value="" hidden>Category</option>
                {categories?.map(elm=>{
                    return(<option value={elm.id} key={elm.id}>{elm.name}</option>)
                })}
            </select>
            <button className="btn_add">save</button>
        </form>
        </div>
    </div>)
}