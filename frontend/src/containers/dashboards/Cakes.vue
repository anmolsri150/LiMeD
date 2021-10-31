<template>
  <b-card :title="$t('dashboards.cakes')" class="dashboard-link-list">
    <two-column-list :data="cakes" />
  </b-card>
</template>
<script>
import cakes from "../../data/cakes";
import TwoColumnList from "../../components/Listing/TwoColumnList";

export default {
  components: {
    "two-column-list": TwoColumnList
  },
  data() {
    return {
      cakes
    };
  }
};
</script>
