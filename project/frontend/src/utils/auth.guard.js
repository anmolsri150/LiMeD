import { isAuthGuardActive } from '../constants/config'
import { setCurrentUser, getCurrentUser } from '.'
export default (to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired)) {
    if (isAuthGuardActive) {
      window.portis.isLoggedIn().then(({ error, result }) => {
        console.log(error, result);
        if (result) {
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
