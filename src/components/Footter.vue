<template>
  <div>
    <ul>
      <li id="left" title="Sorry, this function isn't available now">
        Media player
      </li>
      <li id="right" title="Support this project">
        <img src="./1492532985-mastercardcard_83243.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  color: white;
  font-size: 18px;
  padding-left: 0;
  position: fixed;
  bottom: 15px;
  #left {
    position: fixed;
    left: 15px;
    bottom: 15px;
    &:hover {
      cursor: not-allowed;
    }
  }
  #right {
    right: 15px;
    position: fixed;
    bottom: 15px;
    img {
      text-shadow: 3px 3px 2px white, 0 0 2em white;
      cursor: pointer;
    }
  }
  li {
    list-style-type: none;
    cursor: default;
  }
}
</style>
