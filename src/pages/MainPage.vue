<template>
  <div>
    <p>Yo, don't want <span>a little buzz</span> for your mind?</p>
    <hr />
    <a @click="$router.push({ name: 'bands' })">
      I WANT (◣_◢)
    </a>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footter from '../components/Footter.vue'
export default {
  components: {
    Nav,
    Footter,
  },
}
</script>

<style lang="scss" scoped>
div {
  hr {
    width: 700px;
  }
  padding-top: 20px;
  p {
    font-family: 'Potta One';
    text-shadow: 1px 1px 2px black, 0 0 1em white;
    font-size: 30px;
    color: black;
    cursor: default;
    span {
      color: white;
      text-shadow: none;
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  text-align: center;
  a {
    text-decoration: none;
    font-family: 'Potta One';
    font-size: 28px;
    cursor: pointer;
    text-shadow: 1px 1px 2px black, 0 0 1em black;
    &:hover {
      color: rgb(207, 21, 21) !important;
      text-shadow: 1px 1px 2px black, 0 0 1em red;
    }
  }
}
</style>
