import { createApp } from 'vue' 
import App from './App.vue' 
import BootstrapVueNext from 'bootstrap-vue-next' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css' 
import router from './router'

const app = createApp(App)

app.use(router) 
app.use(BootstrapVueNext)

app.mount('#app')

