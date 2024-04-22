<template>
    <div>
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <label for="title">Title:</label>
        <input type="text" v-model="title" required>
        <label for="description">Description:</label>
        <textarea v-model="description" required></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        description: ''
      };
    },
    methods: {
      async addTask() {
        try {
          const response = await axios.post('/api/tasks', {
            title: this.title,
            description: this.description
          });
          // Handle successful task addition (redirect, etc.)
          console.log(response.data);
        } catch (error) {
          console.error('Error adding task:', error.response.data.message);
          // Display error message to the user
        }
      }
    }
  };
  </script>
  