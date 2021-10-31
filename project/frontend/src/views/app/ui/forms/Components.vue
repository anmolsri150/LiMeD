<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.form-components')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <custom-input-example></custom-input-example>
    <vue-select-example></vue-select-example>
    <vue-autosuggest-example></vue-autosuggest-example>
    <date-picker-examples></date-picker-examples>
    <dropzone-example></dropzone-example>
    <input-tag-example></input-tag-example>
    <switch-example></switch-example>
    <slider-example></slider-example>
    <rating-example></rating-example>
  </div>
</template>

<script>
import CustomInputExample from "../../../../containers/forms/CustomInputExample";
import VueSelectExample from "../../../../containers/forms/VueSelectExample";
import VueAutosuggestExample from "../../../../containers/forms/VueAutosuggestExample";
import DatePickerExamples from "../../../../containers/forms/DatePickerExamples";
import DropzoneExample from "../../../../containers/forms/DropzoneExample";
import InputTagExample from "../../../../containers/forms/InputTagExample";
import SwitchExample from "../../../../containers/forms/SwitchExample";
import SliderExample from "../../../../containers/forms/SliderExample";
import RatingExample from "../../../../containers/forms/RatingExample";
export default {
  components: {
    "custom-input-example": CustomInputExample,
    "vue-select-example": VueSelectExample,
    "vue-autosuggest-example": VueAutosuggestExample,
    "date-picker-examples": DatePickerExamples,
    "dropzone-example": DropzoneExample,
    "input-tag-example": InputTagExample,
    "switch-example": SwitchExample,
    "slider-example": SliderExample,
    "rating-example": RatingExample
  }
};
</script>
