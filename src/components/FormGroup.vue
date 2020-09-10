<template>
  <div
    :class="[
      $style.formGroup,
      { [$style.noMargin]: noMargin },
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    noMargin: Boolean,
  },
}
</script>

<style lang="scss" module>
.formGroup {
  &:not(.noMargin) {
    margin-bottom: map-get($spacers, 4);
  }
}
</style>
