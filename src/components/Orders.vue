<script setup>

const orders = JSON.parse( localStorage.getItem( "order"))

</script>


<template>
   
   <v-container>
        <v-row>
            <v-col cols="12" align="right">
                <v-btn> Checkout </v-btn>
            </v-col>
            <v-col v-for="order in orders" :key="order" cols="12" >
                <v-card border="opacity-50 sm lime" variant="elevated" class="mx-auto" >
                    <v-row>
                    <v-col md="4" >
                        <v-img :src = "order.product.image" width="150px" height="150px"></v-img>
                    </v-col>
                    <v-col md="6">
                        <v-card-item>
                            <div>
                                <div class="text-overline mb-1"> {{order.product.name}} </div>
                                <div class="text-caption"> {{order.product.price}} </div>
                                <div class="text-caption">No of Items: {{ order.quantity }}</div>
                                <div class="text-h6 mb-1">Total: {{ order.quantity * order.product.price }}</div>
                            </div>
                        </v-card-item>
                        <v-card-actions>
                            
                        </v-card-actions>
                    </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
   </v-container>
  
</template>