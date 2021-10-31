<template>
  <b-card no-body class="d-flex flex-row mb-4">
    <router-link :to="link || '#'" class="d-flex">
      <ThumbnailImage rounded small :src="data.thumb" alt="profile" class-name="m-4"/>
    </router-link>
    <div class=" d-flex flex-grow-1 min-width-zero">
      <b-card-body
        class=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
        <div class="min-width-zero">
          <router-link :to="link || '#'">
            <b-card-sub-title class="truncate mb-1">{{data.name}}</b-card-sub-title>
          </router-link>
          <b-card-text class="text-muted text-small mb-2">{{data.status}}</b-card-text>
        </div>
      </b-card-body>
    </div>
  </b-card>
</template>
<script>
    import ThumbnailImage from "./ThumbnailImage";
    export default {
        props: ['link', 'data'],
        components: {
            ThumbnailImage
        }
    }
</script>
