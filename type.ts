export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
}

export type Product = {
    id: number;
    title: string;
    price: number;
    images: string[];
    decoration: string;
    category: Category
    categoryId:number
}

export type Category = {
    id: number;
    name: string;
    image: string
}