<template>
  <div :class="{ [$style.plaintext]: isPlainText }">
    <label
      v-if="label"
      :for="computedId"
      :class="$style.label"
    >
      {{ label }}
    </label>
    <div :class="$style.controlWrapper">
      <select
        :id="computedId"
        :name="name"
        :class="$style.select"
        :value="value"
        @change="handleChange($event)"
      >
        <option
          v-for="option in options"
          :key="getValue(option)"
          :value="getValue(option)"
        >
          {{ getText(option) }}
        </option>
      </select>
      <FontAwesomeIcon
        :icon="chevronDownIcon"
        :class="$style.icon"
      />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'AppSelect',
  components: {
    FontAwesomeIcon,
  },
  model: {
    event: 'change',
  },
  props: {
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionText: {
      type: String,
      default: 'text',
    },
    optionValue: {
      type: String,
      default: 'value',
    },
    isPlainText: Boolean,
    value: {
      type: [String, Number],
      default: null,
    },
    returnObject: Boolean,
  },
  data: () => ({
    chevronDownIcon: faChevronDown,
  }),
  computed: {
    computedId() {
      return this.id || `select-${this._uid}`
    },
  },
  methods: {
    getText(option) {
      if (option === null || option !== 'object') {
        return option
      }

      return option[this.optionText]
    },
    getValue(option) {
      if (option === null || option !== 'object') {
        return option
      }

      return option[this.optionValue]
    },
    handleChange({ target }) {
      if (target.options.selectedIndex > -1) {
        const option = this.options[target.options.selectedIndex]
        const value = this.returnObject
          ? option
          : this.getValue(option)

        this.$emit('change', value)
      } else {
        this.$emit('change', null)
      }
    },
  },
}
</script>

<style lang="scss" module>
.label {
  .plaintext & {
    margin-bottom: 0;
  }
}

.select {
  width: 100%;
  padding: map-get($spacers, 2);
  border: 1px solid $border-color;
  border-radius: $border-radius-sm;
  appearance: none;

  .plaintext & {
    width: auto;
    padding: 0;
    border: none;
  }
}

.controlWrapper {
  position: relative;

  .plaintext & {
    display: inline-block;
  }
}

.icon {
  position: absolute;
  top: 0;
  right: map-get($spacers, 3);
  display: flex;
  align-items: center;
  height: 100%;
  font-size: $font-size-xs;
}
</style>
