<script setup>
import Card from '@/components/card/Card.vue'
import { usePurchasedProductsStore } from '@/stores/purchasedProductsStore'
import Empty from '@/components/icons/Empty.vue'
const purchasedProductsStore = usePurchasedProductsStore()
</script>
<template>
    <section class="favourite">
        <div class="container">
            <div v-if="purchasedProductsStore.liked != ''" class="favourite__cards" :class="{'grid' : purchasedProductsStore?.liked.length < 4}">
                <Card v-for="item in purchasedProductsStore.liked" :key="item.id" :info="item" class="favourite__card"/>
            </div>
            <div v-else class="favourite__empty">
                <Empty />
            </div>
        </div>
    </section>
</template>
