import Vue from 'vue'
import Main from './main.vue'
import Router from '../router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

window.vue = new Vue({
    el: '#main',
    render: h => h(Main),
    router: Router,
    http: {
        root: 'localhost:5001'
    }
});