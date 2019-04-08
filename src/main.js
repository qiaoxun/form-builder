import Vue from 'vue'
import App from './App.vue'
import {router} from './test/router';
import './assets/css/bootstrap.min.css';

// load js
if (require) {
    require('@/config/loader');
}

import {SethPhatToaster} from "@/config/toaster";
window.SethPhatToaster = SethPhatToaster;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
