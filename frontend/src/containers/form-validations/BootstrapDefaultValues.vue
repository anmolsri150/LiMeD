<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" title="Default Values">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-right-bottom">
                <b-form-group label="Location Type">
                    <b-form-radio-group stacked v-model="$v.locationType.$model" :state="!$v.locationType.$error">
                        <b-form-radio value="home">Residential</b-form-radio>
                        <b-form-radio value="work">Business</b-form-radio>
                        <b-form-radio value="awesome">Awesome</b-form-radio>
                    </b-form-radio-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.locationType.required">Please select one!</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Location Qualities">
                    <b-form-checkbox-group v-model="$v.locationQualities.$model" :state="!$v.locationQualities.$error">
                        <b-form-checkbox value="beautiful">Beautiful</b-form-checkbox>
                        <b-form-checkbox value="awesome">Awesome</b-form-checkbox>
                        <b-form-checkbox value="wonderful">Wonderful</b-form-checkbox>
                    </b-form-checkbox-group>
                    <b-form-invalid-feedback class="d-block" v-if="!$v.locationQualities.required">Please select one!</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="First Name">
                    <b-form-input type="text" v-model="$v.firstname.$model" :state="!$v.firstname.$error" />
                    <b-form-invalid-feedback v-if="!$v.firstname.required">This field is invalid</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Last Name">
                    <b-form-input type="text" v-model="$v.lastname.$model" :state="!$v.lastname.$error" />
                    <b-form-invalid-feedback v-if="!$v.lastname.required">This field is invalid</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Street">
                    <b-form-input type="text" v-model="$v.location.street.$model" :state="!$v.location.street.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.street.required">This is an error!</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Suite">
                    <b-form-input type="text" v-model="$v.location.suite.$model" :state="!$v.location.suite.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.suite.required">This is an error!</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="City">
                    <b-form-input type="text" v-model="$v.location.city.$model" :state="!$v.location.city.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.city.required">This is an error!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="State">
                    <b-form-select v-model="$v.location.state.$model" :state="!$v.location.state.$error" :options="stateOptions" plain />
                    <b-form-invalid-feedback>Please select a state!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Zip Code">
                    <b-form-input type="text" v-model="$v.location.zip.$model" :state="!$v.location.zip.$error" />
                    <b-form-invalid-feedback v-if="!$v.location.zip.required">This is an error!</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4" >{{ $t('forms.submit') }}</b-button>
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

const upperCase = helpers.regex("upperCase", /^[A-Z]*$/);

export default {
    data() {
        return {
            stateOptions: ["", "Something", "Something else", "Florida"],
            locationType: "work",
            locationQualities: ["beautiful", "awesome", "wonderful"],
            firstname: "Sarah",
            lastname: "Kortney",
            location: {
                street: "10752 Deerwood Park Blvd",
                suite: "110",
                city: "Jacksonville",
                state: "Florida",
                zip: "32256"
            }
        };
    },
    mixins: [validationMixin],
    validations: {
        locationType: {
            required
        },
        locationQualities: {
            required
        },
        firstname: {
            required
        },
        lastname: {
            required
        },
        location: {
            street: {
                required
            },
            suite: {
                required
            },
            city: {
                required
            },
            state: {
                required
            },
            zip: {
                required
            }
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
                    withRegex: this.withRegex
                })
            );
        }
    }
};
</script>
