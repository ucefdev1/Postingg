require('./bootstrap');


import { fromPairs } from 'lodash';
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

import App from './components/App.vue'

//import alertify from 'alertifyjs';
//Vue.use(alertify);

import Notifications from 'vue-notification'
Vue.use(Notifications)

import routes   from '../routes'

const router = new VueRouter(routes)

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    components: {App},
    router
  
})