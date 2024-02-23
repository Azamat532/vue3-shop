import apiProducts from '@/helper/api/api'
import { defineStore } from 'pinia'
export const useSingleProductStore = defineStore('product', {
  state: () => ({
    product: null,
  }),
  actions: {
    async getSingleProduct(id) {
      try {
        const res = await apiProducts.getSingleProduct(id)
        this.product = res
      } catch (error) {
        console.error(error.message);
      }
    },
  //   save() {
  //     localStorage.setItem('product', JSON.stringify(this.product))
  // },
  },
  persist: true
})

