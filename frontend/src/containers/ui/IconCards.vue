<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.icon-card') }}</h5>
      <b-row class="icon-cards-row mb-3">
        <b-colxx xxs="6" sm="4" md="3" lg="2">
          <icon-card :title="$t('dashboards.pending-orders')" icon="iconsminds-clock" :value="14" />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="2">
          <icon-card
            :title="$t('dashboards.completed-orders')"
            icon="iconsminds-basket-coins"
            :value="32"
          />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="2">
          <icon-card
            :title="$t('dashboards.refund-requests')"
            icon="iconsminds-arrow-refresh"
            :value="74"
          />
        </b-colxx>
        <b-colxx xxs="6" sm="4" md="3" lg="2">
          <icon-card
            :title="$t('dashboards.new-comments')"
            icon="iconsminds-mail-read"
            :value="25"
          />
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>
<script>
import IconCard from '../../components/Cards/IconCard'

export default {
    components: {
        'icon-card': IconCard
    }
}
</script>
