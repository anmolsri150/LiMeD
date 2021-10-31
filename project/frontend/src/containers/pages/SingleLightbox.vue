<template>
  <div>
    <router-link to="#" @click.native.prevent="onThumbClick(0)">
      <img :src="thumb" alt="thumbnail" :class="className" />
    </router-link>
    <LightGallery
      :images="[large]"
      :index="photoIndex"
      :disable-scroll="true"
      @close="handleHide()"
    />
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  props: ["thumb", "large", "className"],
  components: {
    LightGallery
  },
  data() {
    return {
      photoIndex: null
    };
  },
  methods: {
    onThumbClick(index) {
      this.photoIndex = index;
    },
    handleHide() {
      this.photoIndex = null;
    }
  }
};
</script>
