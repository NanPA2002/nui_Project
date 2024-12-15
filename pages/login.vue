<template>
  <div class="  bg-cover h-[862px] bg-[url('/images/bg.jpg')] flex flex-col  justify-center items-center  p-6 ">
      <div class="border-2 border-l-white p-10 rounded-[20px] bg-slate-400/20">
        <div class="flex flex-col text-center gap-3">
          <i class=" font-bold  text-2xl text-yellow-100">Get lectronix</i>
          <h2 class="header">Log in</h2>
        </div>
        <div class="flex flex-col gap-1 ">
          <div class="flex flex-col gap-1">
            Username <input type="text" class="rounded-[5px] p-1" v-model="user.username" />
          </div>
          <div class="flex flex-col gap-1">
            Password <input type="text" class="rounded-[5px] p-1" v-model="user.password" />
          </div>
          <div class="text-xs flex justify-end text-red-600">
            <NuxtLink to="">Forget password</NuxtLink>
          </div>
        </div>
        <button class="mb-2 mt-6 w-full border-2 p-1 rounded-[5px] text-white bg-indigo-600/90 " @click="logins" >
          Log in
        </button>
        <hr class="border-white  "/>
          <div class="flex  justify-center gap-2 mt-2 text-[8px] " >
            <p>Don't have an account ?</p>
            <div class="text-red-600">
              <NuxtLink to="">Register now </NuxtLink>
            </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">



import type { Login } from '~/model/page.model';
import service from '~/service';

import { useIndexStore } from '~/store/main';
const store = useIndexStore()

const router = useRouter()

definePageMeta({
  layout: "auth",
});

const user = ref <Login>({
  username: '',
  password: '',
})

const logins = async () => {
  await service.login.login(user.value)
  .then (( resp: any) => {
    console.log(resp.data)
    store.$state.token = resp.data.token
    // เซ็ต Cookie
    const reftoken = useStatefulCookie('token')
    reftoken.value = (resp.data.token)
    if (store.$state.token != null){
      router.push("/");
    }


    // const users: Login = {  
    //   username: data.username,
    //   password: data.password,
    // }

  }).catch(( err: any) => {
      console.error(err)
  }).finally(() =>{

  })

}



</script>

<style scoped></style>
