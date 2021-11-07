require('./bootstrap');


import { fromPairs } from 'lodash';
import Vue from 'vue'

Vue.component('pagination', require('laravel-vue-pagination'));

import postinngIndex from './components/Postinng/Index.vue'

const app = new Vue({
    el: '#app',
    components: {postinngIndex}
  
})