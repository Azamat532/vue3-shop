<script setup>
import CategoriesView from '@/views/categoriesView/CategoriesView.vue'
</script>

<template>
    <main>
        <Suspense>
            <CategoriesView />
            <template #fallback>
                <h1>loading</h1>
            </template>
        </Suspense>
    </main>
</template>