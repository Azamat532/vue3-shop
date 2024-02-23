import { defineStore } from 'pinia'
export const usePurchasedProductsStore = defineStore('purchasedProducts', {
  state: () => ({
    // filterType: '',
    modalOpened: false,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    liked: JSON.parse(localStorage.getItem('liked')) || [],
    purchased: JSON.parse(localStorage.getItem('purchased')) || [],
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

        const existingProduct1 = this.purchased.find(toProduct => toProduct.id === product.id)
        if(productAmount && !product?.amount && product?.id != existingProduct1?.id) {
            console.log(productAmount);
            this.purchased.push({...product,amount: productAmount})
        }else if(existingProduct1 && existingProduct1.amount < product.stock) {
            if(+productAmount + +existingProduct1.amount <= existingProduct1?.stock) {
                console.log(productAmount);
                existingProduct1.amount = +existingProduct1.amount + +productAmount
            }else if (+productAmount + +existingProduct1.amount >= existingProduct1?.stock) {
                existingProduct1.amount = existingProduct1?.stock
            }else {
                existingProduct1.amount++
            }
            
        }else if (!existingProduct1?.amount) {
            this.purchased.push({...product,amount: 1})
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
    deletePurchased() {
        this.purchased.length = 0
        this.save()
    },
    getLiked(product) {   
        console.log(product);
        const existingProduct = this.liked.find(toProduct => toProduct.id === product.id)
        if(!existingProduct) {
            this.liked.push(product)
            this.saveLiked()
        }else {
            const unExistingProduct = this.liked.findIndex(toProduct => toProduct.id === product.id)
            this.liked.splice(unExistingProduct, 1)
            this.saveLiked()
        }
        
    },
    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart))
        localStorage.setItem('purchased', JSON.stringify(this.purchased))
    },
    saveLiked() {
        localStorage.setItem('liked', JSON.stringify(this.liked))
    },
    
  }
})

