import Vue from 'vue'
import App from './App.vue'
import {router} from './test/router';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
