<script setup>
import Card from '@/components/card/Card.vue';
import { useProductsStore } from '@/stores/productsStore';

import { ref, computed } from 'vue';
const productsStore = useProductsStore()
const filterOptions = [
  {value: 'arzon', label: 'Подешевле'},
  {value: 'qimmat', label: 'Подороже'},
]
const option = ref('')
const itemsPerPage = 12
const search = ref('')
const filteredProducts =  computed(() => {
  const searchProduct = ref(productsStore?.products)
  if (search.value.trim() != '') {
    
      searchProduct.value = searchProduct?.value?.filter(product =>
      product.title.toLowerCase().includes(search.value.toLowerCase())
      )
    
    }
    return searchProduct?.value?.sort((a, b) => {
      if(option.value == 'arzon') {
        currentPage.value = 1
        return a?.price - b?.price
      } else if(option.value == 'qimmat') {
        currentPage.value = 1
      return b?.price - a?.price
    }
    return productsStore?.products
    
  })
})

const currentPage = ref(1)

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredProducts?.value?.slice(startIndex,endIndex)
})
const onClickHandler = (page) => {
  console.log(page);
};

await productsStore?.getProducts()
</script>
<template>
    <section  class="filter">
      <div class="container">
        <div class="filter__types">
          <select class="filter__sort" v-model="option">
            <option selected disabled value="">Все</option>
          <option  v-for="filter in filterOptions" :key="filter.value" :value="filter.value" value="">{{ filter.label }}</option>
        </select>
        </div>
        <input type="text" v-model="search" placeholder="Поиск" class="filter__search">
        <p class="filter__amount">Общее кол-во товаров {{ productsStore?.allProductsAmount }} </p>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <div v-if="paginatedProducts != ''" class="products__cards" :class="{'grid' : paginatedProducts?.length < 4}">
          <!-- <RouterLink  :to="'/' + item?.id"> -->
            <Card v-for="item in paginatedProducts"  :key="item.id" :info="item"  />
          <!-- </RouterLink> -->
        </div>
        <div v-else class="products__cards" :class="{'grid' : filteredProducts?.length < 4}">
          <!-- <RouterLink  :to="'/' + item?.id"> -->
            <Card v-for="item in filteredProducts"  :key="item.id" :info="item"  />
          <!-- </RouterLink> -->
        </div>
      </div> 
      <div class="products__pagination">
        <vue-awesome-paginate
        :total-items="filteredProducts?.length"
        :items-per-page="12"
        :max-pages-shown="4"
        v-model="currentPage"
        :on-click="onClickHandler"
        class="vue-awesome-paginate"
        />
          
      </div>
    </section>

</template>

<style scoped>

.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }

  .vue-awesome-paginate {
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: center;
  }

</style>