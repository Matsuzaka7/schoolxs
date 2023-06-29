<template>
  <Header></Header>
  <main>
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
</script>

<style lang="scss" scoped></style>
