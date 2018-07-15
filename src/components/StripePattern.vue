
<template>
  <div 
    id="stripes" 
    class="pattern"
  />
</template>
        

<script>
export default {}
</script>

<style lang="scss" scoped>
.pattern {
  position: absolute;
  z-index: 99;
  min-height: 67px;
  width: 180px;
  top: 400px;
  left: 70px;
  transition: 0.1s ease-in-out;
  font-family: 'Bungee', cursive;
}
#stripes {
  background-image: repeating-linear-gradient(
    45deg,
    rgb(255, 218, 116),
    rgb(255, 218, 116) 15px,
    rgba(255, 255, 255, 0) 15px,
    rgba(255, 255, 255, 0) 30px
  );
}
</style>
