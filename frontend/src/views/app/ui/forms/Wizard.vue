<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.form-wizard')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" class="mb-5">
        <h5 class="mb-4">Basic</h5>
        <basic></basic>
      </b-colxx>
      <b-colxx xxs="12" class="mb-5">
        <h5 class="mb-4">Last Step End</h5>
        <last-step-end></last-step-end>
      </b-colxx>
      <b-colxx xxs="12" class="mb-5">
        <h5 class="mb-4">Top Navigation Disabled</h5>
        <top-nav-disabled></top-nav-disabled>
      </b-colxx>
      <b-colxx xxs="12" class="mb-5">
        <h5 class="mb-4">Validation</h5>
        <validation></validation>
      </b-colxx>
      <b-colxx xxs="12" class="mb-5">
        <h5 class="mb-4">Layouts</h5>
        <layouts></layouts>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import Basic from "../../../../containers/wizard/Basic";
import LastStepEnd from "../../../../containers/wizard/LastStepEnd";
import TopNavDisabled from "../../../../containers/wizard/TopNavDisabled";
import Validation from "../../../../containers/wizard/Validation";
import Layouts from "../../../../containers/wizard/Layouts";
export default {
  components: {
    basic: Basic,
    "last-step-end": LastStepEnd,
    "top-nav-disabled": TopNavDisabled,
    validation: Validation,
    layouts: Layouts
  }
};
</script>
