<template>
<b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4">
            <h6 class="mb-4">Locations</h6>
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip mb-5">
                <b-form-group class="error-l-100 tooltip-label-right" label="Label Right">
                    <b-form-input type="text" v-model.trim="labelright" :state="!$v.labelright.$invalid" />
                    <b-form-invalid-feedback>Label Right!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="tooltip-center-top" label="Top Center">
                    <b-form-input type="text" v-model.trim="topcenter" :state="!$v.topcenter.$invalid" />
                    <b-form-invalid-feedback>Top Center!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="tooltip-right-top" label="Top Right">
                    <b-form-input type="text" v-model.trim="topright" :state="!$v.topright.$invalid" />
                    <b-form-invalid-feedback>Top Right!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="tooltip-left-top" label="Top Left">
                    <b-form-input type="text" v-model.trim="topleft" :state="!$v.topright.$invalid" />
                    <b-form-invalid-feedback>Top Left!</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group class="tooltip-center-bottom" label="Bottom Center">
                    <b-form-input type="text" v-model.trim="bottomcenter" :state="!$v.bottomcenter.$invalid" />
                    <b-form-invalid-feedback>Bottom Center!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="tooltip-right-bottom" label="Bottom Right">
                    <b-form-input type="text" v-model.trim="bottomright" :state="!$v.bottomright.$invalid" />
                    <b-form-invalid-feedback>Bottom Right!</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="tooltip-left-bottom" label="Bottom Left">
                    <b-form-input type="text" v-model.trim="bottomleft" :state="!$v.topright.$invalid" />
                    <b-form-invalid-feedback>Bottom Left!</b-form-invalid-feedback>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mt-4" >{{ $t('forms.submit') }}</b-button>
            </b-form>

            <h6 class="mb-4">Label Right Position Helpers</h6>
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip mb-5 tooltip-label-right">

                <b-row>
                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-0" label="error-l-0">
                            <b-form-input type="text" v-model.trim="errorl_0" :state="!$v.errorl_0.$invalid" />
                            <b-form-invalid-feedback>error-l-0</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-25" label="error-l-25">
                            <b-form-input type="text" v-model.trim="errorl_25" :state="!$v.errorl_25.$invalid" />
                            <b-form-invalid-feedback>error-l-25</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-50" label="error-l-50">
                            <b-form-input type="text" v-model.trim="errorl_50" :state="!$v.errorl_50.$invalid" />
                            <b-form-invalid-feedback>error-l-50</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-75" label="error-l-75">
                            <b-form-input type="text" v-model.trim="errorl_75" :state="!$v.errorl_75.$invalid" />
                            <b-form-invalid-feedback>error-l-75</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-100" label="error-l-100">
                            <b-form-input type="text" v-model.trim="errorl_100" :state="!$v.errorl_100.$invalid" />
                            <b-form-invalid-feedback>error-l-100</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-125" label="error-l-125">
                            <b-form-input type="text" v-model.trim="errorl_125" :state="!$v.errorl_125.$invalid" />
                            <b-form-invalid-feedback>error-l-125</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-150" label="error-l-150">
                            <b-form-input type="text" v-model.trim="errorl_150" :state="!$v.errorl_150.$invalid" />
                            <b-form-invalid-feedback>error-l-150</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-175" label="error-l-175">
                            <b-form-input type="text" v-model.trim="errorl_175" :state="!$v.errorl_175.$invalid" />
                            <b-form-invalid-feedback>error-l-175</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-200" label="error-l-200">
                            <b-form-input type="text" v-model.trim="errorl_200" :state="!$v.errorl_200.$invalid" />
                            <b-form-invalid-feedback>error-l-200</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>
                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-225" label="error-l-225">
                            <b-form-input type="text" v-model.trim="errorl_225" :state="!$v.errorl_225.$invalid" />
                            <b-form-invalid-feedback>error-l-225</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-250" label="error-l-250">
                            <b-form-input type="text" v-model.trim="errorl_250" :state="!$v.errorl_250.$invalid" />
                            <b-form-invalid-feedback>error-l-250</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>

                    <b-colxx xxs="12" sm="6">
                        <b-form-group class="error-l-275" label="error-l-275">
                            <b-form-input type="text" v-model.trim="errorl_275" :state="!$v.errorl_275.$invalid" />
                            <b-form-invalid-feedback>error-l-275</b-form-invalid-feedback>
                        </b-form-group>
                    </b-colxx>
                </b-row>

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
    required
} = require("vuelidate/lib/validators");
export default {
    data() {
        return {
            labelright: null,
            topcenter: null,
            topleft: null,
            topright: null,
            bottomcenter: null,
            bottomleft: null,
            bottomright: null,

            errorl_0: null,
            errorl_25: null,
            errorl_50: null,
            errorl_75: null,
            errorl_100: null,
            errorl_125: null,
            errorl_150: null,
            errorl_175: null,
            errorl_200: null,
            errorl_225: null,
            errorl_250: null,
            errorl_275: null,

        };
    },
    mixins: [validationMixin],
    validations: {
        labelright: {
            required
        },
        topcenter: {
            required
        },
        topleft: {
            required
        },
        topright: {
            required
        },
        bottomcenter: {
            required
        },
        bottomleft: {
            required
        },
        bottomright: {
            required
        },
        errorl_0: {
            required
        },
        errorl_25: {
            required
        },
        errorl_50: {
            required
        },
        errorl_75: {
            required
        },
        errorl_100: {
            required
        },
        errorl_125: {
            required
        },
        errorl_150: {
            required
        },
        errorl_175: {
            required
        },
        errorl_200: {
            required
        },
        errorl_225: {
            required
        },
        errorl_250: {
            required
        },
        errorl_275: {
            required
        },

    },
    methods: {
        
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log("ok");
        }
    }
};
</script>
