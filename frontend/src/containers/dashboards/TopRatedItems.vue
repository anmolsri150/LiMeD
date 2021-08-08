<template>
  <b-card class="dashboard-top-rated" :title="$t('dashboards.top-rated-items')">
    <glide-component :settings="glideTopRatedOption">
      <top-rated-slide-item
        image="/assets/img/carousels/1.jpg"
        order="1"
        title="Cheesecake"
        rate="5"
        rate-count="48"
      />
      <top-rated-slide-item
        image="/assets/img/carousels/2.jpg"
        order="2"
        title="Chocolate Cake"
        rate="4"
        rate-count="24"
      />
      <top-rated-slide-item
        image="/assets/img/carousels/3.jpg"
        order="3"
        title="Cremeschnitte"
        rate="4"
        rate-count="18"
      />
    </glide-component>
  </b-card>
</template>
<script>
import GlideComponent from "../../components/Carousel/GlideComponent";
import TopRatedSlideItem from "../../components/Listing/TopRatedSlideItem";

export default {
  components: {
    "glide-component": GlideComponent,
    "top-rated-slide-item": TopRatedSlideItem
  },
  data() {
    return {
      glideTopRatedOption: {
        gap: 5,
        perView: 1,
        type: "carousel",
        peek: {
          before: 0,
          after: 100
        },
        breakpoints: {
          480: {
            perView: 1
          },
          992: {
            perView: 2
          },
          1200: {
            perView: 1
          }
        },
        hideNav: true
      }
    };
  }
};
</script>
