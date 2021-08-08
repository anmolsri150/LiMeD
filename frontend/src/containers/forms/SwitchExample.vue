<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.switch')">
        <b-form>

          <b-row class="mb-3">
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.primary')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="primary" theme="custom" color="primary"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.secondary')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="secondary" theme="custom" color="secondary"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
          </b-row>

          <b-row>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.primary-inverse')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="primaryInverse" theme="custom" color="primary-inverse"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.secondary-inverse')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="secondaryInverse" theme="custom" color="secondary-inverse"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
          </b-row>



          
          <b-row class="mb-3">
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.primary')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="primarySmall" theme="custom" color="primary" class="vue-switcher-small"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.secondary')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="secondarySmall" theme="custom" color="secondary" class="vue-switcher-small"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
          </b-row>

          <b-row>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.primary-inverse')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="primaryInverseSmall" theme="custom" color="primary-inverse" class="vue-switcher-small"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
            <b-colxx xxs="6">
              <b-row>
                <b-colxx xxs="12">
                  <label>{{$t('form-components.secondary-inverse')}}</label>
                </b-colxx>
                <b-colxx xxs="12">
                  <switches v-model="secondaryInverseSmall" theme="custom" color="secondary-inverse" class="vue-switcher-small"></switches>
                </b-colxx>
              </b-row>
            </b-colxx>
          </b-row>

        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import Switches from "vue-switches";

export default {
  components: {
    switches: Switches
  },
  data() {
    return {
      primary: true,
      secondary: false,
      primaryInverse: false,
      secondaryInverse: true,
      primarySmall: true,
      secondarySmall: false,
      primaryInverseSmall: false,
      secondaryInverseSmall: true
    };
  }
};
</script>
