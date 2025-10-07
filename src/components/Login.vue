<template>
    <v-container fluid fill-height class="login-background">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card elevation="10" class="pa-6 rounded-lg">
            <v-form @submit.prevent="login" ref="form">
              <div class="text-center mb-6">
                <h1 class="text-h4 font-weight-bold teal--text text--darken-2">
                  Welcome Back
                </h1>
                <p class="text-subtitle-1 mt-2">
                  Log in to The Phone Shop
                </p>
              </div>
              <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" required outlined dense ></v-text-field>
              <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword" required outlined dense ></v-text-field>
              <div class="d-flex justify-space-between align-center mb-2">
                <a href="#" class="teal--text text--darken-2 text-body-2" >Forgot password?</a >
              </div>
              <v-btn block color="lime" dark class="mt-4" large type="submit"> Log In </v-btn>
              <div class="text-center mt-6">
                <p>
                  Don't have an account?
                  <router-link to="/signup" class="teal--text text--darken-2 font-weight-medium" >Sign Up</router-link>
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
  
  // Form fields
  const email = ref(null);
  const password = ref(null);
  const showPassword = ref(false);
  const form = ref(null);
  
  // Login handler with form validation
   function login() {
    
    if (!email.value || !password.value) {
      console.error('Email and password are required')
      return
    }
    let user = JSON.parse(localStorage.getItem( "user"));
  
    try {
      if(email.value = user.email && password.value == user.password){
        localStorage.setItem( "isLoggedIn", true );
  
        if(user.userType == "Admin"){
          localStorage.setItem( "isAdmin", true );
        }
  
        router.push('/').then(() => {
          router.go(0); // Reloads the current route
        });
      }else{
          console.log("Invalid credentials")
      }    
    } catch (err) {
      // Error is already handled by the auth service
      console.error('Login failed', err)
    }
  }
  </script>