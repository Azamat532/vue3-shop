import apiProducts from '@/helper/api/api'
import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', {
  state: () => ({
    // filterType: '',
    products: null,
    allProductsAmount: null,
    categories: null,
    productsByCategory: null,
    currentCategory: null,
    totalPages: null
  }),
  actions: {
    async getProducts() {
      try {
        const res = await apiProducts.getAllProducts()
        this.products = res.products
        this.allProductsAmount = res.total
        this.totalPages = Math.ceil(+res.total / 12)
      } catch (error) {
        console.error(error.message);
      }
    },
    async getProductsCategory(category) {
      try {
        const res = await apiProducts.getProductsCategory(category)
        this.productsByCategory = res.products
      } catch (error) {
        console.error(error.message);
      }
    },
    async getProductsCategories() {
      try {
        const categories = await apiProducts.getProductsCategories()
        this.categories = categories
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  persist: true
})

