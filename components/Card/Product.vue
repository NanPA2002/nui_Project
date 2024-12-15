<template>
  <div class="m-1 p-2 bg-slate-300/20 border-[1px] border-black shadow-xl">
    <div class="flex justify-between">
      <div class="flex justify-end">
        <NuxtLink :to="`/product/edit/${product.id}`">
          <img src="/images/imgupdate.png" alt="" class="w-12 cursor-pointer" />
        </NuxtLink>
      </div>
      <div>
        <div>
          <img src="/images/delet.png" alt="" class="w-12 cursor-pointer" @click="emit('product-delete',product.id)"/>
        </div>
      </div>
    </div>
    <!-- img  -->
    <div class="items-center m-2">
      <img :src="product.img" alt="" class="" />
    </div>
    <!-- ชื่อ -->
    <div>
      <div>ชื่อ {{ product.name }}</div>
      <!-- ราคา -->
      <div>ราคา {{ product.price }}</div>
      <!-- จำนวน -->
      <div>
        <!-- if เช็คค่า -->
        <span v-if="product.amount >= 0 && product.amount < 10"
          >คงเหลือ: {{ product.amount }} จำนวน</span
        >
        <span v-else-if="product.amount >= 10">มีมากเกินไป</span>
        <span v-else>หมดสินค้า</span>
        <!--  -->
        <!-- <p v-show="product.amount >= 10">สินค้า</p> -->
      </div>
      <!-- รายละเอียดสินค้า -->
      <div>
        รายละเอียด
        <p>{{ product.detail }}</p>
      </div>
      <div class="flex gap-2 justify-center">
        <div class="mt-3">
          <button class="button">เพิ่มใส่ตะกร้า</button>
        </div>
        <NuxtLink :to="`/product/${product.id}`">
          <div class="mt-3">
            <button class="button">รายละเอียด</button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from "~/model/product.model";


const emit = defineEmits(['product-delete'])
const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<style></style>
