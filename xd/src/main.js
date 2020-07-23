import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from "mint-ui"

axios.defaults.baseURL="http://127.0.0.1:4000";
Vue.prototype.axios=axios;
Vue.config.productionTip = false;
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
