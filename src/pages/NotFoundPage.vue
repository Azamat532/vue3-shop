<script setup>
// import { useSingleProductStore } from '@/stores/singleProductStore';
import NotFoundSvg from '@/components/icons/NotFoundSvg.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route);
// const singleProductStore = useSingleProductStore()
// singleProductStore.getSingleProduct(route.params.pathMatch[1])
</script>
<template>
    <div class="container">
        <div class="notFound">
        <NotFoundSvg />
    </div>
    </div>
</template>
<style scoped>
.notFound {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
}
</style>