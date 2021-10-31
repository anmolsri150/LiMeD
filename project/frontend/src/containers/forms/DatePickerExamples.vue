<template>
  <b-row>
    <b-colxx xxs="12" xl="8" class="mb-4">
      <b-card :title="$t('form-components.date-picker')">
        <b-form>
          <b-row class="mb-5">
            <b-colxx xxs="12">
              <label>{{$t('form-components.date')}}</label>
            </b-colxx>
            <b-colxx xxs="12">
              <datepicker
                :bootstrap-styling="true"
                :placeholder="$t('form-components.date')"
                v-model="selectedValueSingle"
              ></datepicker>
            </b-colxx>
          </b-row>

          <b-row class="mb-5">
            <b-colxx xxs="12">
              <label>{{$t('form-components.month-view-only')}}</label>
            </b-colxx>
            <b-colxx xxs="12">
              <datepicker
                :minimumView="'month'"
                :maximumView="'month'"
                :placeholder="$t('form-components.date')"
                :bootstrap-styling="true"
              ></datepicker>
            </b-colxx>
          </b-row>

          <b-row class="mb-5">
            <b-colxx xxs="12">
              <label>{{$t('form-components.year-and-month-view-only')}}</label>
            </b-colxx>
            <b-colxx xxs="12">
              <datepicker
                :placeholder="$t('form-components.date')"
                :minimumView="'month'"
                :maximumView="'year'"
                :initialView="'year'"
                :bootstrap-styling="true"
              ></datepicker>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>

    <b-colxx xxs="12" xl="4" class="mb-4">
      <b-card :title="$t('form-components.embedded')">
        <b-form>
          <b-row class="mb-0">
            <b-colxx xxs="12">
              <b-form-group>
                <datepicker :inline="true" :bootstrap-styling="true" class="embeded"></datepicker>
              </b-form-group>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    datepicker: Datepicker
  },
  data() {
    return {
      selectedValueSingle: new Date()
    };
  }
};
</script>
