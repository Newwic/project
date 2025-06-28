import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/Home.vue'
import NewsView from './views/News.vue'
import ContactView from './views/Contact.vue'
import AboutView from './views/about.vue'
import ChickenRiceDetailView from './views/Chicken rice/_id.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'News',
      component: NewsView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/chicken-rice/:id',
      name: 'ChickenRiceDetail',
      component: ChickenRiceDetailView
    }
  ]
})
