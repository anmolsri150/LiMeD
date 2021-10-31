<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('forms.top-labels-in-input')">
        <b-form @submit.prevent="onTopLabelsInInputFormSubmit">
          <label class="form-group has-top-label">
            <input type="email" class="form-control" v-model="topLabelsInInputForm.email" />
            <span>{{ $t('forms.email-u') }}</span>
          </label>
          <label class="form-group has-top-label">
            <input type="password" class="form-control" v-model="topLabelsInInputForm.password" />
            <span>{{ $t('forms.password-u') }}</span>
          </label>
          <div class="form-group has-top-label">
            <input-tag v-model="topLabelsInInputForm.tags"></input-tag>
            <span>{{ $t('forms.tags-u') }}</span>
          </div>
          <div class="form-group has-top-label">
            <datepicker
              :bootstrap-styling="true"
              :placeholder="$t('form-components.date')"
              v-model="topLabelsInInputForm.date"
            ></datepicker>
            <span>{{ $t('forms.date-u') }}</span>
          </div>
          <div class="form-group has-top-label">
            <v-select v-model="topLabelsInInputForm.select" :options="selectData" :dir="direction" />
            <span>{{ $t('forms.state-u') }}</span>
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
      topLabelsInInputForm: {
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
    onTopLabelsInInputFormSubmit() {
      console.log(JSON.stringify(this.topLabelsInInputForm));
    }
  }
};
</script>
