<template>
  <v-app>
    <v-main class="d-flex flex-column bg-background-100">
      <router-view :key="$route.path" v-slot="{ Component }" class="h-100">
        <v-slide-y-transition mode="out-in">
          <component :is="Component" class="overflow-auto" />
        </v-slide-y-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

</script>

<style scoped>
main {
  width: 100%;
  height: available;
}
</style>
