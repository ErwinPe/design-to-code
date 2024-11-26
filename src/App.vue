<template>
  <div class="h-screen ">
    <router-view :key="$route.path" v-slot="{ Component }">
      <component :is="Component" class="overflow-auto" />
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>