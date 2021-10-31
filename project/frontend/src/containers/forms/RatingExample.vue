<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.rating')">
        <b-row>
          <b-colxx xxs="12" sm="6">
            <b-row>
              <b-colxx xxs="12">
                <label>{{$t('form-components.interactive')}}</label>
              </b-colxx>
              <b-colxx xxs="12">
                <stars v-model="rate"></stars>
              </b-colxx>
            </b-row>
          </b-colxx>
          <b-colxx xxs="12" sm="6">
            <b-row>
              <b-colxx xxs="12">
                <label>{{$t('form-components.readonly')}}</label>
              </b-colxx>
              <b-colxx xxs="12">
                <stars v-model="disabledRate" :disabled="true"></stars>
              </b-colxx>
            </b-row>
          </b-colxx>
        </b-row>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import Stars from "../../components/Common/Stars";

export default {
  components: {
    stars: Stars
  },
  data() {
    return {
      rate: 3,
      disabledRate: 4
    };
  }
};
</script>
