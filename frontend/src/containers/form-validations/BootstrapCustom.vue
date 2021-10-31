<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" title="Custom Rules">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('forms.name')">
                    <b-form-input type="text" v-model="$v.name.$model" :state="!$v.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.name.required">Please enter your name</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.name.minLength || !$v.name.maxLength">Your name must be between 2 and 16 characters</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.name.alpha">Your name must be composed only with letters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('forms.email')">
                    <b-form-input type="text" v-model="$v.email.$model" :state="!$v.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.email.required">Please enter your email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.email.email">Please enter a valid email address</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="E-mail Again" class="error-l-100">
                    <b-form-input type="text" v-model="$v.emailAgain.$model" :state="!$v.emailAgain.$error" />
                    <b-form-invalid-feedback v-if="!$v.emailAgain.required">Please enter your email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.emailAgain.email">Please enter a valid email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.emailAgain.sameAsEmail">Your inputs does not match</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Number" class="error-l-100">
                    <b-form-input type="text" v-model="$v.number.$model" :state="!$v.number.$error" />
                    <b-form-invalid-feedback v-if="!$v.number.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.number.numeric">Value must be a number</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Max">
                    <b-form-input type="text" v-model="$v.max.$model" :state="!$v.max.$error" />
                    <b-form-invalid-feedback v-if="!$v.max.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.max.numeric">Value must be a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.max.maxValue">Maximum 5</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Min">
                    <b-form-input type="text" v-model="$v.min.$model" :state="!$v.min.$error" />
                    <b-form-invalid-feedback v-if="!$v.min.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.min.numeric">Value must be a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.min.minValue">Minimum 5</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Regex (^[A-Z]*$)" class="error-l-125">
                    <b-form-input type="text" v-model="$v.withRegex.$model" :state="!$v.withRegex.$error" />
                    <b-form-invalid-feedback v-if="!$v.withRegex.required">Please enter uppercase characters</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.withRegex.upperCase">Only uppercase characters</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
            </b-form>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    alpha,
    email,
    sameAs,
    numeric,
    maxValue,
    minValue,
    helpers
} = require("vuelidate/lib/validators");

const upperCase = helpers.regex('upperCase', /^[A-Z]*$/)

export default {
    data() {
        return {
            name: "",
            email: "",
            emailAgain: "",
            number: "",
            max: "",
            min: "",
            withRegex: ""

        };
    },
    mixins: [validationMixin],
    validations: {
        name: {
            required,
            maxLength: maxLength(16),
            minLength: minLength(2),
            alpha
        },
        email: {
            required,
            email
        },
        emailAgain: {
            required,
            email,
            sameAsEmail: sameAs('email')
        },
        number: {
            required,
            numeric
        },
        max: {
            required,
            numeric,
            maxValue: maxValue(5)
        },
        min: {
            required,
            numeric,
            minValue: minValue(5)
        },
        withRegex: {
            required,
            upperCase
        }

    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(
                JSON.stringify({
                    name: this.name,
                    email: this.email,
                    emailAgain: this.emailAgain,
                    max: this.max,
                    min: this.min,
                    withRegex: this.withRegex,

                })
            );
        }
    }
};
</script>
