<template>
  <header :class="$style.header">
    <div :class="$style.contactGroup">
      <div :class="$style.howItWords">
        <FontAwesomeIcon
          :icon="infoCircleIcon"
          :class="$style.icon"
        />
        <span :class="$style.howItWordsMobile">
          Ajuda
        </span>
        <span :class="$style.howItWordsDesktop">
          Como funciona
        </span>
      </div>
      <a
        rel="noopener"
        target="blank"
        :class="$style.whatsapp"
        href="https://api.whatsapp.com/send?phone=08001232222&text=Eu%20Quero%20Bolsa"
      >
        <FontAwesomeIcon
          :icon="whatsappIcon"
          :class="$style.icon"
        />
        <div>
          <div :class="$style.whatsappNumber">
            ‭0800 123-2222‬
          </div>
          <div :class="$style.whatsappText">
            Envie mensagem ou ligue
          </div>
        </div>
      </a>
    </div>
    <router-link
      to="/"
      :class="$style.logo"
    >
      <img
        :alt="appName"
        src="@/assets/images/logotipo.svg"
        :class="$style.logoImg"
      >
    </router-link>

    <div :class="$style.user">
      <FontAwesomeIcon
        :icon="userIcon"
        :class="$style.icon"
      />
      <span :class="$style.userDesktop">
        Nome Sobrenome
      </span>
      <span :class="$style.userMobile">
        Conta
      </span>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AppHeader',
  components: {
    FontAwesomeIcon,
  },
  data: () => ({
    infoCircleIcon: faInfoCircle,
    whatsappIcon: faWhatsapp,
    userIcon: faUser,
    appName: process.env.VUE_APP_NAME,
  }),
}
</script>

<style lang="scss" module>
.contactGroup {
  display: flex;
  align-items: center;
}

.header {
  position: relative;
  display: flex;
  padding: map-get($spacers, 3);
  font-weight: $font-weight-bold;
  color: map-get($theme-colors, primary-dark);
  box-shadow: $box-shadow-sm;
}

.howItWords {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: map-get($spacers, 2);
  margin-right: map-get($spacers, 2);
  border-right: 2px solid $gray;
}

.howItWordsDesktop,
.userDesktop {
  display: none;
}

.whatsapp {
  display: none;
  align-items: center;
  font-size: $font-size-sm;

  .icon {
    color: #00e676;
  }

  @include media-breakpoint-desktop() {
    display: flex;
  }
}

.whatsappNumber {
  margin-bottom: map-get($spacers, 2);
}

.whatsappText {
  font-size: $font-size-xs;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}

.logo {
  $img-half-size: 96px;

  position: absolute;
  left: calc(50% - #{$img-half-size});
}

.logoImg {
  height: 30px;
}

.icon {
  font-size: 1.5rem;
}

@include media-breakpoint-desktop() {
  .howItWords {
    padding-right: map-get($spacers, 3);
    margin-right: map-get($spacers, 3);
  }

  .howItWordsMobile,
  .userMobile {
    display: none;
  }

  .howItWordsDesktop,
  .userDesktop {
    display: inline;
  }

  .userDesktop {
    margin-right: .5rem;
  }

  .user {
    flex-direction: row-reverse;
  }

  .icon {
    &:first-child {
      margin-right: map-get($spacers, 2);
    }

    &:last-child {
      margin-left: map-get($spacers, 2);
    }
  }
}
</style>
