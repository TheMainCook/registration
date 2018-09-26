/*
 * Router setup and router config.
 */
import Vue from 'vue';
import Router from 'vue-router';

// Import individual views.
import Home from './views/Home.vue';
import Gender from './views/Gender.vue';

// Tell Vue to use vue-router plugin.
Vue.use(Router);

// Router config.
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/gender',
      name: 'gender',
      component: Gender,
    },
  ],
});
