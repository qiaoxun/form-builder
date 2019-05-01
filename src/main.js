import Vue from 'vue'
import App from './App.vue'
import {router} from './test/router';
import './assets/css/bootstrap.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// load js
if (require) {
    require('@/config/loader');
}

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
