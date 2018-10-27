import Home from '../components/home/Home.vue'
import News from '../components/news/News.vue'
import Participants from '../components/participants/Participants.vue'
import Results from '../components/results/Results.vue'
import Contact from '../components/contact/Contact.vue'
import Register from '../components/register/Register.vue'
import Login from '../components/login/Login.vue'
import Information from '../components/information/Information.vue'
import Tracking from '../components/tracking/Tracking.vue'

const routes = [
  { path:'/home', component: Home},
  { path:'/news', component: News},
  { path:'/participants', component: Participants},
  //{ path:'/results', component: Results},
  { path:'/contact', component: Contact},
  { path:'/register', component: Register},
  { path:'/login', component: Login},
  { path:'/news', component: News},
  { path:'/information', component: Information},
  //{ path:'/tracking', component: Tracking}
];

export default routes
