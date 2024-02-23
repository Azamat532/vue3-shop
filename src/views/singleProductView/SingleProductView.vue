<template>
    <section class="product">
        <div class="container">
            <div class="product__image">
                <swiper
                    :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#000',
                    }"
                    :modules="[FreeMode, Navigation, Thumbs]"
                    :spaceBetween="10"
                    :navigation="true"
                    :grabCursor="true"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="mySwiper2"

                >
                    <swiper-slide v-for="item in product?.images" :key="item.id"
                    ><img
                        :src="item" /></swiper-slide
                    >
                    
                </swiper>
                <swiper
                    @swiper="setThumbsSwiper"
                    :modules="[FreeMode, Navigation, Thumbs]"
                    :spaceBetween="10"
                    :slidesPerView="4"
                    :freeMode="true"
                    :grabCursor="true"
                    :watchSlidesProgress="true"
                    class="mySwiper"
                >
                <swiper-slide v-for="item in product?.images" :key="item.id"
                    ><img
                        :src="item" /></swiper-slide
                    >
                    
                </swiper>
            </div>
            <div class="product__content">
                <div class="product__content-top">
                  <p class="product__rating">&bigstar; {{ product?.rating }}</p>
                  <Heart class="product__content-heart" :class="{'liked' : getLiked}" @click="purchasedProductsStore?.getLiked(product)"/>
                </div>
                <h3 class="product__title" >{{ product?.title }}</h3>
                <RouterLink to="/category" class="product__category">{{ 
                product?.category }}</RouterLink>
                <div class="product__order">
                  <span @click="productAmount++" class="product__order-increase product__order-btn">+</span>
                  <input :value="productAmount <= product?.stock && !isNaN(productAmount) ? productAmount : product?.stock" @input="productAmount = +$event.target.value" type="number" class="product__order-num">
                  <span @click="productAmount > 1 ? productAmount-- : productAmount = 1 " class="product__order-reduce product__order-btn">-</span>
                  <p class="product__inStock"> в наличии:{{ product?.stock }}</p>
                </div>
                <p class="product__price">
                  <span>{{ product?.price }}$</span>
                  {{ product?.price - (Math.ceil(product?.discountPercentage / 100 * product?.price)) }}$ 🔥 </p>
                <div class="product__btns">
                  <span @click="purchasedProductsStore.buyProduct(product, productAmount <= product?.stock ? productAmount : product?.stock); notify(product?.title)" class="product__addToCart product__btn">Добавить в корзину</span>
                  <!-- <RouterLink class="product__buyProduct product__btn" to="/">
                    Покупка в один клик
                  </RouterLink> -->
                </div>
                <p class="product__desc" >
                  {{ product?.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed} from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {useSingleProductStore}  from '@/stores/singleProductStore'
import {useRoute} from 'vue-router'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { toast } from 'vue3-toastify';
import { storeToRefs } from 'pinia';
import { usePurchasedProductsStore } from '@/stores/purchasedProductsStore'
import Heart from '@/components/icons/Heart.vue';
const purchasedProductsStore = usePurchasedProductsStore()
const singleProductStore = useSingleProductStore()
const route = useRoute()
const productAmount = ref(1)
const {product} = storeToRefs(singleProductStore)
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}


const getProductAmount = computed(()=> {
  return purchasedProductsStore?.cart?.find(item => item?.id == singleProductStore?.product?.id )
})

const getLiked = computed(()=> {
  return purchasedProductsStore?.liked?.find(item => item?.id == singleProductStore.product.id )
})

const notify = (title) => {
  toast(`Ты купил ${title} количество: ${getProductAmount?.value?.amount}`, {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
}





await singleProductStore.getSingleProduct(route.params.id)
</script>
<style lang="scss" scoped>



.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>