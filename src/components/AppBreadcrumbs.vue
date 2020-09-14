<template>
  <nav :class="$style.breadcrumbs">
    <ol :class="$style.list">
      <li
        v-for="(breadcrumb, key) in breadcrumbs"
        :key="breadcrumb.name + key"
        :class="$style.listItem"
      >
        <router-link :to="breadcrumb.route">
          {{ breadcrumb.name }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'AppBreadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.breadcrumbs {
  padding: map-get($spacers, 4) 0;
  font-size: $font-size-sm;
}

.list {
  display: flex ();
  margin: 0;
  @include list-unstyled();
}

.listItem {
  display: none;
  align-items: center;
  margin-right: .5rem;
  font-weight: $font-weight-bold;

  &:hover {
    text-decoration: underline;
  }
  &:not(:first-child)::before {
    display: inline-block;
    margin-right: .5rem;
    font-weight: $font-weight-normal;
    content: "/";

    &:hover {
      text-decoration: none;
    }
  }
  &:last-child {
    display: inline-flex;
    font-weight: $font-weight-normal;
    pointer-events: none;
    cursor: auto;

    &::before {
      content: "";
    }
  }

  @include media-breakpoint-desktop(){
    display: inline-flex;
  }
}
</style>
