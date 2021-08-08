<template>
  <div :class="containerClass">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
import { pieChartOptions } from "./config";

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
      Chart.defaults.pieWithShadow = Chart.defaults.pie;
      Chart.controllers.pieWithShadow = Chart.controllers.pie.extend({
        draw(ease) {
          Chart.controllers.pie.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.15)';
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          Chart.controllers.pie.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }
    const ctx = this.$refs.chart;
    const myChart = new Chart(ctx, {
      type: this.shadow ? "pieWithShadow" : "pie",
      data: this.data,
      options: pieChartOptions
    });
  }
};
</script>

