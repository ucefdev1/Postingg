require('./bootstrap');


import { fromPairs } from 'lodash';
import Vue from 'vue'
import VueRouter from 'vue-router';

import VureRouter from 'vue-router';
Vue.use(VueRouter)

import App from './components/App.vue'
import postinngIndex from './components/Postinng/Index.vue'
import postsCreate from './components/Postinng/create.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: postinngIndex,
            name: 'posts.index'
        },
        {
            path: '/posts/create',
            component: postsCreate,
            name: 'posts.create'
        },
    ]
})

Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: '#app',
    components: {App},
    router
  
})