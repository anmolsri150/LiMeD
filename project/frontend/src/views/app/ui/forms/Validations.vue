<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.form-validations')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xs="12" md="6" class="mb-3">
        <bootstrap-basic></bootstrap-basic>
        <bootstrap-default-values></bootstrap-default-values>
      </b-colxx>

      <b-colxx xs="12" md="6" class="mb-3">
        <bootstrap-custom></bootstrap-custom>
        <top-labels></top-labels>
      </b-colxx>
    </b-row>

    <b-row>
      <b-colxx xs="12">
        <h5 class="mb-4">Tooltip Positioning</h5>
        <tooltip-locations></tooltip-locations>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import BootstrapBasic from "../../../../containers/form-validations/BootstrapBasic";
import BootstrapCustom from "../../../../containers/form-validations/BootstrapCustom";
import BootstrapDefaultValues from "../../../../containers/form-validations/BootstrapDefaultValues";
import TooltipLocations from "../../../../containers/form-validations/TooltipLocations";
import TopLabels from "../../../../containers/form-validations/TopLabels";
export default {
  components: {
    "bootstrap-basic": BootstrapBasic,
    "bootstrap-custom": BootstrapCustom,
    "bootstrap-default-values": BootstrapDefaultValues,
    "tooltip-locations": TooltipLocations,
    "top-labels": TopLabels
  }
};
</script>
