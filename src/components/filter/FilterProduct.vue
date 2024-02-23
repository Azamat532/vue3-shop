<script setup>
import {ref, defineProps, defineEmits} from 'vue';
const props = defineProps(['selectedFilter', 'filters'])
const filterOptions = [
  {value: '', label: 'Hammasi'},
  {value: 'arzon', label: 'Arzon'},
  {value: 'qimmat', label: 'Qimmat'},
]

</script>

<template>
    <section  class="filter">
      <div class="container">
        <select class="filter__sort">
          <option  v-for="filter in filterOptions" :key="filter.value" :value="filter.value" value="">{{ filter.label }}</option>
        </select>
        <p class="filter__amount">Общее кол-во товаров</p>
      </div>
    </section>
</template>
