// modules
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';

// components
import App from './App';
import Home from './Home';
import Login from './Login';

Vue.use(VueFire);
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login}
  //{path: '/users/:userId', component: Users}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
