<template>
    <section class="categories" @click="menu = false">
        <div class="container">
            <div class="categories__menu-btn" @click.stop="menu = !menu">
                <CategoryIcon /> Katalog
            </div>
                <ul class="categories__list" :class="{'active' : menu}">
                <li  v-for="category in productsStore?.categories" class="categories__list-item" :class="{'active' : productsStore.currentCategory == category}" @click="productsStore.getProductsCategory(category); productsStore.currentCategory = category; menu = false">{{ category }}  </li>
            </ul>
            <div class="categories__products">
                <h4 class="categories__title"></h4>
                <div class="categories__cards">
                    <Card v-for="item in productsStore?.productsByCategory" :key="item.id" :info="item"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from '@/components/card/Card.vue'
import CategoryIcon from '@/components/icons/CategoryIcon.vue';
import { useProductsStore } from '@/stores/productsStore';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const productsStore = useProductsStore()

const menu = ref(false)

await productsStore?.getProductsCategories()
// const currentCategory = ref(productsStore?.categories[0])
await productsStore?.getProductsCategory(productsStore?.currentCategory || productsStore?.categories[0])
</script>
