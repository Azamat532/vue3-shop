<script setup>
import {usePurchasedProductsStore} from '@/stores/purchasedProductsStore'
import { storeToRefs } from 'pinia';
import { computed} from 'vue'
const purchasedProductsStore = usePurchasedProductsStore()
const { modalOpened, closeModal} = storeToRefs(purchasedProductsStore)
const totalPrice = computed(() => {
    return purchasedProductsStore?.cart?.reduce((total, product) => total + (Math.floor((product.price - (product.price * product.discountPercentage / 100))) * product.amount), 0)
})
</script>
<template>
    <div class="modal" :class="{'active' : modalOpened}">
        <div class="container">
            <div class="modal__content">
            <span @click="modalOpened = false" class="modal__close">&times;</span>
            <p class="modal__content-txt">Корзина</p>
            <div v-if="purchasedProductsStore?.cart != ''" class="modal__content-products">
                <div  class="modal__cards">
                <div v-for="(item, index) in purchasedProductsStore?.cart" :key="item?.id" class="modal__card">
                    <div class="modal__card-productInfo">
                        <img :src="item?.thumbnail" alt="" class="modal__card-image">
                        <h4 class="modal__card-title">{{ item?.title }} <br/> Цена: {{ Math.floor((item?.price - (item?.price * item?.discountPercentage / 100))) }}$</h4> 
                    </div>
                    <div class="modal__card-productAmountInfo">
                        <button class="modal__card-reduce modal__card-btn"  @click="purchasedProductsStore?.reduceAmount(index)">-</button>
                        <span class="modal__card-productAmount">{{ item?.amount }}</span>
                        <button class="modal__card-increase modal__card-btn"  @click="purchasedProductsStore?.increaseAmount(index, item?.stock)">+</button>
                    </div>
                    <button class="modal__card-cancel" @click="purchasedProductsStore?.deleteProduct(index)">&times;</button>
                </div>
                </div>
                <div class="modal__content-totalPrice">
                    <strong >Итоговая цена: {{ totalPrice }}$</strong>
                    <button @click="purchasedProductsStore?.deleteAll(); modalOpened = false" class="modal__content-totalPrice__btn">Заказ</button>
                </div>
            </div>
            
            <div v-else-if="purchasedProductsStore?.cart == ''" class="modal__content-empty">
                <img  src="@/assets/images/shopocat.490a4a1.png" alt="" class="modal__card-empty">
                <p class="modal__card-empty-txt">
                    твоя корзина пуста
                    <br/>
                    <br/>
                    <p>
                        Товары которые вы заказываете появятся здесь</p>
                    </p>
            </div>
            
        </div>
        </div>
    </div>
    
</template>
