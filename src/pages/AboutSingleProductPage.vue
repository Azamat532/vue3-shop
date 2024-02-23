<template>
    <Suspense>
        <SingleProductView />
        <template #fallback>
            <h1>Loading</h1>
        </template>
    </Suspense>
</template>

<script setup>
import SingleProductView from '@/views/singleProductView/SingleProductView.vue'
</script>