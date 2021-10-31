<template>
  <div :class="containerClass">
    <canvas ref="chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
import { lineChartOptions } from "./config";

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
      Chart.controllers.lineWithShadow = Chart.controllers.line;
      Chart.controllers.lineWithShadow = Chart.controllers.line.extend({
        draw(ease) {
          Chart.controllers.line.prototype.draw.call(this, ease);
          const chartCtx = this.chart.ctx;
          chartCtx.save();
          chartCtx.shadowColor = 'rgba(0,0,0,0.15)';
          chartCtx.shadowBlur = 10;
          chartCtx.shadowOffsetX = 0;
          chartCtx.shadowOffsetY = 10;
          chartCtx.responsive = true;
          chartCtx.stroke();
          Chart.controllers.line.prototype.draw.apply(this, arguments);
          chartCtx.restore();
        }
      });
    }
    const ctx = this.$refs.chart;
    const myChart = new Chart(ctx, {
      type: this.shadow ? "lineWithShadow" : "line",
      data: this.data,
      options: lineChartOptions
    });
  }
};
</script>

