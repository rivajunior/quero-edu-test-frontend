<template>
  <AppCard>
    <div :class="$style.imageBox">
      <img
        :src="scholarship.university.logo_url"
        alt=""
        :class="$style.image"
      >
    </div>
    <div :class="[$style.strong, $style.universityName]">
      {{ scholarship.university.name }}
    </div>
    <div :class="$style.courseName">
      {{ scholarship.course.name }}
    </div>
    <div :class="$style.score">
      <span :class="$style.strong">
        {{ scholarship.university.score }}
      </span>
      <span :class="$style.stars">
        <FontAwesomeIcon
          v-for="point in roundedFloorScore"
          :key="point"
          :icon="starIcon"
        />
        <FontAwesomeIcon
          v-if="hasFloatScore"
          :icon="halfStarIcon"
        />
      </span>
    </div>
    <hr>
    <div :class="$style.strong">
      {{ scholarship.course.kind }} • {{ scholarship.course.shift }}
    </div>
    <div>
      <small>
        Início das aulas em: {{ scholarship.start_date }}
      </small>
    </div>
    <hr>
    <div :class="$style.emphasyText">
      Mensalidade com o Quero Bolsa:
    </div>
    <div :class="$style.oldPrice">
      <del>R$ {{ scholarship.full_price }}</del>
    </div>
    <div>
      <strong :class="$style.newPrice">
        R$ {{ scholarship.price_with_discount }}
      </strong>
      <small>/mês</small>
    </div>
    <div :class="$style.actions">
      <AppButton @click="remove()">
        Excluir
      </AppButton>
      <AppButton
        :disabled="!scholarship.enabled"
        variation="secondary"
        :class="$style.cta"
      >
        Ver oferta
      </AppButton>
    </div>
  </AppCard>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import AppButton from '@/components/AppButton'
import AppCard from '@/components/AppCard'

const isFloat = (n) => Number(n) === n && n % 1 !== 0

export default {
  name: 'ScholarshipCard',
  components: {
    AppButton,
    AppCard,
    FontAwesomeIcon,
  },
  props: {
    scholarship: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    starIcon: faStar,
    halfStarIcon: faStarHalfAlt,
  }),
  computed: {
    roundedFloorScore() {
      return Math.floor(this.scholarship.university.score)
    },
    hasFloatScore() {
      return isFloat(this.scholarship.university.score)
    },
  },
  methods: {
    remove() {
      this.$emit('remove')
    },
  },
}
</script>

<style lang="scss" module>
.imageBox {
  padding: map-get($spacers, 3);
}

.image {
  max-width: 100%;
  max-height: 50px;
}

.strong  {
  font-weight: $font-weight-bold;
  text-transform: uppercase;
}

.universityName {
  margin-bottom: map-get($spacers, 2);
}

.courseName {
  margin-bottom: map-get($spacers, 3);
  font-weight: $font-weight-bold;
  color: map-get($theme-colors, primary-dark);
}

.startsAt {
  font-size: $font-size-sm;
}

.scoreNumber {
  margin-bottom: map-get($spacers, 3);
}

.stars {
  color: $yellow;
}

.emphasyText {
  margin-bottom: map-get($spacers, 3);
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
}

.oldPrice {
  margin-bottom: map-get($spacers, 2);
  font-size: $font-size-xs;
}

.newPrice {
  font-size: 1.1rem;
  color: $green;
}

.actions {
  display: flex;
  margin-top: map-get($spacers, 3);
}

.cta {
  width: 100%;
  margin-left: $grid-gutter-half-width;
}
</style>
