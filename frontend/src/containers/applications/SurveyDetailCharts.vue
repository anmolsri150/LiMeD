<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h5 class="card-title">How old are you?</h5>
        <div class="chart-container">
          <doughnut-chart v-if="tabIndex == 1" :data="ageChartData" shadow />
        </div>
      </b-card-body>
    </b-card>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h5 class="card-title">What is your gender?</h5>
        <div class="chart-container">
          <doughnut-chart v-if="tabIndex == 1" :data="genderChartData" shadow />
        </div>
      </b-card-body>
    </b-card>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h5 class="card-title">What is your employment status?</h5>
        <div class="chart-container">
          <doughnut-chart v-if="tabIndex == 1" :data="workChartData" shadow />
        </div>
      </b-card-body>
    </b-card>
    <b-card class="mb-4" no-body>
      <b-card-body>
        <h5 class="card-title">What programming languages do you use?</h5>
        <div class="chart-container">
          <doughnut-chart v-if="tabIndex == 1" :data="codingChartData" shadow />
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import DoughnutChart from "../../components/Charts/Doughnut";
import { ThemeColors } from "../../utils";
const colors = ThemeColors();
export default {
  components: {
    "doughnut-chart": DoughnutChart
  },
  props:["tabIndex"],
  data() {
    return {
      ageChartData: {
        labels: ["12-24", "24-30", "30-40", "40-50", "50-60"],
        datasets: [
          {
            label: "",
            borderColor: [
              colors.themeColor1,
              colors.themeColor2,
              colors.themeColor3,
              colors.themeColor4,
              colors.themeColor5
            ],
            backgroundColor: [
              colors.themeColor1_10,
              colors.themeColor2_10,
              colors.themeColor3_10,
              colors.themeColor4_10,
              colors.themeColor5_10
            ],
            borderWidth: 2,
            data: [15, 25, 20, 30, 14]
          }
        ]
      },
      genderChartData: {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "",
            borderColor: [
              colors.themeColor1,
              colors.themeColor2,
              colors.themeColor3
            ],
            backgroundColor: [
              colors.themeColor1_10,
              colors.themeColor2_10,
              colors.themeColor3_10
            ],
            borderWidth: 2,
            data: [85, 45, 20]
          }
        ]
      },
      workChartData: {
        labels: [
          "Employed for wages",
          "Self-employed",
          "Looking for work",
          "Retired"
        ],
        datasets: [
          {
            label: "",
            borderColor: [
              colors.themeColor1,
              colors.themeColor2,
              colors.themeColor3,
              colors.themeColor4
            ],
            backgroundColor: [
              colors.themeColor1_10,
              colors.themeColor2_10,
              colors.themeColor3_10,
              colors.themeColor4_10
            ],
            borderWidth: 2,
            data: [15, 25, 20, 8]
          }
        ]
      },
      codingChartData: {
        labels: ["Python", "JavaScript", "PHP", "Java", "C#"],
        datasets: [
          {
            label: "",
            borderColor: [
              colors.themeColor1,
              colors.themeColor2,
              colors.themeColor3,
              colors.themeColor4,
              colors.themeColor5
            ],
            backgroundColor: [
              colors.themeColor1_10,
              colors.themeColor2_10,
              colors.themeColor3_10,
              colors.themeColor4_10,
              colors.themeColor4_10
            ],
            borderWidth: 2,
            data: [15, 25, 20, 8, 25]
          }
        ]
      }
    };
  }
};
</script>
