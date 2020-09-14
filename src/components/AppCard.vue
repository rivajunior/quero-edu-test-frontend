<template>
  <component
    :is="cardTag"
    :class="[
      $style.card,
      { [$style.button]: isButton },
    ]"
    @click="$emit('click')"
  >
    <div v-if="$scopedSlots.header">
      <slot name="header" />
    </div>
    <div :class="$style.cardBody">
      <slot />
    </div>
    <div
      v-if="$scopedSlots.footer"
      :class="$style.cardFooter"
    >
      <slot name="footer" />
    </div>
  </component>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    isButton: Boolean,
  },
  computed: {
    cardTag() {
      return this.isButton ? 'button' : 'div'
    },
  },
}
</script>

<style lang="scss" module>
.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: $white;
  border: none;
  box-shadow: $box-shadow-sm;
  appearance: none;

  @include media-breakpoint-desktop() {
    min-height: 442px;
  }
}

.cardHeader {
  border-bottom: 1px solid $gray;
}

.cardBody {
  flex-grow: 1;

  .button & {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.cardFooter {
  border-top: 1px solid $gray;
}

.button{
  &:not(:active):hover {
    box-shadow: $box-shadow;
  }
  &:active {
    background-color: rgba($black, .1);
  }
}
</style>
