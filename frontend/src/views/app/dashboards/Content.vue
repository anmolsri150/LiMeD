<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.content')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12">
        <icon-cards-carousel></icon-cards-carousel>
        <b-row>
          <b-colxx md="12">
            <quick-post></quick-post>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx lg="12" xl="6">
        <best-sellers :title="$t('dashboards.top-viewed-posts')"></best-sellers>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" md="6" class="mb-4">
        <cakes></cakes>
      </b-colxx>
      <b-colxx lg="8" md="12" class="mb-4">
        <new-comments></new-comments>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx sm="12" md="6" class="mb-4">
        <website-visit-chart-card></website-visit-chart-card>
      </b-colxx>
      <b-colxx sm="12" md="6" class="mb-4">
        <converconversion-rates-chart-card></converconversion-rates-chart-card>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-clock"
          :title="`5 ${$t('dashboards.posts')}`"
          :detail="$t('dashboards.pending-for-publish')"
          :percent="5*100/12"
          progressText="5/12"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-male"
          :title="`4 ${$t('dashboards.users')}`"
          :detail="$t('dashboards.on-approval-process')"
          :percent="4*100/6"
          progressText="4/6"
        />
      </b-colxx>
      <b-colxx lg="4" class="mb-4">
        <gradient-with-radial-progress-card
          icon="iconsminds-bell"
          :title="`8 ${$t('dashboards.alerts')}`"
          :detail="$t('dashboards.waiting-for-notice')"
          :percent="8*100/10"
          progressText="8/10"
        />
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import NewComments from "../../../containers/dashboards/NewComments";
import QuickPost from "../../../containers/dashboards/QuickPost";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";

export default {
  components: {
    "best-sellers": BestSellers,
    cakes: Cakes,
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "icon-cards-carousel": IconCardsCarousel,
    "new-comments": NewComments,
    "quick-post": QuickPost,
    "gradient-with-radial-progress-card": GradientWithRadialProgressCard,
    "website-visit-chart-card": WebsiteVisitsChartCard
  }
};
</script>
