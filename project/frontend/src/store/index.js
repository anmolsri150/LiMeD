import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import menu from './modules/menu'
import user from './modules/user'
import chat from './modules/chat'
import todo from './modules/todo'
import survey from './modules/survey'
import { setCurrentLanguage } from '../utils'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: 'Blood Test',
        img: '/assets/img/products/blood-test.jpg',
        category: 'Test',
        date: '02.04.2022',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Verified Blood Test Report',
        sales: 1647,
        stock: 62
      },
      {
        id: 2,
        title: 'Diabetes Report',
        category: 'Test',
        img: '/assets/img/products/diabetes.jpg',
        date: '01.04.2022',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Diabetes detected - stage 2',
        sales: 1240,
        stock: 48
      },
      {
        id: 3,
        title: 'MRI Report',
        img: '/assets/img/products/mri.jfif',
        category: 'Test',
        date: '25.03.2022',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Normal - MRI scan report',
        sales: 1080,
        stock: 57
      },
      {
        id: 4,
        title: 'Operation Summary',
        img: '/assets/img/products/medical1.png',
        category: 'Summary',
        date: '21.03.2022',
        status: 'PROCESSED',
        statusColor: 'secondary',
        description: 'Surgery was performed',
        sales: 1014,
        stock: 41
      },
      {
        id: 5,
        title: 'Full Body Check-up',
        category: 'Check Up',
        img: '/assets/img/products/medical2.png',
        date: '02.06.2022',
        status: 'ON HOLD',
        statusColor: 'primary',
        description: 'Full body check-up report',
        sales: 985,
        stock: 23
      },
    ]
  },
  mutations: {
    changeLang (state, payload) {
      app.$i18n.locale = payload
      setCurrentLanguage(payload);
    }
  },
  actions: {
    setLang ({ commit }, payload) {
      commit('changeLang', payload)
    }
  },
  modules: {
    menu,
    user,
    chat,
    todo,
    survey
  },
  plugins: [createPersistedState()],
})
