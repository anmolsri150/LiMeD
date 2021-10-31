<template>
  <b-card class="mb-4" no-body v-if="!loading">
    <b-tabs v-if="!isPatient" card no-fade>
      <b-tab title="Search Patient" active title-item-class="w-50 text-center">
        <label class="form-group has-top-label">
          <input class="form-control" v-model="searchAddr" />
          <span>Search Address</span>
        </label>
        <b-button size="sm" variant="outline-primary" @click="searchPatient">Search</b-button>
      </b-tab>
    </b-tabs>
    <div v-else>
      <b-card no-body class="mb-4">
        <div class="position-absolute card-top-buttons">
          <b-button variant="outline-white" class="icon-button">
            <i class="simple-icon-pencil" />
          </b-button>
        </div>
        <single-lightbox thumb="/assets/img/profiles/1.jpg" large="/assets/img/profiles/1.jpg" class-name="card-img-top" />
        <b-card-body>
          <b-row>
            <b-colxx xxs="6" class="mb-3">
              <p class="text-muted text-small mb-2">Name:</p>
              <p class="mb-3">{{ searchedUser._name }}</p>
              <p class="text-muted text-small mb-2">Gender:</p>
              <p class="mb-3">{{ searchedUser._gender }}</p>
              <p class="text-muted text-small mb-2">DOB:</p>
              <p class="mb-3">{{ searchedUser._dob }}</p>
            </b-colxx>
            <b-colxx xxs="6" class="mb-3">
              <p class="text-muted text-small mb-2">Blood Group:</p>
              <p class="mb-3">
                <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>{{ searchedUser._bloodgroup }}</b-badge>
              </p>
              <p class="text-muted text-small mb-2">{{$t('menu.contact')}}: Phone</p>
              <p class="mb-3">
                <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>{{ searchedUser._phone }}</b-badge>
              </p>
            </b-colxx>
          </b-row>
          <b-button  @click="browseRecords">
            Records
          </b-button>
        </b-card-body>
      </b-card>
    </div>
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
    async searchPatient() {
      console.log('sd')
      this.loading = true
      const patient = await window.contract.methods.getPatientDetails(this.searchAddr).call({
        from: this.currentUser.uid
      }).catch((err) => {
        console.log(err.message)
        alert("Patient doesn't exists/or no access!")
        return false
      });
      this.searchedUser = patient
      this.loading = false
      this.isPatient = true
      console.log(patient)
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
