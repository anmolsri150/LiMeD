<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>{{ userProfile.name }}</h1>
      <piaf-breadcrumb />
      <b-row>
        <b-colxx xxs="12" class="mb-5">
          <b-card>
            <single-lightbox
              thumb="/assets/img/hospital.jpg"
              large="/assets/img/hospital.jpg"
              class-name="social-header card-img"
            />
          </b-card>
        </b-colxx>
        <b-colxx xxs="12" class="mb-5">
          <b-card class="mb-4" no-body>
            <b-card-body>
              <div class="text-center pt-4">
                <p class="list-item-heading pt-2"> {{ userProfile.name }}</p>
              </div>
              <p
                class="mb-3"
              >A health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</p>
              <p class="text-muted text-small mb-2">{{$t('pages.location')}}</p>
              <p class="mb-3">{{ userProfile.streetAddress }}</p>
              <p class="text-muted text-small mb-2">{{$t('menu.contact')}}: Phone</p>
              <p class="mb-3">
                <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>{{ userProfile.contact }}</b-badge>
              </p>
            </b-card-body>
          </b-card>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>

<script>
import RecentPost from "../../../../components/Common/RecentPost";
import UserCardBasic from "../../../../components/Cards/UserCardBasic";
import UserFollow from "../../../../containers/pages/UserFollow";
import SingleLightbox from "../../../../containers/pages/SingleLightbox";
import GalleryDetail from "../../../../containers/pages/GalleryDetail";
import GalleryProfile from "../../../../containers/pages/GalleryProfile";
import Post from "../../../../containers/pages/Post";

import produtcs from "../../../../data/products";
import recentPosts from "../../../../data/recentPosts";
import followers from "../../../../data/follow";
import posts from "../../../../data/posts";
import {mapGetters} from "vuex";
export default {
  components: {
    "single-lightbox": SingleLightbox,
    "gallery-detail": GalleryDetail,
    "gallery-profile": GalleryProfile,
    "user-follow": UserFollow,
    "recent-post": RecentPost,
    "user-card-basic": UserCardBasic,
    post: Post
  },
  computed: {
    ...mapGetters(["currentUser", "userType", "userProfile"])
  },
  mounted() {
    if (this.userType && this.userType === 'patient') {
      this.$router.push('/app/profile/patient')
    }
  },
  data() {
    return {
      produtcs: produtcs.slice(0, 15),
      recentPosts,
      followers: followers.slice(0, 5),
      friends: followers.slice(0),
      posts
    };
  },
  methods: {}
};
</script>
