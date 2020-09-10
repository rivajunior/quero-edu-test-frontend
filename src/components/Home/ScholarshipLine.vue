<template>
  <div :class="$style.row">
    <div>
      <input
        type="checkbox"
        :checked="isChecked"
        @click="handleClick()"
      >
    </div>
    <div :class="$style.imageBox">
      <img
        :src="scholarship.university.logo_url"
        alt=""
        :class="$style.image"
      >
    </div>
    <div :class="$style.grow">
      <div :class="$style.courseName">
        {{ scholarship.course.name }}
      </div>
      <div>
        {{ scholarship.course.level }}
      </div>
    </div>
    <div :class="$style.price">
      Bolsa de
      <span :class="$style.currency">
        {{ scholarship.discount_percentage }}%
      </span>

      <div :class="$style.currency">
        {{ scholarship.price_with_discount }}/mês
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScholarshipLine',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Array,
      default: () => [],
    },
    scholarship: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isChecked() {
      return this.checked.includes(this.scholarship.id)
    },
  },
  methods: {
    handleClick() {
      const value = [...this.checked]

      if (this.isChecked) {
        value.splice(value.indexOf(this.scholarship.id), 1)
      } else {
        value.push(this.scholarship.id)
      }

      this.$emit('change', value)
    },
  },
}
</script>

<style lang="scss" module>
.row {
  display: flex;
  align-items: center;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  padding: {
    top: map-get($spacers, 3);
    bottom: map-get($spacers, 3);
  };

  &:first-child {
    border-top-width: 2px;
  }
}

.image {
  max-width: 100%;
  max-height: 35px;
}

.imageBox {
  width: 150px;
  padding: 0 map-get($spacers, 3);
  text-align: center;
}

.courseName {
  font-weight: $font-weight-bold;
  color: map-get($theme-colors, primary);
}

.grow {
  flex-grow: 1;
}

.currency {
  font-weight: $font-weight-bold;
  color: $green;
}

.price {
  text-align: right;
}
</style>
