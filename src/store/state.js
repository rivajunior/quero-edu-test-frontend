import storage from '@/utils/storage'

const state = {
  scholarships: [],
  favoritesScholarships: storage.getItem('favoritesScholarships') ?? [],
}

export default state
