<template>
    <div class="card">
        
        <swiper
        :grab-cursor="true"
         class="mySwiper">
            <swiper-slide  v-for="item in info?.images"><RouterLink :to="'/'+ info?.category + '/' + info?.id"><img :src="item" alt="" class="card__image"></RouterLink></swiper-slide>
        </swiper>
        
        <h3 class="card__title">{{info?.title}}</h3>
        <Heart class="card__liked" :class="{'liked' : getLiked}"  @click="purchasedProductsStore?.getLiked(info)"/>
        <div class="card__bottom">
            <span class="card__price"> <span class="card__price-deleted">{{info?.price}} $</span>  {{discountedPrice}} $</span>
            <span @click="buyProduct(info); notify(info?.title)" class="card__btn">В корзину</span>
        </div>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import './style.css';
import { ref, computed} from 'vue';
import { toast } from 'vue3-toastify';
import { usePurchasedProductsStore } from '@/stores/purchasedProductsStore';
import Heart from '@/components/icons/Heart.vue'
const purchasedProductsStore = usePurchasedProductsStore()
const {buyProduct} =purchasedProductsStore
const props = defineProps({
    info : {
        type: Object,
        required: true
    }
})
const getLiked = computed(()=> {
  return purchasedProductsStore?.liked?.find(item => item?.id == props?.info?.id )
})
const getProductAmount = computed(()=> {
  return purchasedProductsStore?.cart?.find(item => item?.id == props?.info?.id )
})
const notify = (title) => {
  toast(`Ты купил ${title} \n количество: ${getProductAmount?.value?.amount}`, {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  });
}
// singleProductStore.getSingleProduct(props?.info?.id)

const discountedPrice = Math.floor((props.info.price - (props.info.price * props.info.discountPercentage / 100))) 
</script>
<style lang="scss" scoped>
.swiper {
    width: 100%;
    // height: 100%;
  }
  
  .swiper-slide {
    // text-align: center;
    // font-size: 18px;
    // background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>