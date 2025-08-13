import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'

import naive from 'naive-ui'

import { pinia } from './stateStore/index'
import router from './router'

import i18n from './i18n'

createApp(App)
  .use(naive)
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount('#app')
