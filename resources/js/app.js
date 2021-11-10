require('./bootstrap');


import { fromPairs } from 'lodash';
import Vue from 'vue'
import VueRouter from 'vue-router';

import VureRouter from 'vue-router';
Vue.use(VueRouter)

import App from './components/App.vue'

import routes   from '../routes'

const router = new VueRouter(routes)

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    components: {App},
    router
  
})