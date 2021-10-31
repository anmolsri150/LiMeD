<template>
  <b-card no-body>
    <b-card-body>
      <small-line-chart :data="data" labelPrefix="$" />
    </b-card-body>
  </b-card>
</template>

<script>
import SmallLineChart from "../Charts/SmallLine";

export default {
  props: ["labelPrefix", "data"],
  components: {
    "small-line-chart": SmallLineChart
  },
  data() {
    return {
      labelx: "",
      labely: ""
    };
  },
  methods: {
    onChartMouseOver({ labelx, labely }) {
      this.labelx = labelx;
      this.labely = labely;
    }
  }
};
</script>
