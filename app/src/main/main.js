import Vue from 'vue'
import Main from './main.vue'
import Router from '../router'

window.vue = new Vue({
    el: '#main',
    router: Router,
    render: h => h(Main)
});