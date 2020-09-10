import { arrayUnique } from '@/utils/array'

const getters = {
  cities: (state) => arrayUnique(
    state.scholarships.map(({ campus }) => campus.city),
  ),
  courses: (state) => arrayUnique(
    state.scholarships.map(({ course }) => course.name),
  ),
}

export default getters
