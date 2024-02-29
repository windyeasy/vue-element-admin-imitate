import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import 'normalize.css'
import 'virtual:uno.css'
import '@/icons/index'

// 导入自定义样式
import '@/assets/css/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
