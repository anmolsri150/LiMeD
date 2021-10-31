<template>
  <div class="d-flex flex-row mb-3">
    <router-link class="d-block position-relative" to="#">
      <img :src="data.thumb" alt="thumbnail" class="list-thumbnail border-0"/>
      <b-badge v-if="data.badge" variant="primary" pill class="position-absolute badge-top-left">{{data.badge}}
      </b-badge>
    </router-link>
    <div class="pl-3 pt-2 pr-2 pb-2">
      <router-link class="d-block position-relative" to="#">
        <p class="list-item-heading">{{data.title}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default {
        props: ['data'],
    }
</script>
