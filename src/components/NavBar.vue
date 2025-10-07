<script>
const isLoggedIn = localStorage.getItem("isLoggedIn");
const isAdmin = localStorage.getItem("isAdmin");
</script>

<template>
    <v-app-bar color="#CCF0F4">
        <v-app-bar-title>The Phone Shop</v-app-bar-title>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/products">Products</v-btn>
        <v-btn v-if="isLoggedIn" to="/orders">My Orders</v-btn>
        <v-btn v-if="isLoggedIn && isAdmin" to="/admin">Admin</v-btn>
        <v-btn v-if="!isLoggedIn" to="/Login">Login</v-btn>
        <v-btn v-else to="/profile">Profile</v-btn>
    </v-app-bar>
</template>