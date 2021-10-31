<template>
  <b-card class="mb-4" no-body v-if="!loading">
    <b-tabs card no-fade>
      <b-tab title="Grant Access" active title-item-class="w-50 text-center">
        <label class="form-group has-top-label">
          <input class="form-control" v-model="searchAddr" />
          <span>User's Address</span>
        </label>
        <b-button size="sm" variant="outline-primary" @click="grant">Grant</b-button>
      </b-tab>
      <b-tab title="Revoke Access" active title-item-class="w-50 text-center">
        <label class="form-group has-top-label">
          <input class="form-control" v-model="searchAddr" />
          <span>User's Address</span>
        </label>
        <b-button size="sm" variant="outline-primary" @click="revoke">Revoke</b-button>
      </b-tab>
    </b-tabs>
  </b-card>
  <div v-else>
    <h2>Loading...</h2>
    <div class="loading"></div>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../../../constants/config";
import ListPageHeading from "../../../../containers/pages/ListPageHeading";
import ListPageListing from "../../../../containers/pages/ListPageListing";
import {mapGetters} from "vuex";

export default {
  components: {
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing
  },
  data() {
    return {
      isPatient: false,
      loading: false,
      searchAddr: null,
      searchedUser: null,
      registerForm: {
        name: null,
        phone: null,
        gender: null,
        dob: null,
        bloodGroup: null,
        address: null,
      },
      isLoad: false,
      apiBase: apiUrl + "/cakes/fordatatable",
      displayMode: "thumb",
      sort: {
        column: "title",
        label: "Document Name"
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: []
    };
  },
  methods: {
    async grant() {
      this.loading = true
      const patient = await window.contract.methods.addAuth(this.searchAddr).send({
        from: this.currentUser.uid
      }).catch((err) => {
        console.log(err.message)
        alert("Patient doesn't exists/or no access!")
        return false
      });
      this.loading = false
      console.log(patient)
      this.searchAddr = null
    },
    async revoke() {
      this.loading = true
      const patient = await window.contract.methods.revokeAuth(this.searchAddr).send({
        from: this.currentUser.uid
      }).catch((err) => {
        console.log(err.message)
        alert(err.message)
        return false
      });
      this.loading = false
      console.log(patient)
      this.searchAddr = null
    },
    browseRecords() {
      this.$router.push({
        path: '/app/patients/' + this.searchAddr
      })
    },
    resetForm() {
      this.registerForm = {
        name: null,
        phone: null,
        gender: null,
        dob: null,
        bloodGroup: null,
        address: null,
      }
      this.searchAddr = null
    },
    loadItems() {
      this.isLoad = false;

      axios
        .get(this.apiUrl)
        .then(response => {
          return response.data;
        })
        .then(res => {
          this.total = res.total;
          this.from = res.from;
          this.to = res.to;
          this.items = res.data.map(x => {
            return {
              ...x,
              img: x.img.replace("/img/", "/img/products/")
            };
          });
          this.perPage = res.per_page;
          this.selectedItems = [];
          this.lastPage = res.last_page;
          this.isLoad = true;
        });
    },

    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map(x => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map(item => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter(x => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    },
    changePage(pageNum) {
      this.page = pageNum;
    }
  },
  computed: {
    ...mapGetters(["currentUser", "userType", "userProfile"]),
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    apiUrl() {
      return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    }
  },
  watch: {
    search() {
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    }
  },
  mounted() {
    // this.loadItems();
    const vm = this
    vm.isLoad = false;
    vm.items = vm.$store.state.items;
    setTimeout(() => {
      vm.isLoad = true;
    }, 2000)
  }
};
</script>
