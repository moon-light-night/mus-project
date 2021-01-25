export default {
  state: {
    tracks: [],
  },
  actions: {
    async passLinkForTracks(ctx, newLink) {
      const response = await fetch(
        'https://musexplorer-test-01.herokuapp.com/api/tracks/?albums=' +
          newLink
      )
      const tracks = await response.json()
      ctx.commit('getTracks', tracks)
    },
  },
  mutations: {
    getTracks(state, tracks) {
      state.tracks = tracks
    },
  },
  getters: {
    GET_TRACKS(state) {
      return state.tracks
    },
  },
}
