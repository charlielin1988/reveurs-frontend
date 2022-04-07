import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import moment from 'moment';

Vue.config.productionTip = false;
Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY');
  }
});
