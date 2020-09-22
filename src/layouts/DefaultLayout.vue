<template>
  <div :class="$style.mainContainer">
    <div>
      <AppHeader />
      <AppNavbar />
      <AppContainer>
        <AppBreadcrumbs
          v-if="breadcrumbs"
          :breadcrumbs="breadcrumbs"
        />
      </AppContainer>
    </div>
    <div :class="$style.mainContent">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppBreadcrumbs from '@/components/AppBreadcrumbs'
import AppContainer from '@/components/AppContainer'
import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppNavbar from '@/components/AppNavbar'

export default {
  name: 'DefaultLayout',
  components: {
    AppBreadcrumbs,
    AppContainer,
    AppFooter,
    AppHeader,
    AppNavbar,
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" module>
.mainContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.mainContent {
  flex-grow: 1;
}
</style>
