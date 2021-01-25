<template>
  <div id="main">
    <h3>Tracks</h3>
    <hr />
    <div v-for="(track, index) in GET_TRACKS.data" :key="index">
      <a :href="track.youtube_link" :id="track.track_uuid">{{ track.name }}</a>
    </div>
    <hr />
    <a class="links" @click="$router.push({ name: 'main' })">
      To main
    </a>
    <a class="links" @click="$router.push({ name: 'bands' })">
      To bands
    </a>
    <a class="links" @click="$router.push({ name: 'albums' })">
      To albums
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['GET_TRACKS']),
}
</script>

<style lang="scss" scoped>
#main {
  h3 {
    font-family: 'Potta One';
    font-size: 20px;
  }
  hr {
    width: 500px;
    border: 1px solid rgb(207, 21, 21);
  }
  letter-spacing: 2px;
  width: 800px;
  text-align: center;
  font-size: 20px;
  color: white;
  margin: auto;
  cursor: default;
  a {
    font-family: 'East Sea Dokdo';
    font-size: 36px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    color: white;
    &:hover {
      color: rgb(207, 21, 21);
      text-shadow: 1px 1px 2px black, 0 0 1em red;
    }
  }
  .links {
    font-family: 'Potta One';
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    font-size: 20px;
    padding-left: 30px;
    padding-right: 30px;
    &:hover {
      color: rgb(145, 145, 145);
      text-shadow: 1px 1px 2px black, 0 0 1em white;
    }
  }
}
</style>
