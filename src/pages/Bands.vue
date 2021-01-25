<template>
  <div id="main">
    <h3>Bands</h3>
    <hr />
    <div v-for="(band, index) in GET_BANDS.data.data" :key="index">
      <a
        @click="getLink(), $router.push({ name: 'albums' })"
        :id="band.group_uuid"
      >
        {{ band.name }}
      </a>
    </div>
    <hr />
    <div id="pagination">
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button
            ><b-icon
              icon="caret-left-fill"
              variant="danger"
              @click="down"
            ></b-icon
          ></b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button
            >page {{ GET_BANDS.data.current_page }} of
            {{ Math.ceil(GET_BANDS.data.total / 10) }}</b-button
          >
          <b-button>groups: {{ GET_BANDS.data.total }}</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button
            ><b-icon
              icon="caret-right-fill"
              variant="danger"
              @click="straight"
            ></b-icon
          ></b-button>
        </b-button-group>
      </b-button-toolbar>
    </div>
    <br />
    <a class="links" @click="$router.push({ name: 'main' })"> To main </a><br />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      link: '',
      pages: '',
    }
  },
  computed: mapGetters(['GET_BANDS', 'GET_CURRENT_PAGE']),
  async beforeMount() {
    this.$store.dispatch('getBands')
  },
  methods: {
    getLink() {
      this.link = event.target.id
      this.$store.dispatch('passLinkForAlbums', this.link)
    },
    straight() {
      this.$store.dispatch('sendReqStraight', this.GET_CURRENT_PAGE)
    },
    down() {
      this.$store.dispatch('sendReqDown', this.GET_CURRENT_PAGE)
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  button {
    background-color: black;
    color: rgb(207, 21, 21);
    border-color: black;
    &:hover {
      border-color: rgb(207, 21, 21);
    }
    .btn-secondary:hover {
      color: rgb(207, 21, 21);
    }
  }
  #my-table {
    color: white;
  }
  .btn-toolbar {
    display: inherit;
    position: inherit;
    bottom: 40px;
  }
  h3 {
    font-family: 'Potta One';
    font-size: 20px;
  }
  hr {
    border: 1px solid rgb(207, 21, 21);
  }
  letter-spacing: 2px;
  width: 350px;
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
    font-size: 20px;
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    color: white;
    &:hover {
      color: rgb(145, 145, 145);
      text-shadow: 1px 1px 2px black, 0 0 1em white;
    }
  }
}
</style>
