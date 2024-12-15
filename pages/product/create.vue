<template>
  <div>
    <div class="flex flex-col gap-5 p-36 pt-10">
      <div class="border-2 rounded-[20px] p-5 items-center">
        <h1 class="header">เพิ่มสินค้า</h1>

        <div class="flex flex-col gap-5 mt-2">
          <div class="flex gap-2">
            name <input type="text" class="border-2"  v-model="porduct.title"/>
                    
          </div>
          <div class="flex gap-3">
            price <input type="number" class="border-2"  v-model="porduct.price"/>
          </div>
          <!-- <div class="flex gap-3">
            amount <input type="number" class="border-2" />
          </div> -->
          <div class="flex flex-col">
            description <input type="text" class="border-2 h-20" v-model="porduct.description" />
          </div>

          <div class="flex gap-">
            <div>
              category
              <select name="category" id="" v-model="porduct.category">
                <option value="Electronic">Electronic</option>
                <option value="โน๊ตบุ๊ค">โน๊ตบุ๊ค</option>
                <option value="อุปกรณ์เสริม">อุปกรณ์เสริม</option>
              </select>
            </div>
            <div>img <input type="url" class="border-2 h-10" v-model="porduct.image" /></div>
          </div>
          <button type="submit" class="border-2 bg-slate-500" @click="addProduct"> 
             เพิ่ม
          </button>
        </div> 
        <div>
            <h1>ผลลัพธ์</h1>
            <div>
                <p>รหัสสินค้า:{{ porductRes.id }}</p>
                <p>ชื่อ:{{ porductRes.title }}</p>
                <p>ราคา:{{ porductRes.price }}</p>
                <p>รายละเอียด:{{ porductRes.description }}</p>
                <p>หมวด:{{ porductRes.category }}</p>
                <p>รูป:{{ porductRes.image }}</p>
            </div>
        </div>
      </div>
    </div>
    <pre>{{ porduct }}</pre>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import Swal from 'sweetalert2';
import type { ProductCeate, ProductRes } from '~/model/product.model';
import service from '~/service';


const porduct = ref<ProductCeate>({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
}) 

const porductRes = ref<ProductRes>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
}) 

const addProduct = async () => {
    await service.product.createProduct(porduct.value )
    .then ((resp: any)  => {
        console.log(resp.data)  
        const data = resp.data
        
        if (data) {
            Swal.fire({
                title: "เพิ่มสินค้าสำเร็จ",
                text: "เพิ่มสินค้า",
                icon: "success"
                });
            
        }
        
        const porduct: ProductRes =  {
            id: data.id,
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category,
            image: data.image
        }
        porductRes.value = porduct
    })
    .catch((err: any) => {
        console.error(err)
    })
    .finally(() => {
        // สามารถใส่ loading ได้
    });
     // {
    //     title: porduct.value.title,
    //     price: porduct.value.price,
    //     description: porduct.value.description,
    //     category: porduct.value.category,
    //     image: porduct.value.image
    // }

}

</script>



<style scoped></style>
