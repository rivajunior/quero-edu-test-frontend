import api from '@/api'

const actions = {
  async fetchScholarships({ commit }) {
    const { data } = await api.get('db.json')

    commit('setScholarships', data)
  },
}

export default actions
