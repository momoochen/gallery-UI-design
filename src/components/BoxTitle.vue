
<template>
  <div class="title">
    <div class="black">
      {{ text }}
    </div>
    <div class="gray">
      {{ text }}
    </div>
    <div class="lightgray">
      {{ text }}
    </div>
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
.title {
  font-size: 36px;
  font-family: 'Bungee', cursive;
}
.black {
  position: relative;
  top: -4px;
  z-index: 4;
}
.gray {
  position: absolute;
  top: -9px;
  color: rgb(167, 167, 167);
  z-index: 3;
}
.lightgray {
  position: absolute;
  top: -15px;
  color: rgb(206, 205, 205);
  z-index: 2;
}
</style>
