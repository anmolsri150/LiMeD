<template>
  <b-card :class="className" no-body>
    <b-card-body>
      <div class="d-flex flex-row mb-3">
        <router-link to="#">
          <img
            :src="data.profilePic"
            alt="thumbnail"
            class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
          />
        </router-link>
        <div class="pl-3">
          <router-link to="#">
            <p class="font-weight-medium mb-0">{{data.name}}</p>
            <p class="text-muted mb-0 text-small">{{data.date}}</p>
          </router-link>
        </div>
      </div>
      <p>{{data.detail}}</p>
      <single-lightbox
        v-if="data.type === 'image'"
        :thumb="data.image"
        :large="data.image"
        class-name="img-fluid border-0 border-radius mb-3"
      />
      <video-player
        v-else-if="data.type === 'video'"
        :autoplay="false"
        :controls="true"
        class-name="video-js card-img video-content mb-3"
        :poster="data.image"
        :sources="[{src: data.video, type: 'video/mp4'}]"
      />
      <div class="mb-3">
        <div class="post-icon mr-3 d-inline-block">
          <router-link to="#">
            <i class="simple-icon-heart mr-1"></i>
          </router-link>
          <span>12 {{$t('pages.likes')}}</span>
        </div>
        <div class="post-icon mr-3 d-inline-block">
          <router-link to="#">
            <i class="simple-icon-bubble mr-1"></i>
          </router-link>
          <span>6 {{$t('pages.comments-title')}}</span>
        </div>
      </div>

      <div class="mt-5 remove-last-border">
        <comment-with-likes
          v-for="(comment,commentIndex) in data.comments"
          :data="comment"
          :key="`comment_${commentIndex}`"
        />
      </div>
      <b-input-group class="comment-contaiener">
        <b-input :placeholder="$t('pages.addComment')" />
        <template v-slot:append>
          <b-button variant="primary">
            <span class="d-inline-block">{{$t('pages.send')}}</span>
            <i class="simple-icon-arrow-right ml-2"></i>
          </b-button>
        </template>
      </b-input-group>
    </b-card-body>
  </b-card>
</template>

<script>
import SingleLightbox from "./SingleLightbox";
import CommentWithLikes from "./CommentWithLikes";
import VideoPlayer from "../../components/Common/VideoPlayer";

export default {
  props: ["class-name", "data"],
  components: {
    "single-lightbox": SingleLightbox,
    "comment-with-likes": CommentWithLikes,
    "video-player": VideoPlayer
  }
};
</script>
