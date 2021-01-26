<template>
  <div>
    <a @click="$router.push({ name: 'main' })">Test link</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  background: url(../../public/0bf86dda88f39b8cc50d31e065733ca2.jpg) 50% 0
    no-repeat;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  width: 100%;
  height: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>
