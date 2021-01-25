import VueRouter from 'vue-router'

import Bands from '../pages/Bands.vue'
import Albums from '../pages/Albums.vue'
import Tracks from '../pages/Tracks.vue'
import MainPage from '../pages/MainPage.vue'
import About from '../pages/About.vue'
import Auth from '../pages/Auth.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/bands',
      name: 'bands',
      component: Bands,
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums,
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: Tracks,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})
