// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/', // Adjust the URL to match your backend server
});

export default instance;
