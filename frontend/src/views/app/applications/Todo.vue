<template>
  <div class="disable-text-selection">
    <b-row class="app-row survey-app">
      <b-colxx xxs="12">
        <div class="mb-2">
          <h1>{{ $t('menu.todo') }}</h1>
          <div class="top-right-button-container">
            <b-button
              v-b-modal.modalright
              variant="primary"
              size="lg"
              class="top-right-button"
            >{{ $t('todo.add-new') }}</b-button>
            <b-button-group v-if="isLoad">
              <b-dropdown
                split
                right
                @click="selectAll(true)"
                class="check-button"
                variant="primary"
              >
                <label
                  class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
                  slot="button-content"
                >
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    :checked="isSelectedAll()"
                    v-shortkey="{select: ['ctrl','a'], undo: ['ctrl','d']}"
                    @shortkey="keymap"
                  />
                  <span
                    :class="{
                      'custom-control-label' :true,
                      'indeterminate' : isAnyItemSelected()
                    }"
                  >&nbsp;</span>
                </label>
                <b-dropdown-item>{{$t('todo.action')}}</b-dropdown-item>
                <b-dropdown-item>{{$t('todo.another-action')}}</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
          <todo-add-new-modal :categories="categories" :labels="labels" :statuses="statuses"></todo-add-new-modal>
          <piaf-breadcrumb />
        </div>
        <div class="mb-2">
          <b-button
            variant="empty"
            class="pt-0 pl-0 d-inline-block d-md-none"
            v-b-toggle.displayOptions
          >
            {{ $t('todo.display-options') }}
            <i class="simple-icon-arrow-down align-middle" />
          </b-button>
          <b-collapse id="displayOptions" class="d-md-block">
            <div class="d-block d-md-inline-block pt-1">
              <b-dropdown
                id="ddown1"
                :text="`${$t('todo.orderby')} ${sort.label}`"
                variant="outline-dark"
                class="mr-1 float-md-left btn-group"
                size="xs"
              >
                <b-dropdown-item
                  v-for="(order,index) in sortOptions"
                  :key="`order${index}`"
                  @click="changeOrderBy(order)"
                >{{ order.label }}</b-dropdown-item>
              </b-dropdown>
              <div class="search-sm d-inline-block float-md-left mr-1 align-top">
                <b-input :placeholder="$t('menu.search')" v-model="search" />
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="separator mb-5" />

        <b-row v-if="isLoad" key="itemList">
          <b-colxx xxs="12" v-for="(item,index) in items" :key="`item${index}`">
            <todo-list-item
              :key="item.id"
              :data="item"
              :selected-items="selectedItems"
              @toggle-item="toggleItem"
              v-contextmenu:contextmenu
            />
          </b-colxx>
        </b-row>
        <div v-else class="loading" key="itemLoading"></div>
      </b-colxx>
    </b-row>
    <v-contextmenu ref="contextmenu" @contextmenu="handleContextmenu">
      <v-contextmenu-item @click="onContextCopy()">
        <i class="simple-icon-docs" />
        <span>Copy</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextArchive()">
        <i class="simple-icon-drawer" />
        <span>Move to archive</span>
      </v-contextmenu-item>
      <v-contextmenu-item @click="onContextDelete()">
        <i class="simple-icon-trash" />
        <span>Delete</span>
      </v-contextmenu-item>
    </v-contextmenu>

    <todo-application-menu v-if="isLoad" :items="items" :categories="categories" :labels="labels"></todo-application-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import TodoListItem from "../../../components/TodoApp/TodoListItem";
import ApplicationMenu from "../../../components/Common/ApplicationMenu";
import TodoApplicationMenu from "../../../containers/applications/TodoApplicationMenu";
import TodoAddNewModal from "../../../containers/applications/TodoAddNewModal";

export default {
  components: {
    "todo-list-item": TodoListItem,
    "todo-application-menu": TodoApplicationMenu,
    "todo-add-new-modal": TodoAddNewModal
  },
  data() {
    return {
      sort: {
        column: "title",
        label: "Title"
      },
      sortOptions: [
        {
          column: "title",
          label: "Title"
        },
        {
          column: "category",
          label: "Category"
        },
        {
          column: "label",
          label: "Label"
        },
        {
          column: "status",
          label: "Status"
        }
      ],
      search: "",
      selectedItems: [],
      categories: [
        {
          label: "Flexbox",
          value: "Flexbox"
        },
        {
          label: "Sass",
          value: "Sass"
        },
        {
          label: "Vue",
          value: "Vue"
        },
        {
          label: "React",
          value: "React"
        }
      ],
      labels: [
        {
          label: "EDUCATION",
          value: "EDUCATION",
          color: "secondary"
        },
        {
          label: "NEW FRAMEWORK",
          value: "NEW FRAMEWORK",
          color: "primary"
        },
        {
          label: "PERSONAL",
          value: "PERSONAL",
          color: "info"
        }
      ],
      statuses: [
        {
          text: "PENDING",
          value: "PENDING"
        },
        {
          text: "COMPLETED",
          value: "COMPLETED"
        }
      ],
      newItem: {
        title: "",
        category: "",
        detail: "",
        label: "",
        status: ""
      }
    };
  },
  computed: {
    ...mapGetters(["isLoad", "items", "todoError"])
  },
  methods: {
    ...mapActions(["getTodoItems"]),
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) {
          this.selectedItems = [];
        }
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
        } else {
          this.selectedItems.push(itemId);
        }
      }
    },
    handleContextmenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextCopy() {
      console.log(
        "context menu item clicked - Copy Items: ",
        this.selectedItems
      );
    },
    onContextArchive() {
      console.log(
        "context menu item clicked - Move to Archive Items: ",
        this.selectedItems
      );
    },
    onContextDelete() {
      console.log(
        "context menu item clicked - Delete Items: ",
        this.selectedItems
      );
    }
  },

  mounted() {
    this.getTodoItems();
    document.body.classList.add("right-menu");
  },
  beforeDestroy() {
    document.body.classList.remove("right-menu");
  }
};
</script>
