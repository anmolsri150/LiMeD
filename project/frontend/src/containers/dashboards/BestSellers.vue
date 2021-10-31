<template>
  <b-card :title="title">
    <vuetable
      ref="vuetable"
      :api-url="bestsellers.apiUrl"
      :fields="bestsellers.fields"
      :per-page="6"
      pagination-path
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <vuetable-pagination-bootstrap
      ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    />
  </b-card>
</template>
<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import { apiUrl } from "../../constants/config";

export default {
  props: ["title"],
  components: {
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap
  },
  data() {
    return {
      bestsellers: {
        apiUrl: apiUrl + "/cakes/fordatatable",
        fields: [
          {
            name: "title",
            sortField: "title",
            title: "Name",
            titleClass: "",
            dataClass: "list-item-heading"
          },
          {
            name: "sales",
            sortField: "sales",
            title: "Sales",
            titleClass: "",
            dataClass: "text-muted"
          },
          {
            name: "stock",
            sortField: "stock",
            title: "Stock",
            titleClass: "",
            dataClass: "text-muted"
          },
          {
            name: "category",
            sortField: "category",
            title: "Category",
            titleClass: "",
            dataClass: "text-muted"
          }
        ]
      }
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};
</script>
