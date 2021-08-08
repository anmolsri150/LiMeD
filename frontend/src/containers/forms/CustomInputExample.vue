<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.custom-inputs')">
        <b-form-group :label="$t('form-components.checkboxes')">
          <b-form-checkbox-group stacked>
            <b-form-checkbox value="first">Check this custom checkbox</b-form-checkbox>
            <b-form-checkbox value="second">Or this one</b-form-checkbox>
            <b-form-checkbox value="third" disabled>But not this disabled one</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group :label="$t('form-components.radios')">
          <b-form-radio-group stacked>
            <b-form-radio value="first">Select this custom radio</b-form-radio>
            <b-form-radio value="second">Or this one</b-form-radio>
            <b-form-radio value="third" disabled>But not this disabled one</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group :label="$t('form-components.inline')">
          <b-form-checkbox-group>
            <b-form-checkbox value="first">An inline custom input</b-form-checkbox>
            <b-form-checkbox value="second">and another one</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {};
</script>
