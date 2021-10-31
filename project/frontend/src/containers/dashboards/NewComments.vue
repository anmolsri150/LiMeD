<template>
  <b-card :title="$t('dashboards.new-comments')" class="dashboard-link-list">
    <vue-perfect-scrollbar
      class="scroll dashboard-list-with-user"
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
    >
      <list-with-user-item
        v-for="(item, index) in comments"
        :data="item"
        detail-path="#"
        :key="index"
      />
    </vue-perfect-scrollbar>
  </b-card>
</template>
<script>
import ListWithUserItem from "../../components/Listing/ListWithUserItem";
import { comments } from "../../data/comments";

export default {
  components: {
    "list-with-user-item": ListWithUserItem
  },
  data() {
    return {
      comments
    };
  }
};
</script>
