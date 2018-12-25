import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'
import Information from './views/Information.vue'
import Participants from './views/Participants.vue'
import Sponsoring from './views/Sponsoring.vue'
import Register from './views/Register.vue'
import Contact from './views/Contact.vue'

import Login from './components/login/Login.vue'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/news'
    },
    {
      path: '/',
      redirect: '/news'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/participants',
      name: 'participants',
      component: Participants
    },
    {
      path: '/sponsoring',
      name: 'sponsoring',
      component: Sponsoring
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user_information',
      name: 'user-info',
      component: News,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const current_user = firebase.auth().currentUser;
  console.log(current_user);

  // check if route has meta field requiresAuth
  const requires_auth = to.matched.some(record => record.meta.requiresAuth);

  if(requires_auth && !current_user) next('login');
  else if(requires_auth && current_user) next('user_information');
  else next();
});

export default router;
