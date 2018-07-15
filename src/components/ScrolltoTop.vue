
<template>
  <a 
    v-scroll-to="'#container'"
    href="#"
  >
    <img 
      src="@/assets/imgs/up.svg" 
    >
  </a>
</template>
        

<script>
export default {
  computed: {}
}
</script>

<style lang="scss" scoped>
a {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  background-color: black;
  transition: 0.3s ease-in-out;
  padding: 10px;
  img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    border: 4px solid rgb(255, 218, 116);
    transform: scale(1.05);
  }
}
</style>
