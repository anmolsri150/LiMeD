<template>
<b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
        <b-card class="auth-card" no-body>
            <div class="position-relative image-side">
                <p class="text-white h2">READY FOR A MAGICAL MEDICAL EXPERIENCE?</p>
                <p class="white mb-0">
                    Please use your credentials to login.
                    <br />If you are not a member, please register.
                </p>
            </div>
            <div class="form-side align-content-center">
              <h4 class="mb-4">Login with</h4>
              <b-button @click="login" variant="primary" size="lg" :disabled="processing" :class="{'btn-multiple-state btn-shadow': true,
                    'show-spinner': processing,
                    'show-success': !processing && loginError===false,
                    'show-fail': !processing && loginError }">
                            <span class="spinner d-inline-block">
                                <span class="bounce1"></span>
                                <span class="bounce2"></span>
                                <span class="bounce3"></span>
                            </span>
                <span class="icon success">
                                <i class="simple-icon-check"></i>
                            </span>
                <span class="icon fail">
                                <i class="simple-icon-exclamation"></i>
                            </span>
                <span class="label"><img src="/portis.png" style="width: 8rem; padding: 0.5rem;"></span>

              </b-button>
            </div>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    email
} = require("vuelidate/lib/validators");
import {adminRoot, currentUser, patientRoot} from '../../constants/config';

export default {
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login"])
    },
    watch: {
        async currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                // setTimeout(() => {
                //     this.$router.push(adminRoot);
                // }, 200);
              console.log(val.uid)
              const isHospital = await window.contract.methods.getHospitalByAddress(val.uid).call().catch((err) => {
                console.log(err.message)
                return false
              });
              let isPatient = false
              if (!isHospital) {
                isPatient = await window.contract.methods.getPatientDetails(val.uid).call().catch((err) => {
                  console.log(err.message)
                  return false
                });
                if (isPatient) {
                  this.$store.commit('setUserType', 'patient')
                  this.$store.commit('setUserProfile', isPatient)
                  setTimeout(() => {
                    this.$router.push(patientRoot);
                  }, 200);
                }
              } else {
                this.$store.commit('setUserType', 'hospital')
                this.$store.commit('setUserProfile', isHospital)
                setTimeout(() => {
                    this.$router.push(adminRoot);
                }, 200);
              }
              if (!isHospital && !isPatient) {
                this.$store.commit('setUserType', 'unregistered')
              }
              console.log(isHospital)
              console.log(isPatient)
            }
        },
        loginError(val) {
            if (val != null) {
                this.$notify("error", "Login Error", val, {
                    duration: 3000,
                    permanent: false
                });

            }
        }
    }
};
</script>
