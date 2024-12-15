<template>
  <div>
    <div
      class="flex items-center justify-between  p-10   h-12 border-2 border-white border-t-black"
    >
      <div class="w-full">
        <div class=" w-60 font-bold   ">
        <p>88/8 หมู่ 12 ตำบลศิลา อำเภอเมือง จังหวัดขอนแก่น 40000 </p>
       </div>
      </div>

      <!-- menu -->
      <div class="w-full grid grid-cols-3  justify-between pt-10 pb-5  ">

          <div>
              <h1 class="mb-2 font-bold">หมวดหมู่</h1>
              <div v-for="(data, i) in page.slice(0,3)" :key="i">
              <NuxtLink :to="data.path">
                {{ data.name }}
              </NuxtLink>
            </div>
          </div>
          <div>
              <h1 class="mb-2 font-bold">ช่วยเหลือ</h1>
              <div v-for="(data, i) in page.slice(0,3)" :key="i">
              <NuxtLink :to="data.path">
                {{ data.name }}
              </NuxtLink>
            </div>
          </div>
          <div>
            <h1 class="mb-2 font-bold">ช่องทางการติดต่อ</h1>
            <div class="flex gap-2 "><h1 class="flex">อีเมล:</h1>GitElectronix@gmail.com</div>
            <div class="flex gap-2 w-52 "><h1 class="">โทรศัพท์:</h1>055 5555 555</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pages } from "~/model/page.model";
const page = ref<Pages[]>([
  {
    name: "โน๊ตบุ๊ค",
    path: "/laptop",
    active: false,
  },
  {
    name: "คอมพิวเตอร์",
    path: "/computer",
    active: false,
  },
  {
    name: "อุปกรณ์เสริม",
    path: "/accessory",
    active: false,
  },
  {
    name: "การชำระเงิน",
    path: "/payment",
    active: false,
  },
  {
    name: "คืนสินค้า",
    path: "/return",
    active: false,
  },
  {
    name: "ติดต่อสอบถาม",
    path: "/contact",
    active: false,
  },
]);
</script>

<style scoped></style>
