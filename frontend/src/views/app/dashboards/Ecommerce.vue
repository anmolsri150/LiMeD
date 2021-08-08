<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.ecommerce')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12">
        <div class="icon-cards-row">
          <icon-cards-carousel></icon-cards-carousel>
        </div>
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
        <product-categories-doughnut></product-categories-doughnut>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <tickets></tickets>
      </b-colxx>
      <b-colxx lg="4" md="6" class="mb-4">
        <cakes></cakes>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xl="6" lg="12" class="mb-4">
        <calendar></calendar>
      </b-colxx>
      <b-colxx xl="6" lg="12" class="mb-4">
        <best-sellers :title="$t('dashboards.best-sellers')"></best-sellers>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import BestSellers from "../../../containers/dashboards/BestSellers";
import Cakes from "../../../containers/dashboards/Cakes";
import Calendar from "../../../containers/dashboards/Calendar";
import IconCardsCarousel from "../../../containers/dashboards/IconCardsCarousel";
import Tickets from "../../../containers/dashboards/Tickets";
import ProductCategoriesDoughnut from "../../../containers/dashboards/ProductCategoriesDoughnut";
import RecentOrders from "../../../containers/dashboards/RecentOrders";
import SalesChartCard from "../../../containers/dashboards/SalesChartCard";

export default {
  components: {
    "best-sellers": BestSellers,
    cakes: Cakes,
    calendar: Calendar,
    "icon-cards-carousel": IconCardsCarousel,
    tickets: Tickets,
    "product-categories-doughnut": ProductCategoriesDoughnut,
    "recent-orders": RecentOrders,
    "sales-chart-card": SalesChartCard
  }
};
</script>
