<template>
  <b-card class="dashboard-search" no-body>
    <b-card-body>
      <h5 class="card-title text-white">{{ $t('dashboards.advanced-search') }}</h5>
      <b-form class="form-container">
        <b-form-group :label="$t('dashboards.toppings')">
          <v-select :options="selectData" />
        </b-form-group>
        <b-form-group :label="$t('dashboards.type')">
          <v-select :options="selectData" />
        </b-form-group>
        <b-form-group :label="$t('dashboards.keyword')">
          <b-form-input type="text" :placeholder="$t('dashboards.keyword')"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox>{{ $t('forms.custom-checkbox') }}</b-form-checkbox>
        </b-form-group>
        <b-form-group class="text-center">
          <b-button
            type="submit"
            variant="primary"
            class="mt-4 btn-lg"
          >{{ $t('dashboards.search') }}</b-button>
        </b-form-group>
      </b-form>
    </b-card-body>
  </b-card>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    "v-select": vSelect
  },
  data() {
    return {
      selectData: [
        {
          label: "Chocolate",
          value: "chocolate"
        },
        {
          label: "Vanilla",
          value: "vanilla"
        },
        {
          label: "Strawberry",
          value: "strawberry"
        },
        {
          label: "Caramel",
          value: "caramel"
        },
        {
          label: "Cookies and Cream",
          value: "cookiescream"
        },
        {
          label: "Peppermint",
          value: "peppermint"
        }
      ]
    };
  }
};
</script>
