<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.grid')">
        <b-form @submit.prevent="onGridFormSubmit">
          <b-row>
            <b-colxx sm="6">
              <b-form-group :label="$t('forms.email')">
                <b-form-input type="email" v-model="gridForm.email" />
              </b-form-group>
            </b-colxx>
            <b-colxx sm="6">
              <b-form-group :label="$t('forms.password')">
                <b-form-input type="password" v-model="gridForm.password" />
              </b-form-group>
            </b-colxx>

            <b-colxx sm="12">
              <b-form-group :label="$t('forms.address')">
                <b-form-input v-model="gridForm.address1"></b-form-input>
              </b-form-group>
            </b-colxx>

            <b-colxx sm="12">
              <b-form-group :label="$t('forms.address2')">
                <b-form-input v-model="gridForm.address2"></b-form-input>
              </b-form-group>
            </b-colxx>

            <b-colxx sm="6">
              <b-form-group :label="$t('forms.city')">
                <b-form-input v-model="gridForm.city"></b-form-input>
              </b-form-group>
            </b-colxx>
            <b-colxx sm="4">
              <b-form-group :label="$t('forms.state')">
                <b-form-select v-model="gridForm.state" :options="stateOptions" plain />
              </b-form-group>
            </b-colxx>
            <b-colxx sm="2">
              <b-form-group :label="$t('forms.zip')">
                <b-form-input v-model="gridForm.zip"></b-form-input>
              </b-form-group>
            </b-colxx>
          </b-row>

          <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.signin') }}</b-button>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      stateOptions: ["", "Option1", "Option2", "Option3", "Option4", "Option5"],
      gridForm: {
        email: "",
        password: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
      }
    };
  },
  methods: {
    onGridFormSubmit() {
      console.log(JSON.stringify(this.gridForm));
    }
  }
};
</script>
