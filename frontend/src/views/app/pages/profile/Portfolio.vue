<template>
<b-row>
    <b-colxx xxs="12">
        <h1>Sarah Kortney</h1>
        <div class="top-right-button-container">
            <b-dropdown id="ddown5" :text="$t('pages.actions')" size="lg" variant="outline-primary" class="top-right-button top-right-button-single" no-fade="true">
                <b-dropdown-item>{{ $t('dashboards.last-week') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dashboards.this-month') }}</b-dropdown-item>
            </b-dropdown>
        </div>
        <piaf-breadcrumb />
        <b-tabs nav-class="separator-tabs ml-0 mb-5" content-class="tab-content" :no-fade="true">
            <b-tab :title="$t('pages.details')">
                <b-row>
                    <b-colxx xxs="12" lg="4" class="mb-4 col-left">
                        <b-card no-body class="mb-4">
                            <div class="position-absolute card-top-buttons">
                                <b-button variant="outline-white" class="icon-button">
                                    <i class="simple-icon-pencil" />
                                </b-button>
                            </div>
                            <single-lightbox thumb="/assets/img/profiles/1.jpg" large="/assets/img/profiles/1.jpg" class-name="card-img-top" />
                            <b-card-body>
                                <p class="text-muted text-small mb-2">{{$t('menu.about')}}</p>
                                <p class="mb-3">
                                    I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS,
                                    and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless
                                    information through a few hundred RSS feeds. I build websites that delight and inform. I do it
                                    well.
                                </p>
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
                                            <router-link to="#"><i class="simple-icon-social-facebook"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-twitter"></i></router-link>
                                        </li>
                                        <li class="list-inline-item">
                                            <router-link to="#"><i class="simple-icon-social-instagram"></i></router-link>
                                        </li>
                                    </ul>
                                </div>
                            </b-card-body>
                        </b-card>
                        <b-card no-body class="mb-4">
                            <b-card-body>
                                <b-card-title>{{$t('pages.recent-posts')}}</b-card-title>
                                <div class="remove-last-border remove-last-margin remove-last-padding">
                                    <recent-post v-for="(post,postIndex) in recentPosts" :data="post" :key="`recent_post_${postIndex}`" />
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-colxx>

                    <b-colxx xxs="12" lg="8" class="mb-4 col-right">
                        <b-row>
                            <b-colxx v-for="(product,productIndex) in produtcs" xxs="12" lg="6" xl="4" class="mb-4" :key="`product_${productIndex}`">
                                <b-card no-body>
                                    <div class="position-relative">
                                        <router-link to="#" class="w-40 w-sm-100">
                                            <b-card-img top :alt="product.title" :src="product.img" />
                                        </router-link>
                                    </div>
                                    <b-card-body>
                                        <router-link to="#" class="w-40 w-sm-100">
                                            <b-card-sub-title>{{product.title}}</b-card-sub-title>
                                        </router-link>
                                        <b-card-text class="text-muted text-small mb-0 font-weight-light">
                                            {{product.createDate}}
                                        </b-card-text>
                                    </b-card-body>
                                </b-card>
                            </b-colxx>
                        </b-row>
                    </b-colxx>
                </b-row>
            </b-tab>

            <b-tab :title="$t('pages.followers')">
                <b-row>
                    <b-colxx v-for="(follower,followerIndex) in followers" xxs="12" md="6" lg="4" :key="`follower_${followerIndex}`">
                        <user-card-basic :data="follower" />
                    </b-colxx>
                </b-row>
            </b-tab>
        </b-tabs>

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
    methods: {},
    mounted() {

    }
}
</script>
