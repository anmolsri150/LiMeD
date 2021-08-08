<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.prices')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row class="equal-height-container mb-5">
      <b-colxx xxs="12">
        <b-card-title>{{$t('pages.prices.pricecomparison')}}</b-card-title>
      </b-colxx>
      <b-colxx
        v-for="(item,pIndex) in pricesData[locale]"
        md="12"
        lg="4"
        class="col-item mb-4"
        :key="`price_${pIndex}`"
      >
        <price-card :data="item" />
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card-title>{{$t('pages.prices.featurecomparison')}}</b-card-title>
      </b-colxx>
    </b-row>
    <feature-comparison />
  </div>
</template>

<script>
import PriceCard from "../../../../containers/pages/PriceCard";
import FeatureComparison from "../../../../containers/pages/FeatureComparison";
import { pricesData } from "../../../../data/prices";
import { getCurrentLanguage } from '../../../../utils';

export default {
  components: {
    "price-card": PriceCard,
    "feature-comparison": FeatureComparison
  },
  data() {
    return {
      locale: getCurrentLanguage(),
      pricesData
    };
  }
};
</script>
