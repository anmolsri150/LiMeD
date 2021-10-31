<template>
  <b-row>
    <b-colxx xxs="12">
      <b-card class="mb-4" :title="$t('form-components.tags')">
        <b-form>
          <b-row>
            <b-colxx xxs="12">
              <input-tag v-model="tags" :placeholder="$t('form-components.tags')"></input-tag>
            </b-colxx>
          </b-row>
        </b-form>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import InputTag from "../../components/Form/InputTag";

export default {
  components: {
    "input-tag": InputTag
  },
  data() {
    return {
      tags: []
    };
  }
};
</script>
