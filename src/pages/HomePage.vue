<script setup>
import ProductsView from '@/views/productsView/ProductsView.vue';
import SkeletonLoader from '@/components/skeletonLoader/SkeletonLoader.vue';
import AnimatedPlaceholder from '@/components/skeletonLoader/AnimatedPlaceholder.vue';
</script>

<template>
  <main>
    <Suspense>
      <ProductsView />
      <template #fallback>
        <div class="wrapper-loader" style="background: #749dc5;">

          <div class="container">
            <div class="skeleton-form">
              <AnimatedPlaceholder 
              :heigth="'42px'" 
              :width="'117px'" />
  
              <AnimatedPlaceholder 
              :heigth="'42px'" 
              :width="'500px'" 
              :margin="'0 30px 0 auto'" />
  
              <AnimatedPlaceholder  
              :heigth="'42px'" 
              :width="'220px'"/>
            </div>
            <div class="skeleton-cards">
              <SkeletonLoader v-for="item in 12" />
            </div>
          </div>
        </div>
      </template>
    </Suspense>
  </main>
</template>
