import axios from 'axios'
import { apiUrl } from '../../constants/config'

const state = {
  isLoadSurveys: false,
  allSurveyItems: null,
  surveyItems: null,
  surveyError: ''
}

const getters = {
  isLoadSurveys: state => state.isLoadSurveys,
  allSurveyItems: state => state.allSurveyItems,
  surveyError: state => state.surveyError,
  surveyItems: state => state.surveyItems
}

const mutations = {
  getSurveyItemStarted (state) {
    state.isLoadSurveys = false
    state.allSurveyItems = []
    state.surveyItems = []
  },
  getSurveyItemSuccess (state, items) {
    state.isLoadSurveys = true
    state.allSurveyItems = items
    state.surveyItems = items
  },
  getSurveyItemError (state, error) {
    state.isLoadSurveys = false
    state.surveyError = error
    state.allSurveyItems = null
    state.surveyItems = null
  },
  addSurveyItem (state, newItem) {
    const newId = Math.max(...state.allSurveyItems.map(item => item.id)) + 1
    state.allSurveyItems.splice(0, 0, { id: newId, ...newItem })
    state.surveyItems = state.allSurveyItems
  }

}

const actions = {
  getSurveyItems({ commit }) {
    commit('getSurveyItemStarted')
    axios
      .get(`${apiUrl}/surveys`)
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getSurveyItemSuccess', res.data)
        } else {
          commit('getSurveyItemError', 'error:getSurveyItem')
        }
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
