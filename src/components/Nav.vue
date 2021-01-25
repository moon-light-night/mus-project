<template>
  <ul>
    <li>
      <a @click="$router.push({ name: 'main' })" title="Homepage">Home</a>
    </li>
    <li>
      <a @click="$router.push({ name: 'bands' })">Bands</a>
    </li>
    <li>
      <a class="none" title="Sorry, this part is developing">Gallery</a>
    </li>
    <li>
      <a @click="$router.push({ name: 'about' })" title="Description"
        >About service</a
      >
    </li>
    <li>
      <button type="button" title="GitHub">
        <a href="https://github.com/moon-light-night" target="__blank"
          ><img src="./social_media_logo_github_icon-icons.com_56662.png"
        /></a>
      </button>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin-top: 10px;
  font-size: 28px;
  padding-left: 0;
  li {
    .none {
      cursor: no-drop;
      &:hover {
        color: white !important;
      }
    }
    list-style-type: none;
    color: white;
    padding-right: 20px;
    button {
      position: fixed;
      right: 8px;
      font-size: 20px;
      background-color: black;
      border-width: 0;
    }
    a {
      font-family: 'Potta One';
      text-decoration: none;
      color: white;
      cursor: pointer;
      &:hover {
        color: rgb(207, 21, 21) !important;
      }
    }
  }
}
</style>
