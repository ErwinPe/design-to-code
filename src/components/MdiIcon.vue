<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path :d="path" />
    </svg>
</template>

<script setup lang="ts">

import { computed } from 'vue';

const props = defineProps<{
    name: string;
}>();

const path = computed(() => {
    try {
        return require(`@mdi/js/${props.name}`).default;
    } catch (error) {
        console.error(`Icon "${props.name}" not found.`);
        return '';
    }
})
</script>