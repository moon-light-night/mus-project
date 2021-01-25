export default {
  state: {
    albums: [],
  },
  actions: {
    async passLinkForAlbums(ctx, newLink) {
      const response = await fetch(
        'https://musexplorer-test-01.herokuapp.com/api/albums/?groups=' +
          newLink
      )
      const albums = await response.json()
      ctx.commit('getAlbums', albums)
    },
  },
  mutations: {
    getAlbums(state, albums) {
      state.albums = albums
    },
  },
  getters: {
    GET_ALBUMS(state) {
      return state.albums
    },
  },
}
