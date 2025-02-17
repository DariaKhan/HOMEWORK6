import { createApp } from 'vue' 
import App from './App.vue' 
import BootstrapVueNext from 'bootstrap-vue-next' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css' 
import router from './router'
import store from './store'

const app = createApp(App)

app.use(router) 
app.use(BootstrapVueNext)
app.use(store)

app.mount('#app')

