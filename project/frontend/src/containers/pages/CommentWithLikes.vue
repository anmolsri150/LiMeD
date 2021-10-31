<template>
  <div :class="`d-flex flex-row mb-3 border-bottom justify-content-between ${className}`">
    <router-link to=" #">
      <img
        :src="data.thumb"
        alt="data.name"
        class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
      />
    </router-link>
    <div class="pl-3 flex-grow-1">
      <router-link to="#">
        <p class="font-weight-medium mb-0">{{data.name}}</p>
        <p class="text-muted mb-0 text-small">{{data.data}}</p>
      </router-link>
      <p class="mt-3">{{data.detail}}</p>
    </div>
    <div class="comment-likes">
      <span class="post-icon">
        <router-link to="#">
          <span v-if="data.likes > 0">{{data.likes}} {{$t('pages.like')}}</span>
          <i class="simple-icon-heart ml-2"></i>
        </router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["className", "data"]
};
</script>
