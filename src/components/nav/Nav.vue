<template>
    <nav class="nav">
            <div class="container">
                <Router-link to="/">
                <Nike class="nav__logo" />
                </Router-link>
                <ul class="nav__list" :class="{'active' : menu}">
                    <li @click="menu = false" v-for="item in pages" :key="item.name" class="nav__item">
                        <Router-link :to="item.path" class="nav__link">{{ item.name }}</Router-link>
                    </li>
                </ul>
                <div class="nav__right">
                    <NavHeart  @click="toLikedPage()"/>
                    <span class="nav__cart">
                    <Cart @click="openModal"/>
                    <span v-if="purchasedProductsStore?.cart?.length != ''">{{ purchasedProductsStore?.cart?.length }}</span>
                </span>
                </div>
                <div class="nav__burger" @click="menu = !menu">
                    <span class="nav__burger-line"></span>
                </div>
            </div>
    </nav>
</template>

<script setup>
import Nike from '@/components/icons/Nike.vue'
import Cart from '@/components/icons/Cart.vue'
import { usePurchasedProductsStore } from '@/stores/purchasedProductsStore'
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import NavHeart from '@/components/icons/NavHeart.vue';
import { useRouter } from 'vue-router';
const purchasedProductsStore = usePurchasedProductsStore()
const {openModal, cart} = purchasedProductsStore
const pages = [
    {
        path: "/",
        name: 'Новинки',
    },
    {
        path: "/category",
        name: 'Категории',
    },
    {
        path: "/discounts",
        name: 'Скидки',
    },
    {
        path: "/contacts",
        name: 'Контакты',
    },
    {
        path: "/about",
        name: 'О нас',
    },
]
const menu = ref(false)
const router = useRouter()
const toLikedPage = () => {
    router.push('/liked')
}


</script>