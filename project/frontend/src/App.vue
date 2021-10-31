<template>
  <div class="h-100">
    <router-view />
<!--    <color-switcher />-->
  </div>
</template>

<script>
import ColorSwitcher from "./components/Common/ColorSwitcher";

import { getDirection } from "./utils";

export default {
  components: {
    "color-switcher": ColorSwitcher
  },
  beforeMount() {
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.dir = "rtl";
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.dir = "ltr";
      document.body.classList.remove("rtl");
    }
  },
  mounted() {
    this.$portis.onLogin((walletAddress, email, reputation) => {
      console.log(walletAddress, email, reputation);
      this.$store.commit('setUser', {
        uid: walletAddress,
        email: email,
        reputation: reputation
      });
    });
    this.$portis.onLogout(() => {
      console.log('User logged out');
      this.$store.commit('setLogout');
    });
    this.$portis.onError(error => {
      console.log('error', error);
      this.$store.commit('setError', error.message)
      setTimeout(() => {
        this.$store.commit('clearError')
      }, 3000)
    });
    this.$portis.onActiveWalletChanged(walletAddress => {
      console.log('Active wallet address:', walletAddress);
      this.$store.commit('setUser', {
        uid: walletAddress,
        email: null,
        reputation: null
      });
    });
  }
};
</script>
