<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/api/login', {
            username: this.username,
            password: this.password
          });
          // Handle successful login (store token, redirect, etc.)
          console.log(response.data);
        } catch (error) {
          console.error('Login failed:', error.response.data.message);
          // Display error message to the user
        }
      }
    }
  };
  </script>
  