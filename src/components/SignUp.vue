<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" v-model="confirmPassword" required>
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async signup() {
        if (this.password !== this.confirmPassword) {
          console.error('Passwords do not match');
          // Display error message to the user
          return;
        }
  
        try {
          const response = await axios.post('/api/signup', {
            username: this.username,
            password: this.password
          });
          // Handle successful signup (redirect, etc.)
          console.log(response.data);
        } catch (error) {
          console.error('Signup failed:', error.response.data.message);
          // Display error message to the user
        }
      }
    }
  };
  </script>
  