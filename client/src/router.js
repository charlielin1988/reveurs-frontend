import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Locations from './pages/Locations.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
