<template>
  <div :class="containerClass">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
import { doughnutChartOptions } from "./config";
import { centerTextPlugin } from "./utils";

export default {
  props: {
    data: {
      type: Object
    },
    containerClass: {
      type: String,
      default: "chart-container"
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.shadow) {
      Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
      Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend({
        draw(ease) {
          Chart.controllers.doughnut.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = "rgba(0,0,0,0.15)";
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }
    const ctx = this.$refs.chart;
    const myChart = new Chart(ctx, {
      type: this.shadow ? "doughnutWithShadow" : "doughnut",
      data: this.data,
      options: doughnutChartOptions,
      plugins: [centerTextPlugin]
    });
  }
};
</script>

