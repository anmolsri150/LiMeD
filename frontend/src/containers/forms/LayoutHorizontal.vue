<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.horizontal')">
        <b-form @submit.prevent="onHorizontalSubmit">
          <b-form-group label-cols="2" horizontal :label="$t('forms.email')">
            <b-form-input v-model="horizontalForm.email" :placeholder="$t('forms.email')"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="2" horizontal :label="$t('forms.password')">
            <b-form-input
              type="password"
              v-model="horizontalForm.password"
              :placeholder="$t('forms.password')"
            />
          </b-form-group>
          <b-form-group label-cols="2" horizontal :label="$t('forms.radios')">
            <b-form-radio-group
              stacked
              class="pt-2"
              :options="horizontalFormRadios"
              v-model="horizontalForm.radio"
            />
          </b-form-group>
          <b-form-group label-cols="2" horizontal :label="$t('forms.checkbox')">
            <b-form-checkbox v-model="horizontalForm.checked">{{ $t('forms.custom-checkbox') }}</b-form-checkbox>
          </b-form-group>
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
      horizontalForm: {
        email: "",
        password: "",
        radio: "",
        checked: false
      },
      horizontalFormRadios: [
        this.$t("forms.first-radio"),
        this.$t("forms.second-radio"),
        { text: this.$t("forms.third-radio-disabled"), disabled: true }
      ]
    };
  },
  methods: {
    onHorizontalSubmit() {
      console.log(JSON.stringify(this.horizontalForm));
    }
  }
};
</script>
