import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/components/list'
import newList from '@/components/newList'
import admin from '@/components/admin'
import upload from '@/components/upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/newList',
      name: 'newList',
      component: newList
    }
  ]
})
