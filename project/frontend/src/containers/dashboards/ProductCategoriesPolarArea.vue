<template>
  <b-card title="Data Categories">
    <div class="dashboard-donut-chart">
      <polar-area-chart :data="polarAreaChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import PolarAreaChart from "../../components/Charts/PolarArea";
import { polarAreaChartData } from "../../data/charts";

export default {
  components: {
    "polar-area-chart": PolarAreaChart
  },
  data() {
    return {
      polarAreaChartData
    };
  }
};
</script>
