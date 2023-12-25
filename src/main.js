import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { getData } from './apis/testApis'
getData().then(res => {
    const {log} = console
    log(res)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
