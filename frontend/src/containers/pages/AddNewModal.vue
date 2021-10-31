<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group label="Name">
        <b-form-input v-model="newItem.title" />
      </b-form-group>
      <b-form-group :label="$t('pages.category')">
        <v-select :options="categories" v-model="newItem.category" @change="updateCategory" />
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea v-model="newItem.description" :rows="2" :max-rows="2" />
      </b-form-group>
      <b-form-group :label="$t('pages.status')">
        <b-form-radio-group stacked class="pt-2" :options="statuses" v-model="newItem.status" />
      </b-form-group>
      <b-form-group label="Image">
        <b-form-file
          v-model="newItem.file"
          :state="Boolean(newItem.file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button
        variant="outline-secondary"
        @click="hideModal('modalright')"
      >{{ $t('pages.cancel') }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{ $t('pages.submit') }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import fs from 'fs';
import { NFTStorage, File , Blob} from 'nft.storage';
import {mapGetters} from "vuex";
export default {
  components: {
    "v-select": vSelect
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    })
  },
  props: ["categories", "statuses", "uid"],
  data() {
    return {
      newItem: {
        title: "",
        category: "",
        description: "",
        status: "",
        file: null
      }
    };
  },
  methods: {
    updateCategory(dat) {
      console.log(dat)
    },
    async addNewItem() {
      const token = process.env.VUE_APP_API_KEY
      const storage = new NFTStorage({ token })
      console.log("adding item : ", this.newItem);
      const metadata = await storage.store(
        {
          name: this.newItem.title,
          description:
            this.newItem.description,
          image: this.newItem.file,
          properties: {
            user: this.currentUser.uid,
            category: this.newItem.category,
            status: this.newItem.status,
          }
        })
      console.log(metadata)
      console.log('IPFS URL for the metadata:', metadata.url)
      const result = await window.contract.methods.addRecord(this.uid, this.newItem.title, this.newItem.category, '2021-01-01', metadata.url, this.newItem.description, this.newItem.status).send({
        from: this.currentUser.uid
      }).then(() => {
        return true
      }).catch((err) => {
        console.log(err.message)
        alert("Patient doesn't exists!")
        return false
      });
      console.log(result)
      if (result) {
        this.$emit('added', true)
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>

