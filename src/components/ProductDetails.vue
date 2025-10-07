<script setup>
import {ref} from 'vue'
import { useProductsStore } from '../stores/products'
import {useRouter} from "vue-router";

const router = useRouter();
const productsStore = useProductsStore()
const selectedProduct = productsStore.selectedProduct
const loading = ref(false)
const error = ref('')
const message = ref('')
const snackbar = ref(false)
const quantity = ref(1)

async function buy(){
    loading.value = true
    const user = JSON.parse(localStorage.getItem("user"))
    let existingOrder = JSON.parse( localStorage.getItem( "order") )

    if (existingOrder == null){
        existingOrder=[]
    }
    const currentOrder = {
            user : user,
            product : selectedProduct,
            quantity: quantity.value,
            payment_status: false,
            payment_method: null, //To do implement MPesa payment
            delivery_status: false, //To do implement MPesa payment
        }
    existingOrder.push(currentOrder)
        console.log(existingOrder)
    //check if user is logged in
    if (!user){
        router.push('/login')
    }else{
        
        try{
            localStorage.setItem( "order", JSON.stringify(existingOrder) )
            
            message.value = 'Order made succefully and is being processed'
        } catch (err) {
            error.value = err.response?.data?.message || 'Order process failed'
            throw err
        } 
    }
}
</script>


<template>
  <v-container>
    <v-row>
        <v-btn class="ma-2" to="/products"><v-icon color="black">mdi-arrow-left</v-icon></v-btn>

    </v-row>
    <v-row>
       <v-col md="6">
           <v-card>
               <v-img class="align-end text-white" height="500" :src="selectedProduct.image" cover ></v-img>
           </v-card>
        </v-col>
        <v-col md="6">
           <v-card>
               <v-card-item>
                   <v-card-title>{{selectedProduct.name}}</v-card-title>
                   <v-chip> {{ selectedProduct.brand }} </v-chip>
                       <v-row>
                           <v-col md="4">
                               <v-rating :model-value="selectedProduct.rating" :size="24" readonly ></v-rating>
                           </v-col>
                           <v-col md="6">
                               <v-btn color="black" variant="outlined" density="compact" readonly> In Stock</v-btn>
                           </v-col>
                       </v-row>
                   <v-card-text> {{selectedProduct.long_description}} </v-card-text>
                   <v-card-title>{{selectedProduct.price}}</v-card-title>
                   <v-card-text> 
                    <v-row>
                        <v-col md="2">Quantity</v-col>
                        <v-col md="4">
                            <v-number-input v-model="quantity" control-variant="split" density="compact" :min="1" :max="10" > </v-number-input>
                        </v-col>
                    </v-row>
                </v-card-text>
               </v-card-item>
               <v-card-actions>
                   <v-btn elevation="4" color="black" variant="tonal" @click="buy()" > Buy </v-btn>
               </v-card-actions>
           </v-card>
            <v-alert v-if="message" type="info" class="mb-4">{{ message }}</v-alert>
       </v-col>
   </v-row>
  </v-container>
  <v-snackbar
      v-model="snackbar"
    >
      {{ message }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false" > Close </v-btn>
      </template>
    </v-snackbar>
</template>