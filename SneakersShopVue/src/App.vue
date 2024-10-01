<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/core/components/Blocks/Header.vue";
</script>

<template>
 
    <Header />
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
