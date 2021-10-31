<template>
  <div :class="containerClass">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
import { scatterChartOptions } from "./config";

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
        Chart.defaults.scatterWithShadow = Chart.defaults.scatter;
      Chart.controllers.scatterWithShadow = Chart.controllers.scatter.extend({
        draw(ease) {
          Chart.controllers.scatter.prototype.draw.call(this, ease);
          const chartCtx = this.chart.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.2)';
          chartCtx.shadowBlur = 7;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 7;
          chartCtx.responsive = true;
          Chart.controllers.scatter.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }
    const ctx = this.$refs.chart;
    const myChart = new Chart(ctx, {
      type: this.shadow ? 'scatterWithShadow' : 'scatter',
      data: this.data,
      options: scatterChartOptions
    });
  }
};
</script>

