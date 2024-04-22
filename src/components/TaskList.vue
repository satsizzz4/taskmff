<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task._id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: []
      };
    },
    created() {
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get('/api/tasks');
          this.tasks = response.data;
        } catch (error) {
          console.error('Error fetching tasks:', error.response.data.message);
          // Display error message to the user
        }
      }
    }
  };
  </script>
  