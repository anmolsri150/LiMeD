<template>
  <b-row>
    <b-colxx xxs="6" class="mb-4">
      <small-line-chart-card :class="itemClass" label-prefix="$" :data="smallChartData1" />
    </b-colxx>
    <b-colxx xxs="6" class="mb-4">
      <small-line-chart-card :class="itemClass" label-prefix="$" :data="smallChartData2" />
    </b-colxx>
    <b-colxx xxs="6" class="mb-4">
      <small-line-chart-card :class="itemClass" label-prefix="$" :data="smallChartData3" />
    </b-colxx>
    <b-colxx xxs="6" class="mb-4">
      <small-line-chart-card :class="itemClass" label-prefix="$" :data="smallChartData4" />
    </b-colxx>
  </b-row>
</template>
<script>
import SmallLineChartCard from "../../components/Cards/SmallLineChartCard";
import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "../../data/charts";




export default {
  components: {
    "small-line-chart-card": SmallLineChartCard
  },
  props: ["itemClass"],
  data() {
    return {
      smallChartData1,
      smallChartData2,
      smallChartData3,
      smallChartData4
    };
  }
};
</script>
