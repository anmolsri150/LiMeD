<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.tables')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row class="mb-5">
    <b-colxx xxs="12">
        <h3 class="mb-4">{{ $t('table.bootstrap-tables') }}</h3>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-basic')">
        <b-table :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-striped')">
        <b-table striped :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-bordered')">
        <b-table bordered :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-borderless')">
        <b-table borderless :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-hoverable')">
        <b-table hover :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.bootstrap-responsive')">
        <b-table responsive :items="items" />
      </b-card>
    </b-colxx>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('table.bootstrap-custom')">
        <b-table
            ref="custom-table"
            class="vuetable"
            sort-by="title" sort-desc.sync="false"
            @row-selected="rowSelected"
            selectable
            :select-mode="bootstrapTable.selectMode"
            :current-page="currentPage"
            selectedVariant="primary"
            :fields="bootstrapTable.fields"
            :items="dataProvider"
          >
          <template slot="status" slot-scope="data">
            <b-badge class="mb-1" :variant="data.item.statusColor">{{ data.value }}</b-badge>
          </template>
          </b-table>
        <b-pagination
            size="sm"
            align="center"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination>

          <b-alert v-if="bootstrapTable.selected.length>0" show variant="primary">Selected Items :<br/><pre>{{ bootstrapTable.selected }}</pre></b-alert>
      </b-card>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <h3 class="mb-4">{{ $t('table.vue-tables') }}</h3>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.vue-pagination')">
        <vuetable
            ref="vuetable"
            :api-url="vuetableItems.apiUrl"
            :fields="vuetableItems.fields"
            :per-page="5"
            pagination-path
            @vuetable:pagination-data="onPaginationData"
          ></vuetable>
          <vuetable-pagination-bootstrap
            ref="pagination"
            @vuetable-pagination:change-page="onChangePage"
          ></vuetable-pagination-bootstrap>
      </b-card>
    </b-colxx>
    <b-colxx xxs="6">
      <b-card class="mb-4" :title="$t('table.vue-scrollable')">
            <vuetable
              table-height="360px"
              ref="vuetable-scrollable"
              :api-url="vuetableItems.apiUrl"
              :fields="vuetableItems.fields"
              :per-page="20"
              pagination-path
            ></vuetable>
      </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>
<script>
import { apiUrl } from '../../../../constants/config'
import axios from 'axios'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePaginationBootstrap from '../../../../components/Common/VuetablePaginationBootstrap'

export default {
  components: {
    'vuetable' : Vuetable,
    'vuetable-pagination-bootstrap' : VuetablePaginationBootstrap
  },
  data () {
    return {
      items: [
        { id: 1, first_name: 'Mark', last_name: 'Otto', username: '@mdo' },
        { id: 2, first_name: 'Jacob', last_name: 'Thornton', username: '@fat' },
        { id: 3, first_name: 'Lary', last_name: 'the Bird', username: '@twitter' }
      ],
      vuetableItems: {
        apiUrl: apiUrl + '/cakes/fordatatable',
        fields: [
          {
            name: 'title',
            sortField: 'title',
            title: 'Name',
            titleClass: '',
            dataClass: 'list-item-heading'
          },
          {
            name: 'sales',
            sortField: 'sales',
            title: 'Sales',
            titleClass: '',
            dataClass: 'text-muted'
          },
          {
            name: 'stock',
            sortField: 'stock',
            title: 'Stock',
            titleClass: '',
            dataClass: 'text-muted'
          },
          {
            name: 'category',
            sortField: 'category',
            title: 'Category',
            titleClass: '',
            dataClass: 'text-muted'
          }
        ]
      },
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      bootstrapTable: {
        selected: [],
        selectMode: 'multi',
        fields: [
          { key: 'title', label: 'Title', sortable: true, sortDirection: 'desc', tdClass: 'list-item-heading' },
          { key: 'sales', label: 'Sales', sortable: true, tdClass: 'text-muted' },
          { key: 'stock', label: 'Stock', sortable: true, tdClass: 'text-muted' },
          { key: 'category', label: 'Category', sortable: true, tdClass: 'text-muted' },
          { key: 'status', label: 'Status', sortable: true, tdClass: 'text-muted' }
        ]
      }
    }
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    rowSelected (items) {
      this.bootstrapTable.selected = items
    },
    dataProvider (ctx) {
      const params = this.apiParamsConverter(ctx)
      let promise = axios.get(apiUrl + '/cakes/fordatatable', { params: params })

      return promise
        .then(result => result.data)
        .then((data) => {
          this.currentPage = data.current_page
          this.perPage = data.per_page
          this.totalRows = data.total
          const items = data.data
          return items;
        }).catch(_error => {
          return []
        })
    },
    apiParamsConverter (params) {
      let apiParams = {}
      if (params.perPage !== 0) {
        apiParams.per_page = params.perPage
      }
      if (params.currentPage >= 1) {
        apiParams.page = params.currentPage
      }
      if (params.sortBy && params.sortBy.length > 0) {
        apiParams.sort = `${params.sortBy}|${params.sortDesc ? 'desc' : 'asc'}`
      }
      if (params.filter && params.filter.length > 0) {
        // Optional
      }
      return apiParams
    }
  }
}
</script>
