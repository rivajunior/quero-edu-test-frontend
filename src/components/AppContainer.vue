<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
}
</script>

<style lang="scss" module>
.container {
  width: 1200px;
  max-width: 100%;
  padding:{
    right: $grid-gutter-half-width;
    left:$grid-gutter-half-width;
  }
  margin:{
    right: auto;
    left: auto;
  }
}
</style>
