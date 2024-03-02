"use client"
import { createCategoryAPI, useDispatch, useSelector } from "@/lib/redux"
import { Category } from "@/type"
import { useForm } from "react-hook-form"

export default function AddCategory(){
    const dispatch=useDispatch()
    const {register,reset,handleSubmit,formState:{errors}}=useForm<Category>()
    const save=(data:Category)=>{
        dispatch(createCategoryAPI(data))
        reset()
    }
    return(<div className="add_div">
        <h1 className="h1_add">addCategory</h1>
        <div className="div_addcat">
        <form onSubmit={handleSubmit(save)} className="form_addcat">
            <input type="text" placeholder="Enter category name" {
                ...register("name",{
                    required:"Enter category name"
                })
            }/>
            {errors.name && <p>{errors.name.message}</p>}
            <input type="ULR" placeholder="Enter image URL" {
                ...register("image",{
                    required:"Enter category image"
                })
            } />
            {errors.image && <p>{errors.image.message}</p>}
            <button className="btn_add2">save</button>

        </form>
        </div>
    </div>)
}