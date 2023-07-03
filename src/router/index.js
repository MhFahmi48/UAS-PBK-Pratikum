import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import SignUp from '../pages/SignUp.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Game from '../pages/Game.vue'
import StopWatch from '../pages/StopWatch.vue'
import Photo from '../pages/Photo.vue'
import Lokasi from '../pages/Lokasi.vue'
import Cuaca from '../pages/Cuaca.vue'

const routes = [
    { path : '/Game' ,component : Game},
    { path : '/SignUp',component: SignUp},
    { path : '/Login',component: Login},
    { path : '/Home',component: Home},
    { path : '/StopWatch',component: StopWatch},
    { path : '/Photo' , component: Photo},
    { path : '/Lokasi' , component: Lokasi},
    { path : '/Cuaca' , component: Cuaca},
    { path : '/', redirect:'/Home'}
]

const router = createRouter ({
    history : createWebHistory(),
    routes
})

export default router