import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { sync } from 'vue-router-sync'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel.vue'

// SyncManager(store, router)

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)
Vue.component('Panel', Panel)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
