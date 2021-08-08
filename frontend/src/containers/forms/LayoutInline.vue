<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.inline')">
        <b-form @submit.prevent="onInlineSubmit" inline>
          <b-input-group>
            <b-form-input
              type="text"
              v-model="inlineForm.fullname"
              :placeholder="$t('forms.firstname')"
              class="mb-2 mr-sm-2 mb-sm-0"
            />
          </b-input-group>
          <b-input-group prepend="@">
            <b-form-input
              type="text"
              v-model="inlineForm.lastname"
              :placeholder="$t('forms.lastname')"
              class="mb-2 mr-sm-2 mb-sm-0"
            />
          </b-input-group>
          <b-form-group>
            <b-form-checkbox
              v-model="inlineForm.checked"
              class="mb-2 mr-sm-2 mb-sm-0"
            >{{ $t('forms.custom-checkbox') }}</b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="outline-primary" size="sm">{{ $t('forms.submit') }}</b-button>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      inlineForm: {
        fullname: "",
        lastname: "",
        checked: false
      }
    };
  },
  methods: {
    onInlineSubmit() {
      console.log(JSON.stringify(this.inlineForm));
    }
  }
};
</script>
