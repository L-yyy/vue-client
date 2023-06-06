import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'


import LyLxwm from "../components/LyLxwm"
import LyGoumai from "../components/LyGoumai"
import LyJiesao from "../components/LyJiesao"
import LyNews from "../components/LyNews"
import LyDetail from "../components/LyDetail"
import LyIndex from "../components/LyIndex"
import LyNewdetail from "../components/LyNewdetail"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/index" //重定向到home路径下，点击连接进入本来应该是根目录，现在重定向把路径改变了
}, {
    path: '/lxwm',
    component: LyLxwm
}, {
    path: '/goumai',
    component: LyGoumai
}, {
    path: '/jiesao',
    component: LyJiesao
}, {
    path: '/news',
    component: LyNews
}, {
    path: '/detail/:id',
    name: 'detail',
    component: LyDetail
}, {
    path: '/index',
    component: LyIndex
}, {
    path: '/newdetail/:id',
    component: LyNewdetail
}]

const router = new VueRouter({
    routes
})

export default router