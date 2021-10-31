<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.slider')">
        <b-row class="mb-3">
          <b-colxx xxs="12" sm="6">
            <b-row>
              <b-colxx xxs="12">
                <label>{{$t('form-components.double-slider')}}</label>
              </b-colxx>
              <b-colxx xxs="12" class="mb-5">
                <vue-slider
                  ref="slider"
                  v-model="sliderDoubleValue"
                  tooltip-dir="['bottom']"
                  :piecewise="true"
                  :data="sliderData"
                  :direction="direction"
                ></vue-slider>
              </b-colxx>
            </b-row>
          </b-colxx>
          <b-colxx xxs="12" sm="6">
            <b-row>
              <b-colxx xxs="12">
                <label>{{$t('form-components.single-slider')}}</label>
              </b-colxx>
              <b-colxx xxs="12" class="mb-5">
                <vue-slider
                  ref="sliderSingle"
                  v-model="sliderValue"
                  tooltip-dir="['bottom']"
                  :min="10"
                  :max="100"
                  :direction="direction"
                ></vue-slider>
              </b-colxx>
            </b-row>
          </b-colxx>
        </b-row>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import { getDirection } from "../../utils";
export default {
  components: {
    "vue-slider": VueSlider
  },
  data() {
    return {
      sliderValue: 65,
      sliderDoubleValue: [100, 400],
      sliderData: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      direction: getDirection().direction
    };
  }
};
</script>
