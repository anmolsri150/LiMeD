<template>
<b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
        <b-card class="auth-card" no-body>
            <div class="position-relative image-side">
                <p class="text-white h2">{{ $t('dashboards.magic-is-in-the-details') }}</p>
                <p class="white mb-0">
                    Please use your e-mail to reset your password.
                    <br />If you are not a member, please
                    <router-link tag="a" to="/user/register" class="white">register</router-link>.
                </p>
            </div>
            <div class="form-side">
                <router-link tag="a" to="/">
                    <span class="logo-single" />
                </router-link>
                <h6 class="mb-4">{{ $t('user.forgot-password')}}</h6>
                <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
                    <b-form-group :label="$t('user.email')" class="has-float-label mb-4">
                        <b-form-input type="text" v-model="$v.form.email.$model" :state="!$v.form.email.$error" />
                        <b-form-invalid-feedback v-if="!$v.form.email.required">Please enter your email address</b-form-invalid-feedback>
                        <b-form-invalid-feedback v-else-if="!$v.form.email.email">Please enter a valid email address</b-form-invalid-feedback>
                        <b-form-invalid-feedback v-else-if="!$v.form.email.minLength">Your email must be minimum 4 characters</b-form-invalid-feedback>
                    </b-form-group>
                    <div class="d-flex justify-content-between align-items-center">
                        <router-link tag="a" to="/user/forgot-password">{{ $t('user.forgot-password-question')}}</router-link>
                        <b-button type="submit" variant="primary" size="lg" :disabled="processing" :class="{'btn-multiple-state btn-shadow': true,
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
                            <span class="label">{{ $t('user.reset-password-button') }}</span>
                        </b-button>
                    </div>
                </b-form>
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

export default {
    data() {
        return {
            form: {
                email: "test@coloredstrategies.com"
            }
        };
    },
    mixins: [validationMixin],
    validations: {
        form: {
            email: {
                required,
                email,
                minLength: minLength(4)
            }
        }
    },
    computed: {
        ...mapGetters(["processing", "loginError", "forgotMailSuccess"])
    },
    methods: {
        ...mapActions(["forgotPassword"]),
        formSubmit() {
            this.$v.form.$touch();
            if (!this.$v.form.$anyError) {
                this.forgotPassword({
                    email: this.form.email
                });
            }
        }
    },
    watch: {
        loginError(val) {
            if (val != null) {
                this.$notify("error", "Forgot Password Error", val, {
                    duration: 3000,
                    permanent: false
                });
            }
        },
        forgotMailSuccess(val) {
            if (val) {
                this.$notify(
                    "success",
                    "Forgot Password Success",
                    "Please check your email.", {
                        duration: 3000,
                        permanent: false
                    }
                );
            }
        }
    }
};
</script>
