import Vue from 'vue'
import Main from './main.vue'
import Router from '../router'


window.vue = new Vue({
    el: '#main',
    render: h => h(Main),
    router: Router,
});