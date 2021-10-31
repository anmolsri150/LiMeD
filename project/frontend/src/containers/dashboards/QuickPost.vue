<template>
  <b-card class="mb-4 dashboard-quick-post" :title="$t('dashboards.quick-post')">
    <b-refresh-button @click="refreshButtonClick" />
    <b-form @submit.prevent="quickPostSubmit">
      <b-form-group horizontal label-cols="3" breakpoint="sm" :label="$t('dashboards.title')">
        <b-form-input v-model="quickPost.title" :placeholder="$t('dashboards.title')"></b-form-input>
      </b-form-group>
      <b-form-group horizontal label-cols="3" breakpoint="sm" :label="$t('dashboards.content')">
        <b-textarea
          v-model="quickPost.content"
          :placeholder="$t('dashboards.content')"
          :rows="4"
          :max-rows="4"
        />
      </b-form-group>
      <b-form-group horizontal label-cols="3" breakpoint="sm" :label="$t('dashboards.category')">
        <v-select :options="selectData" :dir="direction" />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="float-right"
      >{{ $t('dashboards.save-and-publish') }}</b-button>
    </b-form>
  </b-card>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { getDirection } from "../../utils";
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
      ],
      quickPost: {
        title: "",
        content: "",
        category: ""
      },
      direction: getDirection().direction
    };
  },
  methods: {
    refreshButtonClick() {
      console.log("refreshButtonClick");
    },
    quickPostSubmit() {
      console.log(this.quickPost);
    }
  }
};
</script>
