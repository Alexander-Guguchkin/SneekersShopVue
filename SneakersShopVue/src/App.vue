<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/core/components/BaseComponents/Header.vue";
</script>

<template>
  <div class="wrapper">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper{
  padding: 40px 45px;
}
</style>
