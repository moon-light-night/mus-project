<template>
  <div id="app">
    <Nav></Nav>
    <router-view> </router-view>
    <Footter></Footter>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'
import Bands from './pages/Bands.vue'
import Albums from './pages/Albums.vue'
import Tracks from './pages/Tracks.vue'
import Auth from './pages/Auth.vue'
import Nav from './components/Nav.vue'
import Footter from './components/Footter.vue'
import About from './pages/About.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      isActive: false,
    }
  },
  components: {
    Nav,
    Footter,
    About,
    Auth,
  },
}
</script>

<style lang="scss" scoped></style>
