<template>
  <component
    :is="component"
    :type="buttonType"
    :class="[
      $style.button,
      $style[variation],
      {
        [$style.active]: active,
        [$style.dark]: dark,
        [$style.disabled]: disabled,
      },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
const variations = [
  'primary',
  'secondary',
]

export default {
  name: 'AppButton',
  props: {
    active: Boolean,
    dark: Boolean,
    to: {
      type: [String, Object],
      default: () => null,
    },
    href: {
      type: String,
      default: () => null,
    },
    type: {
      type: String,
      default: 'button',
    },
    variation: {
      type: String,
      default: null,
      validator: (value) => variations.includes(value),
    },
    disabled: Boolean,
  },
  computed: {
    component() {
      if (this.to) {
        return 'router-link'
      }

      if (this.href) {
        return 'a'
      }

      return 'button'
    },
    buttonType() {
      return this.component === 'button' ? this.type : null
    },
  },
}
</script>

<style lang="scss" module>
.button {
  $color: map-get($theme-colors, primary);

  padding: .5rem 1rem;
  font-weight: $font-weight-bold;
  color: $color;
  cursor: pointer;
  background-color: $white;
  border: 1px solid map-get($theme-colors, primary);
  border-radius: $border-radius-sm;

  &:not(.disabled):hover {
    $background-color: shade-color($white, 3);

    color: color-contrast($background-color);
    background-color: $background-color;
  }

  // stylelint-disable-next-line selector-pseudo-class-no-unknown
  :global(.buttonGroup) & {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    &:not(:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  @include media-breakpoint-desktop() {
    // stylelint-disable-next-line selector-pseudo-class-no-unknown
    :global(.buttonGroup) & {
      border-left-width: 0;
      border-radius: 0;

      &:first-child {
        border-left-width: 1px;
        border-top-left-radius: $border-radius-sm;
        border-bottom-left-radius: $border-radius-sm;
      }
      &:last-child {
        border-top-right-radius: $border-radius-sm;
        border-bottom-right-radius: $border-radius-sm;
      }
    }

    &.active {
      $background-color: map-get($theme-colors, primary);

      color: color-contrast($background-color);
      background-color: $background-color;
    }
  }
}

.primary {
  &.dark {
    border-color: map-get($theme-colors, primary-dark);

    &.active {
      $background-color: map-get($theme-colors, primary-dark);

      color: color-contrast($background-color);
      background-color: $background-color;
    }
  }
}

.secondary {
  $background-color: map-get($theme-colors, secondary);

  color: color-contrast($background-color);
  background-color: $background-color;
  border-color: map-get($theme-colors, secondary-dark);

  &:not(.disabled):hover {
    $background-color: shade-color($background-color, 3);

    color: color-contrast($background-color);
    background-color: $background-color;
  }
}

.disabled,
:disabled {
  color: #82898b;
  cursor: not-allowed;
  background-color: #cacdce;
  border-color: #82898b;
}
</style>
