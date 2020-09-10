<template>
  <nav :class="$style.nav">
    <AppContainer>
      <ul :class="$style.list">
        <li :class="$style.listItem">
          <router-link
            to="/minha-conta"
            :class="$style.link"
            :active-class="$style.linkActive"
          >
            Minha conta
          </router-link>
        </li>
        <li>
          <router-link
            to="/pre-matricula"
            :class="$style.link"
            :active-class="$style.linkActive"
          >
            Pré-matrículas
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            :class="$style.link"
            :active-class="$style.linkActive"
          >
            Bolsas Favoritas
          </router-link>
        </li>
      </ul>
    </AppContainer>
  </nav>
</template>

<script>
import AppContainer from '@/components/AppContainer'

export default {
  name: 'AppNavbar',
  components: {
    AppContainer,
  },
}
</script>

<style lang="scss" module>
$nav-background-color: map-get($theme-colors, primary);

.nav {
  background-color: $nav-background-color;
}

.list {
  display: flex;
  padding: 0;
  margin: {
    top: 0;
    right: -$grid-gutter-half-width;
    bottom: 0;
    left: -$grid-gutter-half-width;
  };
  list-style: none;
}

.link {
  display: block;
  padding: map-get($spacers, 2) map-get($spacers, 4);
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
  color: color-contrast($nav-background-color);
}

.linkActive {
  $background-color: map-get($theme-colors, primary-dark);

  color: color-contrast($background-color);
  background-color: $background-color;
}
</style>
