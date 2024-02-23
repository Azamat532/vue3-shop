<template>
    <button class="products__pagination-bullet" :class="{'active': currentPage == page}"  :disabled="currentPage == page">
            {{ number }}
     </button>
</template>

<script setup>
import { ref } from 'vue';
const skip = ref(false)
const props = defineProps({
    number: {
        type: Number,
        required: true
    },
    currentPage: Number,
    page: Number,
})
</script>

