<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.sortable')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <h5 class="mb-4 card-title">{{ $t('sortable.columns') }}</h5>
        <draggable class="row icon-cards-row mb-2">
            <b-colxx xxs="6" sm="4" md="3" lg="2">
                <icon-card :title="$t('dashboards.pending-orders')" icon="iconsminds-clock" :value=14 />
            </b-colxx>
            <b-colxx xxs="6" sm="4" md="3" lg="2">
                <icon-card :title="$t('dashboards.completed-orders')" icon="iconsminds-basket-coins" :value=32 />
            </b-colxx>
            <b-colxx xxs="6" sm="4" md="3" lg="2">
                <icon-card :title="$t('dashboards.refund-requests')" icon="iconsminds-arrow-refresh" :value=74 />
            </b-colxx>
             <b-colxx xxs="6" sm="4" md="3" lg="2">
                <icon-card :title="$t('dashboards.new-comments')" icon="iconsminds-mail-read" :value=25 />
            </b-colxx>
        </draggable>

        <b-row>
            <b-colxx xxs="12">
                <h5 class="mb-4 card-title">{{ $t('sortable.basic') }}</h5>
                <b-card class="mb-4">
                    <draggable type="ul" class="list-unstyled">
                        <li><p>1. Angel Cake</p></li>
                        <li><p>2. Bibingka</p></li>
                        <li><p>3. Cremeschnitte</p></li>
                        <li><p>4. Faworki</p></li>
                    </draggable>
                </b-card>
            </b-colxx>
        </b-row>

        <b-row>
            <b-colxx xxs="12">
                <h5 class="mb-4 card-title">{{ $t('sortable.basic') }}</h5>
                <b-card class="mb-4">
                    <draggable type="ul" class="list-unstyled" handle=".handle">
                        <li><p>
                            <span class="badge badge-pill badge-secondary handle mr-1"><i class="simple-icon-cursor-move" /></span>
                            <span>Angel Cake</span>
                        </p></li>
                        <li><p>
                            <span class="badge badge-pill badge-secondary handle mr-1"><i class="simple-icon-cursor-move" /></span>
                            <span>Bibingka</span>
                        </p></li>
                        <li><p>
                            <span class="badge badge-pill badge-secondary handle mr-1"><i class="simple-icon-cursor-move" /></span>
                            <span>Cremeschnitte</span>
                        </p></li>
                        <li><p>
                            <span class="badge badge-pill badge-secondary handle mr-1"><i class="simple-icon-cursor-move" /></span>
                            <span>Faworki</span>
                        </p></li>
                    </draggable>
                </b-card>
            </b-colxx>
        </b-row>

    </b-colxx>
  </b-row>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
import IconCard from '../../../../components/Cards/IconCard'

export default {
  components: {
    'draggable' : Draggable,
    'icon-card' : IconCard
  },
  data () {
    return { }
  }
}
</script>
