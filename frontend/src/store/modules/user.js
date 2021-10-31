import firebase from 'firebase/app'
import 'firebase/auth'
import { currentUser, isAuthGuardActive } from '../../constants/config'
import { setCurrentUser, getCurrentUser } from '../../utils'

export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    userType: null, // 'hospital' or 'patient'
    userProfile: null,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    userType: state => state.userType,
    userProfile: state => state.userProfile,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload
      if (payload) {
        state.currentUser.id = 1
      }
      state.processing = false
      state.loginError = null
    },
    setUserProfile(state, payload) {
      state.userProfile = payload
    },
    setUserType(state, payload) {
      state.userType = payload
    },
    setLogout(state) {
      state.currentUser = null
      state.userProfile = null
      state.userType = null
      state.processing = false
      state.loginError = null
    },
    setProcessing(state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess = true
    },
    setResetPasswordSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess = true
    },
    clearError(state) {
      state.loginError = null
    }
  },
  actions: {
    login({ commit }) {
      commit('clearError')
      commit('setProcessing', true)
      window.portis.showPortis();
    },
  }
}
