import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import ViewExhibitions from './pages/ViewExhibitions';
import AllExhibitions from './pages/AllExhibitions';
import ExhibitionDetails from './pages/ExhibitionDetails';
import AddLocationForm from './pages/AddLocationForm';

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
    path: '/exhibitions/:location_id',
    name: 'ViewExhibitions',
    component: ViewExhibitions
  },
  {
    path: '/addlocationform',
    name: 'AddLocationForm',
    component: AddLocationForm
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
