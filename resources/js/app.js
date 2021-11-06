require('./bootstrap');


import { fromPairs } from 'lodash';
import Vue from 'vue'

import postinngIndex from './components/Postinng/Index.vue'

const app = new Vue({
    el: '#app',
    components: {postinngIndex}
  
})