<template>
  <div>
    <p class="lead color-theme-1 mb-1 value">{{labelPrefix}}{{labely}}</p>
    <p class="mb-0 label text-small">{{labelx}}</p>
    <div :class="containerClass">
      <canvas ref="chart"></canvas>
    </div>
  </div>
</template>


<script>
import Chart from "chart.js";
import { smallLineChartOptions } from "./config";
import { addCommas } from "./utils";
export default {
  props: {
    data: {
      type: Object
    },
    containerClass: {
      type: String,
      default: "chart"
    },
    shadow: {
      type: Boolean,
      default: false
    },
    labelPrefix: {
      type: String,
      default: "$"
    }
  },
  data() {
    return {
      labelx: "AAA",
      labely: "BBB"
    };
  },
  mounted() {
    Chart.controllers.lineWithLine = Chart.controllers.line;
    Chart.controllers.lineWithLine = Chart.controllers.line.extend({
      draw(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);
        if (this.chart.tooltip._active && this.chart.tooltip._active[0]) {
          const activePoint = this.chart.tooltip._active[0];
          const chartCtx = this.chart.ctx;
          const x = activePoint.tooltipPosition().x;
          const topY = this.chart.scales["y-axis-0"].top;
          const bottomY = this.chart.scales["y-axis-0"].bottom;
          chartCtx.save();
          chartCtx.beginPath();
          chartCtx.moveTo(x, topY);
          chartCtx.lineTo(x, bottomY);
          chartCtx.lineWidth = 1;
          chartCtx.strokeStyle = "rgba(0,0,0,0.1)";
          chartCtx.stroke();
          chartCtx.restore();
        }
      }
    });
    const $that = this;
    const ctx = this.$refs.chart;
    const myChart = new Chart(ctx, {
      type: "lineWithLine",
      data: this.data,
      plugins: [
        {
          afterInit: function(chart, options) {
            const yLabel = chart.data.datasets[0].data[0];
            const xLabel = chart.data.labels[0];
            const label = chart.data.datasets[0].label;
            $that.changeLabels(label + "-" + xLabel, yLabel);
          }
        }
      ],
      options: Object.assign(
        { ...smallLineChartOptions },
        {
          tooltips: {
            intersect: false,
            enabled: false,
            custom: function(tooltipModel, data) {
              if (tooltipModel && tooltipModel.dataPoints) {
                const yLabel = tooltipModel.dataPoints[0].yLabel;
                const xLabel = tooltipModel.dataPoints[0].xLabel;
                const label = tooltipModel.body[0].lines[0].split(":")[0];
                $that.changeLabels(label + "-" + xLabel, yLabel);
              }
            }
          }
        }
      )
    });
  },
  methods: {
    changeLabels(x, y) {
      this.labelx = x;
      this.labely = addCommas(y);
    }
  }
};
</script>
