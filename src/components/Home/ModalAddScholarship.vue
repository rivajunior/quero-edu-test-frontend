<template>
  <AppModal
    :loading="loading"
    @close="$emit('close')"
  >
    <template #header>
      <h2>Adicionar bolsa</h2>
      <p>
        Filtre e adicione as bolsas de seu interesse.
      </p>
    </template>
    <template #body>
      <form
        id="formAddScholarship"
        @submit.prevent="handleSubmit()"
      >
        <div :class="$style.grid">
          <FormGroup>
            <AppSelect
              v-model="form.city"
              label="Selecione sua cidade"
              name="course"
              :options="cities"
            />
          </FormGroup>
          <FormGroup>
            <AppSelect
              v-model="form.courses"
              label="Selecione o curso de sua preferência"
              name="course"
              :options="courses"
            />
          </FormGroup>
          <FormGroup>
            <fieldset>
              <legend>Como você quer estudar?</legend>
              <AppCheckbox
                v-model="form.modality"
                label="Presencial"
                value="Presencial"
              />
              <AppCheckbox
                v-model="form.modality"
                label="À distância"
                value="EaD"
              />
            </fieldset>
          </FormGroup>
          <FormGroup>
            {{ formatedBudget }}
            <input
              v-model="form.budget"
              type="range"
              min="0"
              :max="maxBudget"
              :class="$style.slider"
            >
          </FormGroup>
        </div>
      </form>
      <transition-group
        name="list"
        tag="div"
      >
        <ScholarshipLine
          v-for="scholarship in filteredScholarships"
          :key="scholarship.id"
          v-model="selectedScholarshipsIds"
          :scholarship="scholarship"
        />
      </transition-group>
    </template>
    <template #footer>
      <AppButton
        type="reset"
        form="formAddScholarship"
        :class="$style.buttonCancel"
        @click="$emit('close')"
      >
        Cancelar
      </AppButton>
      <AppButton
        variation="secondary"
        type="submit"
        form="formAddScholarship"
      >
        Adicionar bolsa(s)
      </AppButton>
    </template>
  </AppModal>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import AppButton from '@/components/AppButton'
import AppCheckbox from '@/components/AppCheckbox'
import AppModal from '@/components/AppModal'
import AppSelect from '@/components/AppSelect'
import FormGroup from '@/components/FormGroup'

import ScholarshipLine from '@/components/Home/ScholarshipLine'

export default {
  name: 'ModalAddScholarship',
  components: {
    AppButton,
    AppCheckbox,
    AppModal,
    AppSelect,
    FormGroup,
    ScholarshipLine,
  },
  props: {
    loading: Boolean,
  },
  data: () => ({
    form: {
      modality: null,
      city: null,
      course: null,
      budget: 0,
    },
    selectedScholarshipsIds: [],
  }),
  computed: {
    ...mapState(['scholarships']),
    ...mapGetters(['courses', 'cities']),
    maxBudget() {
      return this
        .scholarships
        .reduce((acc, scholarship) => Math.max(
          acc,
          scholarship.price_with_discount,
        ), 0)
    },
    formatedBudget() {
      const formatedValue = String(this.form.budget)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

      return `R$${formatedValue}`
    },
    filteredScholarships() {
      return this.scholarships.filter((scholarship) => {
        const {
          budget, course, city, modality,
        } = this.form

        return (
          scholarship.price_with_discount <= budget
          || scholarship.course.name === course
          || scholarship.campus.city === city
          || scholarship.course.kind === modality
        )
      })
    },
  },
  methods: {
    handleSubmit() {
      this.$emit(
        'submit',
        this.scholarships.filter((scholarship) => this
          .selectedScholarshipsIds
          .includes(scholarship.id)),
      )
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" module>
.buttonCancel {
  margin-right: $grid-gutter-half-width;
}

.grid {
  display: grid;
  grid-gap: $grid-gutter-half-width;
  grid-row-gap: $grid-gutter-half-width;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
}

.slider {
  width: 100%;
  height: .25rem;
  padding: 0;
  background-color: map-get($theme-colors, primary);
  border: 0;
  border-radius: .25rem;
  outline: none;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    background-color: $white;
    border: .15rem solid map-get($theme-colors, primary);
    border-radius: 1rem;
    appearance: none;
  }
}
</style>
