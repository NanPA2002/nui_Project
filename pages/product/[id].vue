<template>
  <div class="">
    <div class="p-5" v-if="product.id != 0">
      <!-- 1 -->
      <div class="m-2 text-gray">อุปกรณ์เสริม > คีย์บอร์ด</div>
      <!-- 2 -->
      <div class="flex justify-between">
        <!-- รูป -->
        <div class="flex justify-center m-2 w-full">
          <img
            class="border-[1px] w-72 h-72 object-cover"
            :src="product.img"
            alt=""
          />
        </div>
        <!-- ชื่อและรายละเอียด -->
        <div class="m-2 ml-5 w-full">
          <h1 class="nameproduct">{{product.name}}</h1>
          <div class="flex gap-2">
            <h1 class="price">฿ {{ product.price }}</h1>
            <p class="text-slate-400/70 text-sm mt-[5px] underline">
              ยอดขาย <span>50</span>
            </p>
          </div>
          <p class="mt-3 mb-3 mr-10 w-auto p-2 rounded-[20px] detailproduct">
            {{ product.detail }}
          </p>
          <div class="bg-slate-300/20 p-5 w-56 rounded-[20px]">
            <div class="flex ju gap-3">
              <h1 class="mt-4">จำนวน</h1>
              <div class="mt-2 mb-5 p-1 flex gap-2 bg-white rounded-[5px] w-30">
                <button class="ml-2 bg-white rounded-full">-</button>
                <input type="nume" class="text-center w-[56px]" />
                <button class="mr-2 bg-white rounded-full">+</button>
              </div>
            </div>
            <div class="flex gap-3">
              <button type="button" class="button">เพิ่มใส่ตะกร้า</button>
              <button type="button" class="button">ซื้อเลย</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="flex justify-between mt-5 p-2 bg-sky-600/20 rounded-[20px]">
        <!-- รูปวีวิว -->
        <div class="m-2 p-2 w-full grid justify-items-center grid-cols-2 gap-2">
          <img
            class="w-20 h-20 object-cover"
            src="https://shopping.linncomputer.com/images/product/Untitled_design_-_2023-09-19T132830.942_1695106845556.png"
            alt=""
          />
          <img
            class="w-20 h-20 object-cover"
            src="https://shopping.linncomputer.com/images/product/Untitled_design_-_2023-09-19T132830.942_1695106845556.png"
            alt=""
          />
          <img
            class="w-20 h-20 object-cover"
            src="https://shopping.linncomputer.com/images/product/Untitled_design_-_2023-09-19T132830.942_1695106845556.png"
            alt=""
          />
          <img
            class="w-20 h-20 object-cover"
            src="https://shopping.linncomputer.com/images/product/Untitled_design_-_2023-09-19T132830.942_1695106845556.png"
            alt=""
          />
        </div>
        <!-- รีวิว -->
        <div class="m-2 w-full p-2 bg-yellow-50 rounded-[20px]">
          <h1 class="header text-center">review</h1>
          <div class="m-3">
            <div>ชื่อ</div>
            <div>รายละเอียด</div>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="mt-5 p-2 bg-sky-600/20 rounded-[20px]">
        <h1 class="header">สินค้าคล้ายคลึง</h1>
        
        <div v-for="(item, index) in product"
         :key="index" >
          
        </div>
      </div>
    </div>
    <div class=" px-4 py-2" v-else>
      <span>Loading</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/model/product.model';
import axios from "axios";
import service from '~/service';

const loading =ref<boolean>(false); 
const route = useRoute();
// ตัวที่รับข้อมูล
const product =ref<Product>(
    {
    id:0,
    name:"AULA",
    detail:"Wried Mechanical KEYBOARD ",
    price:1240,
    amount:10,
    img:"https://aulathailand.com/wp-content/uploads/2023/06/1.png",
    }
);

const getProductByID = async () => {
  await 
  service.product.getProductById(route.params.id)
  .then((resp : any)  => {
  loading.value = true;
  const data = resp.data;
  const productList: Product[] = []

console.log(data);
// data เป็นจำนวน ต้องใส่ length เพื่อให้รู้จำว่าเป็นจำนวน
  const temp: Product = {
    id:data.id,
    name: data.title,
    detail: data.ddatascription,
    price: data.price,
    amount: data.rating.count,
    img: data.image,
  }
  product.value = temp;
 }).catch((erorr: any) => {
  console.log(erorr.respontse);
 })
 .finally(() => { 
  loading.value = false;
 })
}

// const getProductByID = async () => {
    
//     // connect API

//     //try{
//     //     const response = await fetch(`https://api.example.com/products/${route.params.id}`);
//     //     if(!response.ok){
//     //         throw new Error(`HTTP error! status: ${response.status}`);
//     //     }
//     //     const data await response.json();
//     //     product.value = data;
//     //     }catch(error) {
//     //     console.error("Error fetching product:",error);
//     // }

// }

// เรียกฟังชั่งก่อนหน้าจะรีโหลด
onMounted(() => {
    // use function
    getProductByID();
});


</script>


<style scoped></style>
