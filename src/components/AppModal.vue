<template>
  <transition
    :enter-to-class="$style.modalEnter"
    :leave-active-class="$style.modalLeaveActive"
  >
    <div :class="$style.modalMask">
      <div :class="$style.modalContainer">
        <button
          :class="$style.modalDefaultButton"
          @click="$emit('close')"
        >
          <FontAwesomeIcon :icon="closeIcon" />
        </button>
        <template v-if="!loading">
          <div :class="$style.modalHeader">
            <slot name="header" />
          </div>
          <div :class="$style.modalBody">
            <slot name="body" />
          </div>
          <div :class="$style.modalFooter">
            <slot name="footer" />
          </div>
        </template>
        <div
          v-else
          :class="$style.loading"
        >
          <FontAwesomeIcon
            :icon="loadingIcon"
            size="4x"
            spin
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'AppModal',
  components: {
    FontAwesomeIcon,
  },
  props: {
    loading: Boolean,
  },
  data: () => ({
    closeIcon: faTimes,
    loadingIcon: faSpinner,
  }),
  mounted() {
    document.body.classList.add('noScroll')
  },
  destroyed() {
    document.body.classList.remove('noScroll')
  },
}
</script>

<style lang="scss" module>
.modal {
  &Mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zindex-modal;
    width: 100%;
    height: 100%;
    padding: map-get($spacers, 5);
    overflow: auto;
    background-color: rgba($black, .5);
    transition: opacity .3s ease;
  }

  &Container {
    position: relative;
    width: 100%;
    max-width: 750px;
    padding: map-get($spacers, 5);
    margin: 0 auto;
    background-color: $white;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba($black, .33);
    transition: all .3s ease;
  }

  &Body {
    margin: map-get($spacers, 5) 0;
  }

  &Footer {
    display: flex;
    justify-content: flex-end;
  }

  &DefaultButton {
    position: absolute;
    top: -45px;
    right: 0;
    font-size: 2rem;
    color: $white;
    background-color: transparent;
    border: none;
    appearance: none;

    &:hover {
      opacity: .7;
    }
  }

  &Enter {
    opacity: 0;
  }

  &LeaveActive {
    opacity: 0;
  }

  &Enter,
  &LeaveActive {
    .modalContainer {
      transform: scale(1.1);
    }
  }
}

.loading {
  color: map-get($theme-colors, primary);
  text-align: center;
}
</style>
