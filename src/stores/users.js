import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users',  {
   state: () => {
        const users = {
        0:{
            name: 'John Doe',
            email: 'john@example.com',
            phone: 254732874678,
            deliveryAddress: '123, Madaraka',
            password: 'qwertyuio',
            userType: 'Customer',
            activeAccount: true
        },
        1:{
            name: 'Jane Doe',
            email: 'jane@example.com',
            phone: 254726774678,
            deliveryAddress: '123, Madaraka',
            password: 'qwertyuio',
            userType: 'Customer',
            activeAccount: true
        },
        2:{
            name: 'Jack Doe',
            email: 'jack@example.com',
            phone: 254726774678,
            deliveryAddress: '123, Madaraka',
            password: 'qwertyuio',
            userType: 'Admin',
            activeAccount: true
        },
        3:{
            name: 'Jill Doe',
            email: 'jill@example.com',
            phone: 254726774678,
            deliveryAddress: '123, Madaraka',
            password: 'qwertyuio',
            userType: 'Customer',
            activeAccount: true
        },
        4:{
            name: 'Judith Doe',
            email: 'judith@example.com',
            phone: 254726774678,
            deliveryAddress: '123, Madaraka',
            password: 'qwertyuio',
            userType: 'Customer',
            activeAccount: false
        }
       }
       return{
           users,
       }
   },
   actions:{
       
   },
   persist: true,
})