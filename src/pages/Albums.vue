<template>
  <div id="main">
    <h3>Albums</h3>
    <hr />
    <div v-for="(album, index) in GET_ALBUMS.data" :key="index">
      <a
        :id="album.album_uuid"
        @click="getLink(), $router.push({ name: 'tracks' })"
      >
        {{ album.name }}
      </a>
    </div>
    <hr />
    <a class="links" @click="$router.push({ name: 'bands' })"> To bands </a>
    <a class="links" @click="$router.push({ name: 'main' })">
      To main
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      link: '',
    }
  },
  computed: mapGetters(['GET_ALBUMS']),
  methods: {
    getLink() {
      this.link = event.target.id
      this.$store.dispatch('passLinkForTracks', this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  h3 {
    font-family: 'Potta One';
    font-size: 20px;
  }
  hr {
    border: 1px solid rgb(207, 21, 21);
  }
  letter-spacing: 2px;
  width: 400px;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  color: white;
  margin: auto;
  cursor: default;
  a {
    font-family: 'East Sea Dokdo';
    font-size: 38px;
    line-height: 28px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: rgb(207, 21, 21);
      text-shadow: 1px 1px 2px black, 0 0 1em red;
    }
  }
  .links {
    font-family: 'Potta One';
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    font-size: 20px;
    padding-left: 40px;
    padding-right: 40px;
    color: white;
    &:hover {
      color: rgb(145, 145, 145);
      text-shadow: 1px 1px 2px black, 0 0 1em white;
    }
  }
}
</style>
