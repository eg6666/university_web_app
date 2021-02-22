import Vue from 'vue';
import App from '@/App.vue';
import BootstrapVue from 'bootstrap-vue';
import router from "@/router/index";
import "@/servicesInjections";
import Notifications from 'vue-notification'

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.config.productionTip = true
Vue.prototype.$scrollToTop = () => window.scroll({
  top: 0,
  left: 0,
  behavior: 'smooth'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
