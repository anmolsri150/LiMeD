<template>
  <div class="d-flex flex-row mb-3 pb-3 border-bottom justify-content-between align-items-center">
    <single-lightbox
      :thumb="data.thumb"
      :large="data.large"
      class-name="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
    />
    <div class="pl-3 flex-fill">
      <router-link to="#">
	<p class="font-weight-medium mb-0">{{data.name}}</p>
	<p class="text-muted mb-0 text-small">{{data.status}}</p>
      </router-link>
    </div>
    <div>
      <b-button variant="outline-primary" size="xs" href="#">{{$t('pages.follow')}}</b-button>
    </div>
  </div>
</template>

<script>
import SingleLightbox from "./SingleLightbox";
export default {
  props: ["data"],
  components: {
    "single-lightbox": SingleLightbox
  }
};
</script>
