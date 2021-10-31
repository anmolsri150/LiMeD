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
          <template v-if="!loading">

            <div v-if="!showRegister" class="form-side align-content-center">
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
          <b-tabs v-else card no-fade>
            <b-tab title="Register As Patient" active title-item-class="w-50 text-center">
              <h2>
                If you're a patient, ask a hospital to register you.
              </h2>
              <b-button size="sm" variant="outline-primary" @click="logout">Logout</b-button>
            </b-tab>
            <b-tab title="Register As Hospital" title-item-class="w-50 text-center">
              <label class="form-group has-top-label">
                <input class="form-control" v-model="registerForm.name" />
                <span>Name</span>
              </label>
              <label class="form-group has-top-label">
                <input class="form-control" v-model="registerForm.contact" />
                <span>Phone</span>
              </label>
              <label class="form-group has-top-label">
                <input class="form-control" v-model="registerForm.address" />
                <span>Street Address</span>
              </label>
              <b-button size="sm" variant="outline-primary" @click="registerHospital">Submit</b-button>
              <b-button size="sm" variant="outline-primary" @click="logout">Logout</b-button>
            </b-tab>
          </b-tabs>
          </template>
          <div v-else class="loading"></div>
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
        return {
          loading: false,
          showRegister: false,
          registerForm: {
            name: null,
            contact: null,
            address: null,
          },
        };
    },
  mounted() {
    this.$store.commit('setProcessing', false)
  },
    computed: {
        ...mapGetters(["currentUser", "processing", "loginError"])
    },
    methods: {
        ...mapActions(["login"]),
      logout() {
        this.$portis.logout().then(() => {
          window.location.reload()
        });
      },
      resetForm() {
        this.registerForm = {
          name: null,
          contact: null,
          address: null,
        }
      },
      async registerHospital() {
          this.loading = true
        const result = await window.contract.methods.addHospital(this.registerForm.name, this.registerForm.address, this.registerForm.contact, this.currentUser.uid).send({
          from: this.currentUser.uid
        }).then(() => {
          return true
        }).catch((err) => {
          console.log(err.message)
          alert("Hospital Already exists!")
          return false
        });
        console.log(result)
        this.resetForm()
        const isHospital = await window.contract.methods.getHospitalByAddress(this.currentUser.uid).call({
          from: val.uid
        }).catch((err) => {
          console.log(err.message)
          return false
        });
        this.$store.commit('setUserType', 'hospital')
        this.$store.commit('setUserProfile', isHospital)
        setTimeout(() => {
          this.$router.push(adminRoot);
        }, 200);
        this.loading = false
      },
    },
    watch: {
        async currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
                // setTimeout(() => {
                //     this.$router.push(adminRoot);
                // }, 200);
              console.log(val.uid)
              const isHospital = await window.contract.methods.getHospitalByAddress(val.uid).call({
                from: val.uid
              }).catch((err) => {
                console.log(err.message)
                return false
              });
              let isPatient = false
              if (!isHospital) {
                isPatient = await window.contract.methods.getPatientDetails(val.uid).call({
                  from: val.uid
                }).catch((err) => {
                  console.log(err.message)
                  return false
                });
                if (isPatient) {
                  console.log(isPatient)
                  await this.$store.commit('setUserType', 'patient')
                  await this.$store.commit('setUserProfile', isPatient)
                  setTimeout(() => {
                    this.$router.push(adminRoot);
                  }, 400);
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
                this.showRegister = true
              }
              // console.log(isHospital)
              // console.log(isPatient)
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
