import axios from 'axios'
import { apiUrl } from '../../constants/config'

const state = {
  isLoad: false,
  allItems: null,
  items: null,
  todoError: ''
}

const getters = {
  isLoad: state => state.isLoad,
  allItems: state => state.allItems,
  todoError: state => state.todoError,
  items: state => state.items
}

const mutations = {
  getTodoItemsSuccess (state, items) {
    state.isLoad = true
    state.allItems = items
    state.items = items
  },
  getTodoItemsError (state, error) {
    state.isLoad = false
    state.todoError = error
    state.allItems = null
    state.items = null
  },
  addTodoItem (state, newItem) {
    const newId = Math.max(...state.allItems.map(item => item.id)) + 1
    state.allItems.splice(0, 0, { id: newId, ...newItem })
    state.items = state.allItems
  }

}

const actions = {
  getTodoItems ({ commit }) {
    axios
      .get(`${apiUrl}/todos`)
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getTodoItemsSuccess', res.data)
        } else {
          commit('getTodoItemsError', 'error:getTodoItems')
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
