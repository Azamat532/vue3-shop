<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';


</script>

<template>
    <div class="card-avatar">
        <AnimatedPlaceholder :heigth="'300px'" :width="'100%'" />
        <AnimatedPlaceholder :heigth="'45px'" :width="'70%'" :margin="'10px 0'" />
        <div class="card-avatar__bottom">
            <AnimatedPlaceholder :heigth="'48px'" :width="'130px'" />
            <AnimatedPlaceholder :heigth="'48px'" :width="'80px'" />
        </div>
    </div>
</template>