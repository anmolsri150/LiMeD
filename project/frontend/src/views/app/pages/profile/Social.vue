<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>Sarah Kortney</h1>
      <div class="top-right-button-container">
        <b-dropdown
          id="ddown5"
          :text="$t('pages.actions')"
          size="lg"
          variant="outline-primary"
          class="top-right-button top-right-button-single"
          no-fade="true"
        >
          <b-dropdown-item>{{ $t('dashboards.last-week') }}</b-dropdown-item>
          <b-dropdown-item>{{ $t('dashboards.this-month') }}</b-dropdown-item>
        </b-dropdown>
      </div>
      <piaf-breadcrumb />
      <b-tabs nav-class="separator-tabs ml-0 mb-5" content-class="tab-content" :no-fade="true">
        <b-tab :title="$t('pages.profile')">
          <b-row>
            <b-colxx xxs="12" class="mb-5">
              <b-card>
                <single-lightbox
                  thumb="/assets/img/social/header.jpg"
                  large="/assets/img/social/header.jpg"
                  class-name="social-header card-img"
                />
              </b-card>
            </b-colxx>
            <b-colxx xxs="12" lg="5" xl="4" class="col-left">
              <single-lightbox
                thumb="/assets/img/profiles/l-1.jpg"
                large="/assets/img/profiles/1.jpg"
                class-name="img-thumbnail card-img social-profile-img"
              />
              <b-card class="mb-4" no-body>
                <b-card-body>
                  <div class="text-center pt-4">
                    <p class="list-item-heading pt-2">Sarah Cortney</p>
                  </div>
                  <p
                    class="mb-3"
                  >I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.</p>
                  <p class="text-muted text-small mb-2">{{$t('pages.location')}}</p>
                  <p class="mb-3">Nairobi, Kenya</p>
                  <p class="text-muted text-small mb-2">{{$t('pages.responsibilities')}}</p>
                  <p class="mb-3">
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>FRONTEND</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>JAVASCRIPT</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>SECURITY</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>DESIGN</b-badge>
                  </p>
                  <p class="text-muted text-small mb-2">{{$t('menu.contact')}}</p>
                  <div class="social-icons">
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">
                        <router-link to="#">
                          <i class="simple-icon-social-facebook"></i>
                        </router-link>
                      </li>
                      <li class="list-inline-item">
                        <router-link to="#">
                          <i class="simple-icon-social-twitter"></i>
                        </router-link>
                      </li>
                      <li class="list-inline-item">
                        <router-link to="#">
                          <i class="simple-icon-social-instagram"></i>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </b-card-body>
              </b-card>

              <b-card class="mb-4" no-body>
                <b-card-body>
                  <b-card-title>{{$t('pages.similar-projects')}}</b-card-title>
                  <gallery-detail />
                </b-card-body>
              </b-card>

              <b-card class="mb-4" no-body>
                <b-card-body>
                  <b-card-title>{{$t('pages.who-to-follow')}}</b-card-title>
                  <div class="remove-last-border remove-last-margin remove-last-padding">
                    <user-follow
                      v-for="(friend, fIndex) in followers"
                      :data="friend"
                      :key="`frind_${fIndex}`"
                    />
                  </div>
                </b-card-body>
              </b-card>

              <b-card class="mb-4" no-body>
                <b-card-body>
                  <b-card-title>{{$t('pages.recent-posts')}}</b-card-title>
                  <div class="remove-last-border remove-last-margin remove-last-padding">
                    <recent-post
                      v-for="(post,postIndex) in recentPosts"
                      :data="post"
                      :key="`recent_post_${postIndex}`"
                    />
                  </div>
                </b-card-body>
              </b-card>
            </b-colxx>
            <b-colxx xxs="12" lg="7" xl="8" class="col-right">
              <post
                v-for="(post,postIndex) in posts"
                :data="post"
                :key="`post_${postIndex}`"
                class="mb-4"
              />
            </b-colxx>
          </b-row>
        </b-tab>

        <b-tab :title="$t('pages.images')">
          <gallery-profile />
        </b-tab>

        <b-tab :title="$t('pages.friends')">
          <b-row>
            <b-colxx
              v-for="(follower,followerIndex) in friends"
              xxs="12"
              md="6"
              lg="4"
              :key="`follower_${followerIndex}`"
            >
              <user-card-basic :data="follower" />
            </b-colxx>
          </b-row>
        </b-tab>
      </b-tabs>
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
  data() {
    return {
      produtcs: produtcs.slice(0, 15),
      recentPosts,
      followers: followers.slice(0, 5),
      friends: followers.slice(0),
      posts
    };
  },
  methods: {},
  mounted() {}
};
</script>
