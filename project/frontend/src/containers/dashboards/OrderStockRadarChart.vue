<template>
  <b-card :title="$t('dashboards.order-stock')">
    <div class="dashboard-donut-chart">
      <radar-chart :data="radarChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import RadarChart from "../../components/Charts/Radar";
import { radarChartData } from "../../data/charts";

export default {
  components: {
    "radar-chart": RadarChart
  },
  data() {
    return {
      radarChartData
    };
  }
};
</script>
