import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

const index = require('../pages/index.vue');
const alpha = require('../pages/alpha.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'index',
            path: '/',
            component: index,
        },
        {
            name: 'alpha',
            path: '/alpha',
            component: alpha,
        }
    ]
});

export default router;