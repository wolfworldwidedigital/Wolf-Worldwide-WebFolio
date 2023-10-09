// Imports
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

// Create Vue app
const app = createApp(App);

// Use Vue Router
app.use(router);

// Mount the app
app.mount('#app');