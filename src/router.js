// router.js

import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import TaskList from './views/TaskList.vue';
import TaskForm from './views/TaskForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskList
    },
    {
      path: '/add-task',
      name: 'add-task',
      component: TaskForm
    }
  ]
});
