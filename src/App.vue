<template>
  <component
    :is="layout"
    id="app"
    :breadcrumbs="breadcrumbs"
  >
    <router-view />
  </component>
</template>

<script>
import AppBreadcrumbs from '@/components/AppBreadcrumbs'
import AppContainer from '@/components/AppContainer'
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppNavbar from '@/components/AppNavbar'
import DefaultLayout from '@/layouts/DefaultLayout'

const DEFAULT_LAYOUT = 'Default'

export default {
  name: 'App',
  components: {
    AppBreadcrumbs,
    AppContainer,
    AppFooter,
    AppHeader,
    AppNavbar,
    DefaultLayout,
  },
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumbs
    },
    layout() {
      return `${this.$route.meta.layout || DEFAULT_LAYOUT}Layout`
    },
  },
}
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";

// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: $font-family-base;
  font-weight: $font-weight-normal;
  color: $ink;
  background: $gray;
  background-color: $white;
  // stylelint-disable property-no-vendor-prefix
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba($black, 0);
  // stylelint-enable property-no-vendor-prefix
}

button,
[role="button"] {
  cursor: pointer;
}

a {
  color: map-get($theme-colors, primary-dark);
  text-decoration: none;
}

label {
  display: inline-block;
  margin-bottom: map-get($spacers, 1);
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
  text-transform: uppercase;
}

legend {
  @extend label;
}

fieldset {
  padding: 0;
  border: unset;
}

small {
  font-size: .875rem;
}

hr {
  margin:{
    top: 1rem;
    bottom: 1rem;
  };
  border-color: $gray;
  // border-bottom: none;
  opacity: .5;
}

.textReset {
  color: inherit;
}

.noScroll {
  overflow: hidden;
}

// Transition class

/* stylelint-disable selector-class-pattern */
.list-enter-active,
.list-leave-active {
  transition: all .6s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* stylelint-enable selector-class-pattern */
</style>
