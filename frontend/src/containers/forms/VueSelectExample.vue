<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.vue-select')">
        <b-form>
          <b-row>
            <b-colxx xxs="12" md="4">
              <b-form-group :label="$t('form-components.state-single')">
                <v-select v-model="vueSelectForm.single" :options="selectData" :dir="direction" />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group :label="$t('form-components.state-multiple')">
                <v-select
                  v-model="vueSelectForm.multiple"
                  multiple
                  :options="selectData"
                  :dir="direction"
                />
              </b-form-group>
            </b-colxx>
            <b-colxx xxs="12" md="4">
              <b-form-group :label="$t('form-components.state-multiple')">
                <v-select
                  label="name"
                  :filterable="false"
                  :options="vueSelectOptions"
                  @search="fetchOptions"
                  :dir="direction"
                >
                  <template slot="no-options">type to search GitHub repositories..</template>
                  <template slot="option" slot-scope="option">
                    <div class="d-center">
                      <img :src="option.owner.avatar_url" height="25" />
                      {{ option.full_name }}
                    </div>
                  </template>
                  <template slot="selected-option" slot-scope="option">
                    <div class="selected d-center">
                      <img :src="option.owner.avatar_url" height="18" />
                      {{ option.full_name }}
                    </div>
                  </template>
                  <template slot="spinner" slot-scope="spinner">
                    <div class="spinner-border text-primary" v-show="spinner"></div>
                  </template>
                </v-select>
              </b-form-group>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
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
      vueSelectOptions: [],
      vueSelectForm: {
        single: "",
        multiple: []
      },
      direction: getDirection().direction,
      selectData: [
        "Chocolate",
        "Vanilla",
        "Strawberry",
        "Caramel",
        "Cookies and Cream",
        "Peppermint"
      ]
    };
  },
  methods: {
    fetchOptions(search, loading) {
      loading(true);
      setTimeout(() => {
        fetch(
          `https://api.github.com/search/repositories?q=${escape(search)}`
        ).then(res => {
          res.json().then(json => (this.vueSelectOptions = json.items));
          loading(false);
        });
      }, 1000);
    }
  }
};
</script>
