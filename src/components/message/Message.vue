<template>
    <div class="message">
        <h3 class="message__title">Спасибо за покупку!</h3>
        <div v-for="item in purchasedProductsStore?.purchased" :key="item.id" class="message__card">
            <h3 class="message__card-title">"{{ item?.title }}"</h3>
            <p class="message__card-productAmount">количество: {{ item.amount }}</p>
            <p class="message__card-info">
               Цена: {{ Math.floor((item?.price - (item?.price * item?.discountPercentage / 100))) }}$ 
            </p>
        </div>
         <p class="message__totalPrice">
           Итоговая цена: {{ totalPrice }}$
         </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import {usePurchasedProductsStore} from '@/stores/purchasedProductsStore'
const purchasedProductsStore = usePurchasedProductsStore()

const totalPrice = computed(() => {
    return purchasedProductsStore?.purchased?.reduce((total, product) => total + (Math.floor((product.price - (product.price * product.discountPercentage / 100))) * product.amount), 0)
})
</script>