<template>
  <AppContainer>
    <h1>Bolsas favoritas</h1>
    <p>
      Adicione bolsas de cursos e faculdades do seu interesse e receba
      atualizações com as melhores ofertas disponíveis.
    </p>
    <div :class="$style.filters">
      <ButtonGroup v-if="semesters.length > 0">
        <AppButton
          variation="primary"
          :active="!filter.semester"
          dark
          @click="filterCards()"
        >
          Todos os semestres
        </AppButton>
        <AppButton
          v-for="semester in semesters"
          :key="semester.value"
          variation="primary"
          :active="filter.semester === semester.value"
          dark
          @click="filterCards(semester.value)"
        >
          {{ semester.text }}
        </AppButton>
      </ButtonGroup>
    </div>
    <transition-group
      name="list"
      tag="div"
      :class="$style.cardGrid"
    >
      <AppCard
        key="0"
        is-button
        @click="handleClick()"
      >
        <div>
          <FontAwesomeIcon
            :icon="plusIcon"
            :class="$style.cardIcon"
          />
          <div>
            <div>
              <strong>Adicionar bolsa</strong>
            </div>

            Clique para adicionar bolsas de cursos do seu interesse
          </div>
        </div>
      </AppCard>
      <ScholarshipCard
        v-for="(scholarship, index) in filteredScholarships"
        :key="scholarship.id"
        :scholarship="scholarship"
        :style="{ transitionDelay: `${2 * index}00ms` }"
        @remove="remove(scholarship.id)"
      />
    </transition-group>

    <ModalAddScholarship
      v-if="isModalVisible"
      @close="isModalVisible = false"
      @submit="setFavorites($event)"
    />
  </AppContainer>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { arrayUnique } from '@/utils/array'

import AppButton from '@/components/AppButton'
import AppCard from '@/components/AppCard'
import AppContainer from '@/components/AppContainer'
import ButtonGroup from '@/components/ButtonGroup'

import ModalAddScholarship from '@/components/Home/ModalAddScholarship'
import ScholarshipCard from '@/components/Home/ScholarshipCard'

export default {
  name: 'Home',
  components: {
    AppButton,
    AppCard,
    AppContainer,
    ButtonGroup,
    FontAwesomeIcon,
    ModalAddScholarship,
    ScholarshipCard,
  },
  data: () => ({
    plusIcon: faPlusCircle,
    filter: {
      semester: null,
    },
    isModalVisible: false,
    loading: false,
  }),
  computed: {
    ...mapState(['favoritesScholarships']),
    semesters() {
      const scholarshipsSemesters = this.favoritesScholarships
        .map((scholarship) => scholarship.enrollment_semester)

      return arrayUnique(scholarshipsSemesters)
        .map((fullSemesterNumber) => {
          const YEAR_LENGTH = 4
          const semester = fullSemesterNumber.slice(-1)
          const year = fullSemesterNumber.substring(0, YEAR_LENGTH)

          return {
            text: `${semester}º semestre de ${year}`,
            value: fullSemesterNumber,
          }
        })
    },
    filteredScholarships() {
      const { semester } = this.filter

      if (!semester) {
        return this.favoritesScholarships
      }

      return this
        .favoritesScholarships
        .filter((scholarship) => scholarship.enrollment_semester === semester)
    },
  },
  async created() {
    this.loading = true

    try {
      await this.fetchScholarships()
    } finally {
      this.loading = false
    }
  },
  methods: {
    ...mapActions(['fetchScholarships']),
    ...mapMutations(['setFavorites']),
    handleClick() {
      this.isModalVisible = true
    },
    filterCards(semester) {
      this.filter.semester = semester
    },
    remove(id) {
      const index = this
        .favoritesScholarships
        .findIndex((scholarship) => scholarship.id === id)

      this.setFavorites([
        ...this.favoritesScholarships.slice(0, index),
        ...this.favoritesScholarships.slice(index + 1),
      ])
    },
  },
}
</script>

<style lang="scss" module>
.cardGrid {
  display: grid;
  margin-bottom: map-get($spacers, 5);
  text-align: center;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: $grid-gutter-half-width;
  grid-row-gap: $grid-gutter-half-width;
}

.cardIcon {
  margin-bottom: map-get($spacers, 5);
  font-size: 4rem;
  color: map-get($theme-colors, primary);
}

.filters {
  margin-bottom: map-get($spacers, 5);
  text-align: right;
}
</style>
