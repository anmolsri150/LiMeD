<template>
<b-card no-body>
    <b-card-body class="wizard wizard-default">
        <form-wizard :with-validate="true" :last-step-end="true">
            <tab :name="$t('wizard.step-name-1')" :desc="$t('wizard.step-desc-1')" :selected="true" :validate="validateStep1" :submit="submitStep1">
                <div class="wizard-basic-step">
                    <b-form class="av-tooltip tooltip-label-right">
                        <b-form-group :label="$t('forms.name')">
                            <b-form-input type="text" v-model.trim="$v.formStep1.name.$model" :state="!$v.formStep1.name.$error" />
                            <b-form-invalid-feedback>Name is required!</b-form-invalid-feedback>
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab :name="$t('wizard.step-name-2')" :desc="$t('wizard.step-desc-2')" :validate="validateStep2" :submit="submitStep2">
                <div class="wizard-basic-step">
                    <b-form class="av-tooltip tooltip-label-right">
                        <b-form-group :label="$t('forms.email')">
                            <b-form-input type="text" v-model="$v.formStep2.email.$model" :state="!$v.formStep2.email.$error" />
                            <b-form-invalid-feedback v-if="!$v.formStep2.email.required">Please enter your email address</b-form-invalid-feedback>
                            <b-form-invalid-feedback v-else-if="!$v.formStep2.email.email">Please enter a valid email address</b-form-invalid-feedback>
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab :name="$t('wizard.step-name-3')" :desc="$t('wizard.step-desc-3')" :validate="validateStep3" :submit="submitForm">
                <div class="wizard-basic-step">
                    <b-form class="av-tooltip tooltip-label-right">
                        <b-form-group :label="$t('forms.password')">
                            <b-form-input type="password" v-model.trim="$v.formStep3.password.$model" :state="!$v.formStep3.password.$error" />
                            <b-form-invalid-feedback>Password is required!</b-form-invalid-feedback>
                        </b-form-group>
                    </b-form>
                </div>
            </tab>
            <tab type="done">
                <div class="wizard-basic-step text-center pt-3">

                    <div v-if="isProcessing">
                        <b-spinner variant="primary" label="Spinning" class="mb-1"></b-spinner>
                        <p>{{$t('wizard.async')}}</p>
                    </div>
                    <div v-else>
                        <h2 class="mb-2">{{$t('wizard.content-thanks')}}</h2>
                        <p>{{$t('wizard.registered')}}</p>
                    </div>

                </div>
            </tab>
        </form-wizard>
    </b-card-body>
</b-card>
</template>

<script>
import FormWizard from "../../components/Form/Wizard/FormWizard";
import Tab from "../../components/Form/Wizard/Tab";

import {
    validationMixin
} from "vuelidate";
const {
    required,
    email,
} = require("vuelidate/lib/validators");
export default {
    components: {
        "form-wizard": FormWizard,
        "tab": Tab
    },
    data() {
        return {
            isProcessing: true,

            formStep1: {
                name: ""
            },
            formStep2: {
                email: ""
            },
            formStep3: {
                password: ""
            },
        };
    },
    mixins: [validationMixin],
    validations: {
        formStep1: {
            name: {
                required
            },
        },
        formStep2: {
            email: {
                required,
                email
            },
        },
        formStep3: {
            password: {
                required
            },
        },
    },
    methods: {
        validateStep1() {
            this.$v.formStep1.$touch();
            return !this.$v.formStep1.$anyError;
        },
        submitStep1() {
            console.log("step-1-submit")
        },
        validateStep2() {
            this.$v.formStep2.$touch();
            return !this.$v.formStep2.$anyError;
        },
        submitStep2() {
            console.log("step-2-submit")
        },
        validateStep3() {
            this.$v.formStep3.$touch();
            return !this.$v.formStep3.$anyError;
        },
        submitForm() {
            const form = {
                name: this.formStep1.name,
                email: this.formStep2.email,
                password: this.formStep3.password
            };
            console.log("form submitting : ", form)
            setTimeout(() => {
                this.isProcessing = false;
            }, 3000)
        }
    }
};
</script>
