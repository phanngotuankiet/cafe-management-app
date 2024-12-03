import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './style.css'

// cung cấp apollo client dịch vụ
import { provideApollo } from './apollo'

const app = createApp({
  setup() {
    provideApollo()
    return () => h(App)
  },
})

app.use(createPinia())
app.use(router)
app.mount('#app')