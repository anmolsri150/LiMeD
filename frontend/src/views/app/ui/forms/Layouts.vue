<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.forms')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <layout-basic></layout-basic>
    <layout-horizontal></layout-horizontal>
    <layout-top-labels-over-line></layout-top-labels-over-line>
    <layout-top-labels-in-input></layout-top-labels-in-input>
    <layout-grid></layout-grid>
    <layout-inline></layout-inline>
  </div>
</template>
<script>
import LayoutBasic from "../../../../containers/forms/LayoutBasic";
import LayoutHorizontal from "../../../../containers/forms/LayoutHorizontal";
import LayoutTopLabelsOverLine from "../../../../containers/forms/LayoutTopLabelsOverLine";
import LayoutTopLabelsInInput from "../../../../containers/forms/LayoutTopLabelsInInput";
import LayoutGrid from "../../../../containers/forms/LayoutGrid";
import LayoutInline from "../../../../containers/forms/LayoutInline";

export default {
  components: {
    "layout-basic": LayoutBasic,
    "layout-horizontal": LayoutHorizontal,
    "layout-top-labels-over-line": LayoutTopLabelsOverLine,
    "layout-top-labels-in-input": LayoutTopLabelsInInput,
    "layout-grid": LayoutGrid,
    "layout-inline": LayoutInline,
  }
};
</script>
