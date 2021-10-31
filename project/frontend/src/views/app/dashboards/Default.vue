<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb heading="Dashboard" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12">
        <icon-cards-carousel></icon-cards-carousel>
        <b-row>
          <b-colxx md="12" class="mb-4">
            <sales-chart-card></sales-chart-card>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx lg="12" xl="6" class="mb-4">
        <recent-orders></recent-orders>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx lg="4" md="12" class="mb-4">
        <product-categories-polar-area></product-categories-polar-area>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <logs></logs>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <tickets></tickets>
      </b-colxx>
    </b-row>
<!--    <b-row>-->
<!--      <b-colxx xl="6" lg="12" class="mb-4">-->
<!--        <calendar></calendar>-->
<!--      </b-colxx>-->
<!--      <b-colxx xl="6" lg="12" class="mb-4">-->
<!--        <best-sellers :title="$t('dashboards.best-sellers')"></best-sellers>-->
<!--      </b-colxx>-->
<!--    </b-row>-->
<!--    <b-row>-->
<!--      <b-colxx sm="12" lg="4" class="mb-4">-->
<!--        <profile-statuses></profile-statuses>-->
<!--      </b-colxx>-->
<!--      <b-colxx md="6" lg="4" class="mb-4">-->
<!--        <gradient-card>-->
<!--          <b-badge pill variant="theme-3" class="align-self-start mb-3">{{ $t('dashboards.piaf') }}</b-badge>-->
<!--          <p class="lead text-white">{{ $t('dashboards.magic-is-in-the-details') }}</p>-->
<!--          <p class="text-white">{{ $t('dashboards.yes-it-is-indeed') }}</p>-->
<!--        </gradient-card>-->
<!--      </b-colxx>-->
<!--      <b-colxx md="6" lg="4" class="mb-4">-->
<!--        <cakes></cakes>-->
<!--      </b-colxx>-->
<!--    </b-row>-->
<!--    <sortable-statictics-row></sortable-statictics-row>-->
<!--    <b-row>-->
<!--      <b-colxx sm="12" md="6" class="mb-4">-->
<!--        <website-visit-chart-card></website-visit-chart-card>-->
<!--      </b-colxx>-->
<!--      <b-colxx sm="12" md="6" class="mb-4">-->
<!--        <converconversion-rates-chart-card></converconversion-rates-chart-card>-->
<!--      </b-colxx>-->
<!--    </b-row>-->
<!--    <b-row>-->
<!--      <b-colxx lg="12" md="6" xl="4">-->
<!--        <b-row>-->
<!--          <b-colxx lg="4" xl="12" class="mb-4">-->
<!--            <gradient-with-radial-progress-card-->
<!--              icon="iconsminds-clock"-->
<!--              :title="`5 ${$t('dashboards.files')}`"-->
<!--              :detail="$t('dashboards.pending-for-print')"-->
<!--              :percent="5*100/12"-->
<!--              progressText="5/12"-->
<!--            />-->
<!--          </b-colxx>-->
<!--          <b-colxx lg="4" xl="12" class="mb-4">-->
<!--            <gradient-with-radial-progress-card-->
<!--              icon="iconsminds-male"-->
<!--              :title="`4 ${$t('dashboards.orders')}`"-->
<!--              :detail="$t('dashboards.on-approval-process')"-->
<!--              :percent="4*100/6"-->
<!--              progressText="4/6"-->
<!--            />-->
<!--          </b-colxx>-->
<!--          <b-colxx lg="4" xl="12" class="mb-4">-->
<!--            <gradient-with-radial-progress-card-->
<!--              icon="iconsminds-bell"-->
<!--              :title="`8 ${$t('dashboards.alerts')}`"-->
<!--              :detail="$t('dashboards.waiting-for-notice')"-->
<!--              :percent="8*100/10"-->
<!--              progressText="8/10"-->
<!--            />-->
<!--          </b-colxx>-->
<!--        </b-row>-->
<!--      </b-colxx>-->
<!--      <b-colxx lg="6" md="6" xl="4" sm="12" class="mb-4">-->
<!--        <advanced-search></advanced-search>-->
<!--      </b-colxx>-->
<!--      <b-colxx lg="6" xl="4" class="mb-4">-->
<!--        <small-line-charts itemClass="dashboard-small-chart"></small-line-charts>-->
<!--        <top-rated-items></top-rated-items>-->
<!--      </b-colxx>-->
<!--    </b-row>-->
  </div>
</template>

<script>
import GradientCard from "../../../components/Cards/GradientCard";
import GradientWithRadialProgressCard from "../../../components/Cards/GradientWithRadialProgressCard";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import Calendar from "../../../containers/dashboards/Calendar";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Logs from "../../../containers/dashboards/Logs";
import Tickets from "../../../containers/dashboards/Tickets";
import ProductCategoriesPolarArea from "../../../containers/dashboards/ProductCategoriesPolarArea";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import TopRatedItems from "../../../containers/dashboards/TopRatedItems";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";

export default {
  components: {
    "advanced-search": AdvancedSearch,
    "best-sellers": BestSellers,
    cakes: Cakes,
    calendar: Calendar,
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "icon-cards-carousel": IconCardsCarousel,
    logs: Logs,
    tickets: Tickets,
    "product-categories-polar-area": ProductCategoriesPolarArea,
    "profile-statuses": ProfileStatuses,
    "recent-orders": RecentOrders,
    "sales-chart-card": SalesChartCard,
    "small-line-charts": SmallLineCharts,
    "sortable-statictics-row": SortableStaticticsRow,
    "top-rated-items": TopRatedItems,
    "website-visit-chart-card": WebsiteVisitsChartCard,
    "gradient-card": GradientCard,
    "gradient-with-radial-progress-card": GradientWithRadialProgressCard
  }
};
</script>
