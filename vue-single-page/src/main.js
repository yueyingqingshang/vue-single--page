// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRoter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router';

//注册两个vue的插件
/*Vue.use(VueRoter);
Vue.use(VueResource);

const routes = [
	{
		path:'/',
	redirect: Hello}
];


const router = new VueRoter({
	routes
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});