import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import ExhibitionsByLocation from './pages/ExhibitionsByLocation';
import AllExhibitions from './pages/AllExhibitions';
import ExhibitionDetails from './pages/ExhibitionDetails';

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
    path: '/exhibitions',
    name: 'AllExhibitions',
    component: AllExhibitions
  },

  {
    path: '/details/exhibition_id',
    name: 'ExhibitionDetails',
    component: ExhibitionDetails
  },
  {
    path: '/exhibitions-by-location/:location_id/:location_name',
    name: 'ExhibitionByLocation',
    component: ExhibitionsByLocation
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
