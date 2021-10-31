<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.top-labels-over-line')">
        <b-form @submit.prevent="onTopLabelsOverLineFormSubmit">
          <label class="form-group has-float-label">
            <input type="email" class="form-control" v-model="topLabelsOverLineForm.email" />
            <span>{{ $t('forms.email') }}</span>
          </label>
          <label class="form-group has-float-label">
            <input type="password" class="form-control" v-model="topLabelsOverLineForm.password" />
            <span>{{ $t('forms.password') }}</span>
          </label>
          <div class="form-group has-float-label">
            <input-tag v-model="topLabelsOverLineForm.tags"></input-tag>
            <span>{{ $t('forms.tags') }}</span>
          </div>
          <div class="form-group has-float-label">
            <datepicker
              :bootstrap-styling="true"
              :placeholder="$t('form-components.date')"
              v-model="topLabelsOverLineForm.date"
            ></datepicker>
            <span>{{ $t('forms.date') }}</span>
          </div>
          <div class="form-group has-float-label">
            <v-select
              v-model="topLabelsOverLineForm.select"
              :options="selectData"
              :dir="direction"
            />
            <span>{{ $t('forms.state') }}</span>
          </div>
          <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Datepicker from "vuejs-datepicker";
import InputTag from "../../components/Form/InputTag";
import { getDirection } from "../../utils";

export default {
  components: {
    "input-tag": InputTag,
    "v-select": vSelect,
    datepicker: Datepicker
  },
  data() {
    return {
      direction: getDirection().direction,
      selectData: [
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ],
      topLabelsOverLineForm: {
        email: "",
        password: "",
        tags: [],
        date: null,
        select: "",
        checked: false
      }
    };
  },
  methods: {
    onTopLabelsOverLineFormSubmit() {
      console.log(JSON.stringify(this.topLabelsOverLineForm));
    }
  }
};
</script>
