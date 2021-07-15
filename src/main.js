import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
//import { dollarFilter } from '@/filters' //Lo llame desde el componente

createApp(App).use(router).mount('#app')
