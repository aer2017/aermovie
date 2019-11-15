import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: 'miaomiao',
    routes: [
        movieRouter,
        mineRouter,
        cinemaRouter,
        { path: '/*', redirect: '/movie' }
    ]
})

export default router