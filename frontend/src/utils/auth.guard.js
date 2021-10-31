import {adminRoot, isAuthGuardActive, patientRoot} from '../constants/config'
import { setCurrentUser, getCurrentUser } from '.'
import store from '../store'
export default (to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (isAuthGuardActive) {
      window.portis.isLoggedIn().then(async ({error, result}) => {
        console.log(error, result);
        if (result) {
          // const userType = await store.getters.userType
          // if (!userType) {
          //   const isHospital = await window.contract.methods.getHospitalByAddress(store.state.currentUser.uid).call().catch((err) => {
          //     console.log(err.message)
          //     return false
          //   });
          //   let isPatient = false
          //   if (!isHospital) {
          //     isPatient = await window.contract.methods.getPatientDetails(store.state.currentUser.uid).call().catch((err) => {
          //       console.log(err.message)
          //       return false
          //     });
          //     if (isPatient) {
          //       store.commit('setUserType', 'patient')
          //       store.commit('setUserProfile', isPatient)
          //       setTimeout(() => {
          //         this.$router.push(patientRoot);
          //       }, 200);
          //     }
          //   } else {
          //     store.commit('setUserType', 'hospital')
          //     store.commit('setUserProfile', isHospital)
          //     setTimeout(() => {
          //       this.$router.push(adminRoot);
          //     }, 200);
          //   }
          //   if (!isHospital && !isPatient) {
          //     store.commit('setUserType', 'unregistered')
          //   }
          // }
          next();
        } else {
          setCurrentUser(null);
          next('/user/login')
        }
      });
      // const user = getCurrentUser();
      // if (user) {
      //   const roleArrayHierarchic = to.matched.filter(x => x.meta.roles).map(x => x.meta.roles);
      //   if (roleArrayHierarchic.every(x => x.includes(user.role))) {
      //     next();
      //   } else {
      //     next('/unauthorized')
      //   }
      // } else {
      //   setCurrentUser(null);
      //   next('/user/login')
      // }
    } else {
      next();
    }
  } else {
    next()
  }
}
