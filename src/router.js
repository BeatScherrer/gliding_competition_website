import Vue from 'vue'
import Router from 'vue-router'
import News from './views/News.vue'
import Information from './views/Information.vue'
import Participants from './views/Participants.vue'
import Sponsoring from './views/Sponsoring.vue'
import Register from './views/Register.vue'
import Contact from './views/Contact.vue'
import Dse from './views/Datenschutzerklaerung.vue'

import Login from './components/login/Login.vue'
import User from './components/user/User.vue'

import firebase from '@/firebase.js'

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
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dse',
      name: 'dse',
      component: Dse
    }
  ]
});

// Route guard handling
router.beforeEach((to, from, next) => {

  const user = firebase.auth().currentUser;

  if(user) {
    if(to.matched.some(record => record.meta.requiresGuest)) {
      next('user');
    }
  } else {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if(!user) {
        next('login');
      }
    }
  }
  next();
});

export default router;
