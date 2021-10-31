<template>
<b-row>
    <b-colxx xxs="12">
        <h1>{{ userProfile._name }}</h1>
        <piaf-breadcrumb />
      <b-card no-body class="mb-4">
        <div class="position-absolute card-top-buttons">
          <b-button variant="outline-white" class="icon-button">
            <i class="simple-icon-pencil" />
          </b-button>
        </div>
        <single-lightbox thumb="/assets/img/profiles/1.jpg" large="/assets/img/profiles/1.jpg" class-name="card-img-top" />
        <b-card-body>
          <p class="text-muted text-small mb-2">Gender:</p>
          <p class="mb-3">{{ userProfile._name }}</p>
          <p class="text-muted text-small mb-2">DOB:</p>
          <p class="mb-3">{{ userProfile._dob }}</p>
          <p class="text-muted text-small mb-2">Blood Group:</p>
          <p class="mb-3">
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>{{ userProfile._bloodgroup }}</b-badge>
          </p>
          <p class="text-muted text-small mb-2">{{$t('menu.contact')}}: Phone</p>
          <p class="mb-3">
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>{{ userProfile._phone }}</b-badge>
          </p>
        </b-card-body>
      </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import SingleLightbox from '../../../../containers/pages/SingleLightbox';
import RecentPost from '../../../../components/Common/RecentPost';
import UserCardBasic from "../../../../components/Cards/UserCardBasic";

import produtcs from '../../../../data/products'
import recentPosts from "../../../../data/recentPosts";
import followers from "../../../../data/follow";
import {mapGetters} from "vuex";

export default {
    components: {
        'single-lightbox': SingleLightbox,
        'recent-post': RecentPost,
        'user-card-basic': UserCardBasic,
    },
    data() {
        return {
            produtcs: produtcs.slice(0, 15),
            recentPosts,
            followers
        }
    },
    computed: {
      ...mapGetters(["currentUser", "userType", "userProfile"])
    },
    mounted() {
      if (this.userType && this.userType === 'hospital') {
        this.$router.push('/app/profile/hospital')
      }
    },
    methods: {},
}
</script>
