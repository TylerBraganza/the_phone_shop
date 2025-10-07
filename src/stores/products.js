import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
       const products = [
        {
            name: 'Samsung Phone',
            price: 25000,
            description: 'Samsung Phone',
            long_description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
            image: '/images/amanz-mmkdpDOEpLw-unsplash.jpg',
            brand: 'Samsung',
            quantity: 3
        },
        {
            name: 'Galaxy S25 Ultra',
            price: 22000,
            description: 'Galaxy S25 Ultra',
            long_description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
            image: '/images/amanz-V9H5VaSbRbE-unsplash.jpg',
            brand: 'Samsung',
            quantity: 2
        },
        {
            name: 'Galaxy S24+',
            price: 30000,
            description: 'The best phone',
            long_description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
            image: '/images/dhruv-vishwakarma-41zMcmdNXrk-unsplash.jpg',
            brand: 'Samsung',
            quantity: 4
        },
        {
            name: 'Samsung Note20 Ultra 5G',
            price: 70000,
            description: 'Samsung Note20 Ultra 5G',
            long_description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
            image: '/images/marios-gkortsilas-1r-nNOtTbTI-unsplash.jpg',
            brand: 'Samsung',
            quantity: 3
        },
       ]
       const selectedProduct = ref(null)

       return{
           products,
           selectedProduct
       }
   },
   actions:{
       updateSelectedProduct (payload) {
           this.selectedProduct = payload
       },
   },
   persist: true,
})