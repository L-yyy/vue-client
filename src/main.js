import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$http = axios; //修改内部$http为axios
//安装axios  npm install axios --save-dev

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')