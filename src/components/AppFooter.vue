<template>
  <footer>
    <div :class="$style.contact">
      <AppContainer :class="$style.contactContainer">
        <div :class="$style.contactItem">
          <FontAwesomeIcon
            :icon="whatsappIcon"
            :class="$style.icon"
          />
          <div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=08001232222&text=Eu%20Quero%20Bolsa"
                rel="noopener"
                target="blank"
                class="textReset"
              >
                0800 123 2222
              </a>
            </div>
            <div>
              Seg - Sex 8h-22h
            </div>
          </div>
        </div>

        <div :class="$style.contactItem">
          <FontAwesomeIcon
            :icon="chatIcon"
            :class="$style.icon"
          />
          <div>
            <div>
              Chat ao vivo
            </div>
            <div>
              Seg - Sex 8h-22h
            </div>
          </div>
        </div>

        <div :class="$style.contactItem">
          <FontAwesomeIcon
            :icon="emailIcon"
            :class="$style.icon"
          />
          <div>
            <div>
              Mande um e-mail
            </div>
            <div>
              Respondemos rapidinho
            </div>
          </div>
        </div>

        <div :class="$style.contactItem">
          <FontAwesomeIcon
            :icon="infoIcon"
            :class="$style.icon"
          />
          <div>
            <div>
              Central de ajuda
            </div>
            <div>
              Encontre todas as respostas
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
    <div :class="$style.credits">
      <AppContainer>
        Feito com <FontAwesomeIcon :icon="heartIcon" /> pela Quero Educação
      </AppContainer>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import AppContainer from '@/components/AppContainer'

export default {
  name: 'AppFooter',
  components: {
    AppContainer,
    FontAwesomeIcon,
  },
  data: () => ({
    whatsappIcon: faWhatsapp,
    chatIcon: faComments,
    emailIcon: faEnvelope,
    infoIcon: faInfoCircle,
    heartIcon: faHeart,
  }),
}
</script>

<style lang="scss" module>
.contact {
  $bg-color: map-get($theme-colors, primary-dark);

  color: color-contrast($bg-color);
  background-color: $bg-color;
}

.contactContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
}

.contactItem {
  display: flex;
  align-items: center;
  padding: map-get($spacers, 4);
  font-weight: $font-weight-bold;
}

.credits {
  $bg-color: map-get($theme-colors, primary);

  padding: map-get($spacers, 5);
  color: color-contrast($bg-color);
  text-align: center;
  background-color: $bg-color;
}

.icon {
  margin-right: $grid-gutter-half-width;
  font-size: 2.5rem;
}
</style>
