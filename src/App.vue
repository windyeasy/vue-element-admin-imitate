<script setup lang="ts">
import useLoginStore from '@/store/login'

const loginStore = useLoginStore()
console.log(loginStore)
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style scoped>

</style>
