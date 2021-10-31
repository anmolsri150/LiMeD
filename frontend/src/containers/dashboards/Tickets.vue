<template>
  <b-card title="Contacts">
    <vue-perfect-scrollbar
      class="scroll dashboard-list-with-user"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
    >
      <list-with-user-item
        v-for="(ticket, index) in tickets"
        :data="ticket"
        detail-path="#"
        :key="index"
      />
    </vue-perfect-scrollbar>
  </b-card>
</template>
<script>
import ListWithUserItem from "../../components/Listing/ListWithUserItem";
import tickets from "../../data/tickets";

export default {
  components: {
    "list-with-user-item": ListWithUserItem
  },
  data() {
    return {
      tickets
    };
  }
};
</script>
