<template>
  <label :class="$style.label">
    <input
      type="checkbox"
      :value="value"
      :class="$style.checkbox"
      @change="handleChange($event)"
    >
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'AppCheckbox',
  model: {
    event: 'change',
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    computedId() {
      return this.id || `checkbox-${this._uid}`
    },
  },
  methods: {
    handleChange({ target }) {
      if (target.checked) {
        this.$emit('change', this.value)
      } else {
        this.$emit('change', null)
      }
    },
  },
}
</script>

<style lang="scss" module>
.label {
  display: inline-flex;
  align-items: center;
  padding-top: 1rem;
  margin-right: map-get($spacers, 3);
  margin-bottom: 0;
  font-weight: $font-weight-normal;
  text-transform: none;

  + .label:last-child {
    margin-right: 0;
  }
}

.checkbox {
  margin-right: map-get($spacers, 2);
}
</style>
