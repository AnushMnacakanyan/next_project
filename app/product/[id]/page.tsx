"use client"
import { deleteProductByIdAPI, getProductByIdAPI, selectCategory, selectProduct, updateProductByIdAPI, useDispatch, useSelector } from "@/lib/redux"
import { Product } from "@/type"
import { error } from "console"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function SeeProduct() {
    const { id } = useParams()
    const { product } = useSelector(selectProduct)
    const dispatch = useDispatch()
    const router=useRouter()
    const { register, reset, handleSubmit,formState:{errors} } = useForm<Product>()
    // console.log(product);
    

    useEffect(() => {
        if (id) {
            dispatch(getProductByIdAPI(+id))
        }
    }, [id])

    const updateProduct = (data:Product) => {
        dispatch(updateProductByIdAPI({id: product.id, obj: data}))
        reset()
    }

    return (<div className="div_product">
        <div className="div2_prod">
        <h3>{product?.title}</h3>
        <p>price-{product?.price}</p>
        <p>description-{product?.decoration}</p>
        <p>category-{product?.category?.name}</p>
        <button className="del" onClick={()=>{
            dispatch(deleteProductByIdAPI(product.id)) 
            router.push("/profile")}}>Delete</button>
            <div className="img">
        {product?.images?.map((elm, i) => {
            
            return (
                <img key={i} src={elm} alt="" width={200} />
            )
        })}
            </div>
        </div>
        <div className="div_form">
            <form onSubmit={(handleSubmit(updateProduct))} className="form_prod">
                <input type="text" placeholder="Update title" {
                    ...register("title",{
                        required:"Update title"
                    })
                } />
                {errors.title && <p>{errors.title.message}</p>}
                <input type="number" placeholder="Update price" {
                    ...register("price",{
                        required:"Update price"
                    })
                } />
                {errors.price && <p>{errors.price.message}</p>}
                <button>Update</button>
            </form>
        </div>

    </div>)
}