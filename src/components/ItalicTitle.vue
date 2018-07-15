
<template>
  <div class="italic-style">
    {{ text }}
  </div>
</template>
        

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.italic-style {
  z-index: 5;
  transform: rotate(90deg);
  position: absolute;
  top: 420px;
  left: 379px;
  font-family: 'Bungee', cursive;
}
</style>
