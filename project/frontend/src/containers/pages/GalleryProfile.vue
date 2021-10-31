<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <h5 class="mb-4">25 July 2019</h5>
      </b-colxx>
    </b-row>
    <b-row class="gallery gallery-page mb-5">
      <b-colxx
        xxs="6"
        lg="2"
        md="4"
        v-for="(thumb, thumbIndex) in thumbs1"
        :key="`thumb_${thumbIndex}`"
      >
        <img
          class="img-fluid border-radius"
          :src="thumb"
          alt="thumbnail"
          @click="onThumbClick(thumbIndex,1)"
        />
      </b-colxx>
      <LightGallery
        :images="images1"
        :index="photoIndex1"
        :disable-scroll="true"
        @close="handleHide()"
      />
    </b-row>

    <b-row>
      <b-colxx xxs="12">
        <h5 class="mb-4">14 April 2019</h5>
      </b-colxx>
    </b-row>
    <b-row class="gallery gallery-page mb-5">
      <b-colxx
        xxs="6"
        lg="3"
        md="3"
        v-for="(thumb, thumbIndex) in thumbs2"
        :key="`thumb_${thumbIndex}`"
      >
        <img
          class="img-fluid border-radius"
          :src="thumb"
          alt="thumbnail"
          @click="onThumbClick(thumbIndex,2)"
        />
      </b-colxx>
      <LightGallery
        :images="images2"
        :index="photoIndex2"
        :disable-scroll="true"
        @close="handleHide()"
      />
    </b-row>
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

const images1 = [
  "/assets/img/products/tea-loaf.jpg",
  "/assets/img/products/magdalena.jpg",
  "/assets/img/products/marble-cake.jpg",
  "/assets/img/products/parkin.jpg",
  "/assets/img/products/napoleonshat.jpg",
  "/assets/img/products/fruitcake.jpg"
];

const thumbs1 = [
  "/assets/img/products/tea-loaf-thumb.jpg",
  "/assets/img/products/magdalena-thumb.jpg",
  "/assets/img/products/marble-cake-thumb.jpg",
  "/assets/img/products/parkin-thumb.jpg",
  "/assets/img/products/napoleonshat-thumb.jpg",
  "/assets/img/products/fruitcake-thumb.jpg"
];

const images2 = [
  "/assets/img/products/fruitcake.jpg",
  "/assets/img/products/napoleonshat.jpg",
  "/assets/img/products/tea-loaf.jpg",
  "/assets/img/products/magdalena.jpg"
];

const thumbs2 = [
  "/assets/img/products/fruitcake-thumb.jpg",
  "/assets/img/products/napoleonshat-thumb.jpg",
  "/assets/img/products/tea-loaf-thumb.jpg",
  "/assets/img/products/magdalena-thumb.jpg"
];
export default {
  components: {
    LightGallery
  },
  data() {
    return {
      images1,
      thumbs1,
      images2,
      thumbs2,
      isOpen: false,
      photoIndex1: null,
      photoIndex2: null
    };
  },
  methods: {
    onThumbClick(index, galleryIndex) {
      if (galleryIndex === 1) this.photoIndex1 = index;
      if (galleryIndex === 2) this.photoIndex2 = index;

      this.isOpen = true;
    },
    handleHide() {
      this.photoIndex1 = null;
      this.photoIndex2 = null;
      this.isOpen = false;
    }
  }
};
</script>
