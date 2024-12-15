export interface Product {
    id: number;
    name: string;
    detail: string;
    price: number;
    amount: number;
    img: string;
}

export interface Category {
    name: string;
    type: string;
    products: Product[]
}

export interface ProductCeate {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
} 

export interface ProductRes {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface ProductUpdate {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}