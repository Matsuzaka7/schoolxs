<template>
  <main class="container">
    <div class="list">
      <div class="list-title">
        <h2>{{ data?.name || '获取失败' }}</h2>
      </div>
    </div>
    <ul class="list-ul">
      <li v-for="item in data?.list" :key="item.id">
        <RouterLink :to="`jourDetails?q=${data?.url}&id=${item.id}`">
          <div>{{ item.text }}</div>
          <div class="time">{{ item.time }}</div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import type { jourDataTypes } from "@/types/store/state.d"
import store from "@/utils/store";

const route = useRoute();
const data = ref<jourDataTypes>();
const getList = (queryId: string) => {
  if (!queryId) return { name: "获取文章失败", url: '', list: [] };
  const find = store.jourData.find((item) => item.url === queryId);
  if (find) return find;
  else return { name: "没有该文章", url: '', list: [] };
};

watch(
  () => route,
  () => {
    data.value = getList(route.query.q as string);
  },
  { deep: true, immediate: true }
);
</script>

<style lang="scss" scoped>
.container {
  .list {
    .list-title h2 {
      color: #c7161a;
      font-weight: 500;
      font-size: 18px;
      padding: 10px 0;
      border-bottom: 2px solid #ddd;
    }
  }
  .list-ul li {
    a {
      color: #333;
      cursor: pointer;
      display: flex;
      padding: 0 5px;
      justify-content: space-between;
      margin: 10px 0;
      transition: all 0.3s;
      &:hover {
        color: #1677c7;
      }
    }

    .time {
      color: #666;
    }
  }
}
</style>
