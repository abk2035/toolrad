import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import mitt from 'mitt'

const emitter = mitt()

loadFonts()

 const app = createApp(App);
 app.config.globalProperties.emitter = emitter
 app.use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
