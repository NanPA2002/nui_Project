<template>
  <div>
    <div class="m-3 " >
      <h1 class=" fontcategory  m-2 ">อุปกรณ์เสริม</h1>
      <div class="">
        <div class="grid grid-cols-3 card md:grid-cols-3 gap-5" v-if="products.length > 0">
          <div v-for="(item, index) in products"
           :key="index" >
           <!-- <NuxtLink :to="`/product/${item.id}`"> -->
            <CardProduct :product="item" @product-delete="deleteProduct"/>
           <!-- </NuxtLink>  -->
          </div>
        </div>
        <div v-else>
          <h1></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


// import service from "~/plugins/axios";


import type { Product } from "~/model/product.model";
import service from "~/service";



//เช็คtokencookie
definePageMeta({
  middleware: 'auth',
})

const loading = ref<boolean>(false);
const products = ref<Product[]>([
  // {
  //   id:1,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:0,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },
  // {
  //   id:2,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:3,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },
  // {
  //   id:3,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:10,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },
  // {
  //   id:4,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:20,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },
  // {
  //   id:5,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:30,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },
  // {
  //   id:6,
  //   name:"AULA",
  //   detail:"Wried Mechanical KEYBOARD ",
  //   price:1240,
  //   amount:40,
  //   img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",

  // },

]);
const getProductlist = async ( ) => {
  //   Example 1 ไม่มีการเช็ค eror
//   const rep = await axios.get ("https://fakestoreapi.com/products")
//   // console.log(rep.data);
  
// const data = rep.data
// const productList: Product[] = []

// console.log(data);
// // data เป็นจำนวน ต้องใส่ length เพื่อให้รู้จำว่าเป็นจำนวน
//  for (let i = 0; i < data.length; i++){
//   const e = rep.data[i];
//   const product: Product = {
//     id: e.id,
//     name: e.title,
//     detail: e.description,
//     price: e.price,
//     // ถ้าเป็น object ใช้ . ได้ แต่ถ้าเป็น arly ต้องทำการloop
//     amount: e.rating.count,
//     img: e.image,
//   }
//   productList.push(product)
//  }

//  products.value = productList;

 //   Example 2 เช็ค eror ได้

 
 await service.product.getProductList()// การเรียกใช้service url
 .then((resp : any)  => {
  loading.value = true;
  const data = resp.data;
  const productList: Product[] = []

console.log(data);
// data เป็นจำนวน ต้องใส่ length เพื่อให้รู้จำว่าเป็นจำนวน
 for (let i = 0; i < data.length; i++){
  const e = data[i];
  const product: Product = {
    id: e.id,
    name: e.title,
    detail: e.description,
    price: e.price,
    // ถ้าเป็น object ใช้ . ได้ แต่ถ้าเป็น arly ต้องทำการloop
    amount: e.rating.count,
    img: e.image,
  }
  productList.push(product)
 }
 products.value = productList;
 })
//  เช็ค eror
 .catch((erorr: any) => {
  console.log(erorr.respontse);
 })
//  เมื่อโหลดข้อมูลเสร็จให้ทำอะไร
 .finally(() => { 
  loading.value = false;
 })
};
 

const  deleteProduct = async (id: number) => {
  loading.value = true;
  await service.product.deletProduct(id)
  .then((resp:any) =>  {
    const data = resp.data;
    console.log(data);
  }).catch((erorr: any) =>{
    console.log(erorr.respontse);   
  }).finally(() =>{
    loading.value = false;

  })
}



onMounted (async() => {
  await getProductlist();
})

</script>

<style></style>
