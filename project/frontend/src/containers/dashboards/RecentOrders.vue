<template>
  <b-card title="Recent Documents">
    <b-refresh-button @click="refreshButtonClick" />
    <vue-perfect-scrollbar
      class="scroll dashboard-list-with-thumbs"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
    >
      <recent-order-item
        v-for="(order,index) in products.slice(0,6)"
        :order="order"
        detail-path="#"
        :key="index"
      />
    </vue-perfect-scrollbar>
  </b-card>
</template>
<script>
import RecentOrderItem from "../../components/Listing/RecentOrderItem";
import products from "../../data/products";

export default {
  components: {
    "recent-order-item": RecentOrderItem
  },
  data() {
    return {
      products
    };
  },
  methods: {
    refreshButtonClick() {
      console.log("refreshButtonClick");
    }
  }
};
</script>
