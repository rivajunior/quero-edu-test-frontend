import storage from '../utils/storage'

const mutations = {
  setScholarships(state, scholarships) {
    state.scholarships = scholarships
  },
  setFavorites(state, favorites) {
    state.favoritesScholarships = favorites

    storage.setItem('favoritesScholarships', favorites)
  },
}

export default mutations
