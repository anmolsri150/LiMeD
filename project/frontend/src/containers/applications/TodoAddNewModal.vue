<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('todo.add-new-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group :label="$t('todo.title')">
        <b-form-input v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('todo.detail')">
        <b-textarea v-model="newItem.detail" :rows="2" :max-rows="2" />
      </b-form-group>
      <b-form-group :label="$t('todo.category')">
        <v-select :options="categories" v-model="newItem.category" />
      </b-form-group>
      <b-form-group :label="$t('todo.label')">
        <v-select :options="labels" v-model="newItem.label" />
      </b-form-group>
      <b-form-group :label="$t('todo.status')">
        <b-form-radio-group stacked class="pt-2" :options="statuses" v-model="newItem.status" />
      </b-form-group>
    </b-form>
    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')">{{ $t('todo.cancel') }}</b-button>
      <b-button variant="primary" @click="addItem()" class="mr-1">{{ $t('todo.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { mapMutations } from "vuex";

const TodoAddNewModal = {
  components: {
    "v-select": vSelect
  },
  props: ["categories", "labels", "statuses"],
  data() {
    return {
      newItem: { title: "", category: "", detail: "", label: "", status: "" }
    };
  },
  methods: {
    ...mapMutations(["addTodoItem"]),
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    addItem() {
      const date = new Date();
      this.addTodoItem({
        title: this.newItem.title,
        detail: this.newItem.detail,
        category: this.newItem.category.value,
        label: this.newItem.label.value,
        status: this.newItem.status,
        date:
          date.getDay() + "." + date.getMonth() + 1 + "." + date.getFullYear(),
        labelColor: this.newItem.label.color
      });
      this.newItem = {
        title: "",
        category: "",
        detail: "",
        label: "",
        status: ""
      };
      this.hideModal("modalright");
    }
  }
};
export default TodoAddNewModal;
</script>
