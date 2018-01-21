import Vue from 'vue'
import Main from './main.vue'

window.vue = new Vue({
    el: '#main',
    render: h => h(Main)
});