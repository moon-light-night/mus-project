export default {
  state: {
    bands: [],
    currentPage: '',
  },
  actions: {
    async getBands(ctx) {
      const response = await fetch(
        'https://musexplorer-test-01.herokuapp.com/api/groups/?page=1'
      )
      const bands = await response.json()
      ctx.commit('updateBands', bands)
    },
    async sendReqStraight(ctx, page) {
      if (page > 0 && page <= 1) {
        const response = await fetch(
          'https://musexplorer-test-01.herokuapp.com/api/groups/?page=' +
            (page + 1)
        )
        const bands = await response.json()
        ctx.commit('updateBands', bands)
      } else {
        alert('хуй там плавал, выше нет страниц')
      }
    },
    async sendReqDown(ctx, page) {
      if (page - 1 > 0) {
        const response = await fetch(
          'https://musexplorer-test-01.herokuapp.com/api/groups/?page=' +
            (page - 1)
        )
        const bands = await response.json()
        ctx.commit('updateBands', bands)
      } else {
        alert('хуй там плавал, ниже страниц нет')
      }
    },
  },
  mutations: {
    updateBands(state, bands) {
      state.bands = bands
      state.currentPage = bands.data.current_page
    },
  },
  getters: {
    GET_BANDS(state) {
      return state.bands
    },
    GET_CURRENT_PAGE(state) {
      return state.currentPage
    },
  },
}
