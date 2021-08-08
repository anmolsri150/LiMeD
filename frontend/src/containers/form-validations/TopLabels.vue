<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
        <b-form
          @submit.prevent="onValitadeOverLineFormFormSubmit"
          class="av-tooltip tooltip-label-bottom"
        >
          <b-form-group :label="$t('forms.email')" class="has-float-label">
            <b-form-input
              type="text"
              v-model.trim="$v.overLineForm.email.$model"
              :state="!$v.overLineForm.email.$error"
            />
            <b-form-invalid-feedback v-if="!$v.overLineForm.email.required">Email is required!</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.overLineForm.email.email">Invalid email address</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('forms.password')" class="has-float-label">
            <b-form-input
              type="password"
              v-model.trim="$v.overLineForm.password.$model"
              :state="!$v.overLineForm.password.$error"
            />
            <b-form-invalid-feedback v-if="!$v.overLineForm.password.required">Password is required!</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.overLineForm.password.minLength">Minimum 6</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.overLineForm.password.maxLength">Maximum 16</b-form-invalid-feedback>
          </b-form-group>
          <div class="form-group has-float-label">
            <input-tag v-model="$v.overLineForm.tags.$model"></input-tag>
            <span>{{ $t('forms.tags') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.overLineForm.tags.$error && !$v.overLineForm.tags.required}"
            >At least one tag is required</div>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.overLineForm.tags.$error && !$v.overLineForm.tags.minLength}"
            >Pick at least 3 tags</div>
          </div>
          <div class="form-group has-float-label">
            <datepicker
              :bootstrap-styling="true"
              :placeholder="$t('form-components.date')"
              v-model="$v.overLineForm.date.$model"
            ></datepicker>
            <span>{{ $t('forms.date') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.overLineForm.date.$error && !$v.overLineForm.date.required}"
            >Date required</div>
          </div>
          <div class="form-group has-float-label">
            <v-select v-model="$v.overLineForm.state.$model" :options="selectData" />
            <span>{{ $t('forms.state') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.overLineForm.state.$error && !$v.overLineForm.state.required}"
            >State is required!</div>
          </div>
          <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit')}}</b-button>
        </b-form>
      </b-card>
      <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
        <b-form
          @submit.prevent="onValitadeLabelInInputFormFormSubmit"
          class="av-tooltip tooltip-label-bottom"
        >
          <b-form-group :label="$t('forms.email')" class="has-top-label">
            <b-form-input
              type="text"
              v-model.trim="$v.labelsInInput.email.$model"
              :state="!$v.labelsInInput.email.$error"
            />
            <b-form-invalid-feedback v-if="!$v.labelsInInput.email.required">Email is required!</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.labelsInInput.email.email">Invalid email address</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('forms.password')" class="has-top-label">
            <b-form-input
              type="password"
              v-model.trim="$v.labelsInInput.password.$model"
              :state="!$v.labelsInInput.password.$error"
            />
            <b-form-invalid-feedback
              v-if="!$v.labelsInInput.password.required"
            >Password is required!</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.labelsInInput.password.minLength">Minimum 6</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.labelsInInput.password.maxLength">Maximum 16</b-form-invalid-feedback>
          </b-form-group>
          <div class="form-group has-top-label">
            <input-tag v-model="$v.labelsInInput.tags.$model"></input-tag>
            <span>{{ $t('forms.tags') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.labelsInInput.tags.$error && !$v.labelsInInput.tags.required}"
            >At least one tag is required</div>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.labelsInInput.tags.$error && !$v.labelsInInput.tags.minLength}"
            >Pick at least 3 tags</div>
          </div>
          <div class="form-group has-top-label">
            <datepicker
              :bootstrap-styling="true"
              v-model="$v.labelsInInput.date.$model"
            ></datepicker>
            <span>{{ $t('forms.date') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.labelsInInput.date.$error && !$v.labelsInInput.date.required}"
            >Date required</div>
          </div>
          <div class="form-group has-top-label">
            <v-select v-model="$v.labelsInInput.state.$model" :options="selectData" />
            <span>{{ $t('forms.state') }}</span>
            <div
              :class="{'invalid-feedback':true ,'d-block':$v.labelsInInput.state.$error && !$v.labelsInInput.state.required}"
            >State is required!</div>
          </div>
          <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit')}}</b-button>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import InputTag from "../../components/Form/InputTag";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Datepicker from "vuejs-datepicker";

import { validationMixin } from "vuelidate";
const {
  required,
  email,
  minLength,
  maxLength,
  helpers
} = require("vuelidate/lib/validators");

export default {
  components: {
    "input-tag": InputTag,
    "v-select": vSelect,
    "datepicker": Datepicker
  },
  data() {
    return {
      selectData: [
        {
          label: "Chocolate",
          value: "chocolate"
        },
        {
          label: "Vanilla",
          value: "vanilla"
        },
        {
          label: "Strawberry",
          value: "strawberry"
        },
        {
          label: "Caramel",
          value: "caramel"
        },
        {
          label: "Cookies and Cream",
          value: "cookiescream"
        },
        {
          label: "Peppermint",
          value: "peppermint"
        }
      ],
      overLineForm: {
        email: "",
        password: "",
        state: "",
        tags: [],
        date: null
      },
      labelsInInput: {
        email: "",
        password: "",
        state: "",
        tags: [],
        date: null
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    overLineForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(6)
      },
      state: {
        required
      },
      tags: {
        required,
        minLength: minLength(3)
      },
      date: {
        required
      }
    },
    labelsInInput: {
      email: {
        required,
        email
      },
      password: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(6)
      },
      state: {
        required
      },
      tags: {
        required,
        minLength: minLength(3)
      },
      date: {
        required
      }
    }
  },
  methods: {
    onValitadeOverLineFormFormSubmit() {
      this.$v.overLineForm.$touch();
      console.log("overLineForm is invalid :", this.$v.overLineForm.$invalid);
    },
    onValitadeLabelInInputFormFormSubmit() {
      this.$v.labelsInInput.$touch();
      console.log("labelsInInput is invalid :", this.$v.labelsInInput.$invalid);
    }
  }
};
</script>
