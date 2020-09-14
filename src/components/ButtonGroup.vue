<template>
  <div :class="['buttonGroup', $style.buttonGroup]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
}
</script>

<style lang="scss" module>
.buttonGroup {
  display: flex;
  flex-direction: column;

  @include media-breakpoint-desktop() {
    flex-direction: row;
  }
}
</style>
