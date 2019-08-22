import Vue from 'vue'
import Router from 'vue-router'

const shou = () => import("./views/shou/shou");
const pin = () => import("./views/pin/pin");
const gou = () => import("./views/gou/gou");
const wo = () => import("./views/wo/wo");

Vue.use(Router)

export default new Router({
  routes: [
    { path: "", redirect: "/shou" },
    { path: "/shou", component: shou },
    { path: "/pin", component: pin },
    { path: "/gou", component: gou },
    { path: "/wo", component: wo },
  ]
})
