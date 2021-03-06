/*
 * Entry point for the Vue app. Imports Vue and all needed plugins.
 */

import Vue from 'vue';

import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import App from './App.vue';


Vue.config.productionTip = false;

// Apollo config for development. Change this URI if your graphql-faker url is different.
const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://localhost:9002/graphql',
  }),
});

// Import VueApollo.
Vue.use(VueApollo);

// Import Element.
Vue.use(Element);

// Creates root Vue instance.
new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
