<template>
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card elevation="10" class="pa-6 rounded-lg">
            <v-form @submit.prevent="signUp" ref="form">
              <div class="text-center mb-6">
                <h1 class="text-h4 font-weight-bold teal--text text--darken-2"> Join The Phone Shop </h1>
              </div>
              <v-text-field v-model="name" label="Full Name" prepend-inner-icon="mdi-account" :rules="[(v) => !!v || 'Name is required']" required outlined dense ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                :rules="[
                  (v) => !!v || 'Email is required',
                  (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                ]"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field v-model="phone" label="Phone Number" prepend-inner-icon="mdi-phone" :rules="[(v) => !!v || 'Phone is required']" required outlined dense ></v-text-field>
              <v-text-field v-model="delivery_address" label="Delivery Address" prepend-inner-icon="mdi-location" :rules="[(v) => !!v || 'Address is required']" required outlined dense ></v-text-field>
  
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                :rules="[
                  (v) => !!v || 'Password is required',
                  (v) => v.length >= 8 || 'Password must be at least 8 characters',
                ]"
                required
                outlined
                dense
              ></v-text-field>
  
              <v-text-field
                v-model="password_confirmation"
                label="Confirm Password"
                prepend-inner-icon="mdi-lock-check"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showConfirmPassword ? 'text' : 'password'"
                @click:append="showConfirmPassword = !showConfirmPassword"
                :rules="[
                  (v) => !!v || 'Please confirm your password',
                  (v) => v === password || 'Passwords must match',
                ]"
                required
                outlined
                dense
              ></v-text-field>
  
              <v-btn block color="lime" dark class="mt-4" large type="submit"> Sign Up </v-btn>
  
              <div class="text-center mt-6">
                <p>
                  Already have an account?
                  <router-link to="/login" class="teal--text text--darken-2 font-weight-medium" >Log In</router-link >
                </p>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const form = ref(null);
  const name = ref(null);
  const email = ref(null);
  const phone = ref(null);
  const delivery_address = ref(null);
  const password = ref(null);
  const password_confirmation = ref(null);
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  
  function signUp(){
    const user = {
          'name': name.value,
          'email': email.value,
          'phone': phone.value,
          'deliveryAddress': delivery_address.value,
          'password': password.value,
          'userType': 'Customer',
          'activeAccount': true
      }
  
    try {
      localStorage.setItem( "user", JSON.stringify(user) );
      localStorage.setItem( "isLoggedIn", true );
      // Redirect after successful signup
        router.push('/').then(() => {
        router.go(0); // Reloads the current route
      });
    } catch (err) {
      
      console.error('Sign up failed', err)
    }
  };
  </script>