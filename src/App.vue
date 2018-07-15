<template>
  <div id="app">
    <header>
      <img src="@/assets/imgs/logo.svg">
    </header>
    <transition 
      name="router-animation" 
      enter-active-class="animated zoomIn" 
      leave-active-class="animated fadeOutDown"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.animated {
  animation-duration: 0.6s;
}
header {
  display: flex;
  justify-content: center;
  height: 66px;
  align-items: center;
  img {
    width: 44px;
    height: 44px;
  }
}
</style>
