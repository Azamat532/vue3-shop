import { defineStore } from 'pinia'
export const usePurchasedProductsStore = defineStore('purchasedProducts', {
  state: () => ({
    // filterType: '',
    modalOpened: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    liked: JSON.parse(localStorage.getItem('liked')) || [],
  }),
  actions: {
    openModal() {
        this.modalOpened = true
    },
    closeModal() {
        this.modalOpened = false
    },
     buyProduct(product, productAmount) {
        const existingProduct = this.cart.find(toProduct => toProduct.id === product.id)
        if(productAmount && !product?.amount && product?.id != existingProduct?.id) {
            console.log(productAmount);
            this.cart.push({...product,amount: productAmount})
        }else if(existingProduct && existingProduct.amount < product.stock) {
            if(+productAmount + +existingProduct.amount <= existingProduct?.stock) {
                console.log(productAmount);
                existingProduct.amount = +existingProduct.amount + +productAmount
            }else if (+productAmount + +existingProduct.amount >= existingProduct?.stock) {
                existingProduct.amount = existingProduct?.stock
            }else {
                existingProduct.amount++
            }
            
        }else if (!existingProduct?.amount) {
            this.cart.push({...product,amount: 1})
        }
        this.save()
    },
     deleteProduct(index) {
        this.cart.splice(index, 1)
        this.save()
    },
     reduceAmount(index){
        if(this.cart[index].amount > 1) {
            this.cart[index].amount--
        }
        this.save()
    },
     increaseAmount(index, stock){
        if (this.cart[index].amount < stock) {
            this.cart[index].amount++
        }
        this.save()
    },
    deleteAll() {
        this.cart.length = 0
        this.save()
    },
    getLiked(product) {   
        console.log(product);
        const existingProduct = this.liked.find(toProduct => toProduct.id === product.id)
        if(!existingProduct) {
            this.liked.push(product)
        }else {
            const unExistingProduct = this.liked.findIndex(toProduct => toProduct.id === product.id)
            console.log(unExistingProduct);
            if(unExistingProduct) {
                this.liked.splice(unExistingProduct, 1)
            }
        }
        this.saveLiked()
    },
    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    saveLiked() {
        localStorage.setItem('liked', JSON.stringify(this.liked))
    },
    
  }
})

