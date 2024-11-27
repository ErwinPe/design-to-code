<template>
  <div class="min-h-screen">
    <router-view :key="$route.path" v-slot="{ Component }">
      <component :is="Component" class="overflow-auto min-h-screen" />
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>