//สำคัญ

import type { ProductCeate, ProductUpdate } from "~/model/product.model"
import { client } from "./httpClient"

export const getProductList = () => {
    return client({
        url: "/products",
        method : "GET",
})
}

export const deletProduct = (id: any) =>  {
    return client({
        url: `/products/${id}`,
        method : "DELETE",
})
}

export const getProductById = (id: any) => {
    return client({
        url: `/products/${id}`,
        method : "get",
})
}

export const createProduct = ( datas: ProductCeate) => {
    return client({
        url: `/products`,
        method : "POST",
        data: datas,
    });

}

export const updateProduct = (id: any, datas: ProductUpdate) => {
    return client({
        url: `/products/${id}`,
        method : "PUT",
        data: datas,
    });
}

