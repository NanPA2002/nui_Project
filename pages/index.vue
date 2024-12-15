<template>
    <div class="box">
        index
        <pre>{{ store.$state.token }}</pre>
    </div>
</template>

<script setup lang="ts">

import { useIndexStore } from '~/store/main';
definePageMeta({
  middleware: 'auth',
})

const store = useIndexStore()


</script>

<style scoped>

</style>