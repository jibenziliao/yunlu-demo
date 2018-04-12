import Vue from 'vue'
import Router from 'vue-router'
const See = resolve => require(['./views/home/See'], resolve)
const About = resolve => require(['./views/home/About'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/',
      redirect: '/see'
    }, {
      path: '/see',
      name: 'See',
      component: See
    }
  ]
})
