<template>
    <div class="flex justify-between items-center pr-4 border-2 border-white border-b-black ">
      <div class="flex items-center justify-between p-4  bgb">
        <div class=" w-28  ">
            <img src="/images/logo.png" alt=""> 
        </div >
        <div class="flex ml-7 gap-4 ">
            <div  v-for="(data, i) in page" :key="i">
            <NuxtLink :to="data.path">
            {{ data.name }}
            </NuxtLink>
            </div>
        </div>       
    </div>
      <div class="flex gap-7 pr-5">
          <div>
            icon
          </div>
          <div>
            icon
          </div>
          <div>
            icon
          </div>
          <div>
            icon
          </div>
          <div>
            icon
          </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Pages } from "~/model/page.model";
const page = ref<Pages[]>([
  {
    name: "Product",
    path: "/product",
    active: false,
  },
  {
    name: "Category",
    path: "/category",
    active: false,
  },
  {
    name: "Contact",
    path: "/contact",
    active: false,
  },
  {
    name: "create",
    path: "/product/create",
    active: false,
  },
]);

</script>

<style scoped>

</style>