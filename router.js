import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e9e6ff8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _37fdedd4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e3282d94 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _6f2ec11e = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))
const _6e564abd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4e9e6ff8,
    name: "about"
  }, {
    path: "/login",
    component: _37fdedd4,
    name: "login"
  }, {
    path: "/users",
    component: _e3282d94,
    name: "users"
  }, {
    path: "/users/:id",
    component: _6f2ec11e,
    name: "users-id"
  }, {
    path: "/",
    component: _6e564abd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
