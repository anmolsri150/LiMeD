<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.basic')">
        <b-form @submit.prevent="onBasicSubmit">
          <b-form-group :label="$t('forms.email')" :description="$t('forms.email-muted')">
            <b-form-input type="email" v-model="basicForm.email" :placeholder="$t('forms.email')" />
          </b-form-group>
          <b-form-group :label="$t('forms.password')">
            <b-form-input
              type="password"
              v-model="basicForm.password"
              :placeholder="$t('forms.password')"
            />
          </b-form-group>
          <b-form-group>
            <b-form-checkbox v-model="basicForm.checked">{{ $t('forms.custom-checkbox') }}</b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      basicForm: {
        email: "",
        password: "",
        checked: false
      }
    };
  },
  methods: {
    onBasicSubmit() {
      console.log(JSON.stringify(this.basicForm));
    }
  }
};
</script>
