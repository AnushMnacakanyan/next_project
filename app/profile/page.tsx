"use client"
import { filterCategoryIdAPI, filterPriceAPI, filterPricerangeAPI, filterTitleAPI, getCategoryAPI, getProductAPI, profilAPI, selectCategory, selectProduct, selectUser, useDispatch, useSelector } from "@/lib/redux"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Profile() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { user } = useSelector(selectUser)
    const { categories } = useSelector(selectCategory)
    const { products } = useSelector(selectProduct)
    const [min, SetMin] = useState<number>()
    const [max, setMax] = useState<number>()
    useEffect(() => {
        dispatch(getProductAPI())
        dispatch(getCategoryAPI())
        dispatch(profilAPI())
            .unwrap()
            .then(res => {
                console.log(res);
            }).catch(() => router.push("/"))
    }, [])
    console.log(products);
    
    return (<div className="profile">
        <div className="d1">
        <div className="div_us">
            <h3 className="h3">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.role}</p>
            <img src={user.avatar} alt="" width={250} />
        </div>
        <div className="div_filter">
            <input type="text" placeholder="FilterByTitle" onChange={(e) => { dispatch(filterTitleAPI(e.target.value)) }} />
            <input type="number" placeholder="FilterByPrice" onChange={(e) => { dispatch(filterPriceAPI(+e.target.value)) }} />
            <input type="number" placeholder="min" onChange={(e) => { SetMin(+e.target.value) }} />
            <input type="number" placeholder="max" onChange={(e) => { setMax(+e.target.value) }} />
            <button onClick={() => { if (min && max) dispatch(filterPricerangeAPI({ min, max })) }}>Filter</button>

            <select onChange={(e) => { dispatch(filterCategoryIdAPI(+e.target.value)) }}>
                <option value="" hidden>categoryId</option>
                {categories.map(elm => {
                    return (<option value={elm.id} key={elm.id}>{elm.id}</option>)
                })}
            </select>
        </div>
        </div>
        <div>
            <h1 className="h1">Products</h1>
        <div className="d2">
            {products.map(elm => {
                return (<div key={elm.id} className="div_prod">
                    <h3>{elm.title}</h3>
                    <p>{elm.category?.name}</p>
                    <p>{elm.price}</p>
                    <Link href={"/product/"+elm.id}>See More</Link>
                </div>)
            })}

        </div>

        </div>

    </div>)
}