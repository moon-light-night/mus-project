import Vue from 'vue'
import Vuex from 'vuex'
import band from './modules/band'
import album from './modules/album'
import track from './modules/track'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    band,
    album,
    track,
  },
})
