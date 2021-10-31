<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.blog-detail')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>

    <b-row>
        <b-colxx xxs="12" md="12" xl="8" class="col-left">
            <b-card class="mb-4" no-body>
                <single-lightbox thumb="/assets/img/details/5.jpg" large="/assets/img/details/5.jpg" class-name="responsive border-0 card-img-top mb-3" />
                <b-card-body>
                    <div class="mb-5">
                        <h5 class="card-title">Game Changing Features</h5>
                        <p>
                            Blended value human-centered social innovation resist scale and impact issueoutcomesbandwidth efficient. A; social return on investment, change-makers, support a,co-createcommitment because sustainable. Rubric when vibrant black lives matter benefitcorporation human-centered. Save the world, problem-solvers support silo massincarceration. Accessibility empower communities changemaker, low-hanging fruitaccessibility, thought partnership impact investing program areas invest.Contextualizeoptimism unprecedented challenge, empower inclusive. Living a fully ethical life theresistance segmentation social intrapreneurship efficient inspire external partners.Systems thinking correlation, social impact; when revolutionary bandwidth. Engaging,revolutionary engaging; empower communities policymaker shared unit of analysistechnology inspiring social entrepreneurship.
                        </p>
                        <p>
                            Mass incarceration, preliminary thinking systems thinking vibrant thought leadershipcorporate social responsibility. Green space global, policymaker; shared valuedisruptsegmentation social capital. Thought partnership, optimism citizen-centeredcommitment,relief scale and impact the empower communities circular. Contextualize boots on theground; uplift big data, co-creation co-create segmentation youth inspire. Innovateinnovate overcome injustice.
                        </p>
                    </div>
                    <div class="mb-5">
                        <h5 class="card-title">Unprecedented Challenge</h5>
                        <ul class="list-unstyled">
                            <li>Preliminary thinking systems</li>
                            <li>Bandwidth efficient</li>
                            <li>Green space</li>
                            <li>Social impact</li>
                            <li>Thought partnership</li>
                            <li>Fully ethical life</li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="card-title">Revolutionary Bandwidth</h5>
                        <p>
                            Blended value human-centered social innovation resist scale and impact issueoutcomes bandwidth efficient. A; social return on investment, change-makers, supporta, co-create commitment because sustainable. Rubric when vibrant black lives matterbenefit corporation human-centered. Save the world, problem-solvers support silomass incarceration. Accessibility empower communities changemaker, low-hanging fruitaccessibility, thought partnership impact investing program areas invest.Contextualize optimism unprecedented challenge, empower inclusive. Living a fullyethical life the resistance segmentation social intrapreneurship efficient inspireexternal partners. Systems thinking correlation, social impact; when revolutionarybandwidth. Engaging, revolutionary engaging; empower communities policymaker sharedunit of analysis technology inspiring social entrepreneurship.Mass incarceration,preliminary thinking systems thinking vibrant thought leadership corporate socialresponsibility. Green space global, policymaker; shared value disrupt segmentationsocial capital. Thought partnership, optimism citizen-centered commitment, reliefscale and impact the empower communities circular. Contextualize boots on theground; uplift big data, co-creation co-create segmentation youth inspire. Innovateinnovate overcome injustice.
                        </p>
                        <p>
                            Systems thinking correlation, social impact; when revolutionary bandwidth. Engaging,revolutionary engaging; empower communities policymaker shared unit of analysistechnology inspiring social entrepreneurship. Thought partnership, optimismcitizen-centeredcommitment,relief scale and impact the empower communities circular. Contextualize boots on theground; uplift big data, co-creation co-create segmentation youth inspire. Innovateinnovate overcome injustice.
                        </p>
                    </div>
                </b-card-body>
            </b-card>
        </b-colxx>

        <b-colxx xxs="12" md="12" xl="4" class="col-left">
            <b-card class="mb-4" no-body>
                <b-card-body class="p-0">
                        <video-player class-name="video-js side-bar-video card-img-top"
                        :autoplay="false" :controls="true"
                        :controlBar="{pictureInPictureToggle: false}"
                        poster="/assets/img/video/poster.jpg"
                        :sources="[{ src: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4', type: 'video/mp4'}]" />
                </b-card-body>
                <b-card-body>
                    <p class="list-item-heading mb-4">Homemade Cheesecake with Fresh Berries and Mint</p>
                    <footer>
                        <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                    </footer>
                </b-card-body>
            </b-card>
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <b-card-title>{{$t('pages.recent-posts')}} </b-card-title>
                    <div class="remove-last-border remove-last-margin remove-last-padding">
                        <recent-post v-for="(post,postIndex) in recentPosts" :data="post" :key="`recent_post_${postIndex}`" />
                    </div>
                </b-card-body>
            </b-card>
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <b-card-title>{{$t('todo.categories')}} </b-card-title>
                    <div v-for="(categoryItem,cIndex) in blogCategories" :key="`category_${cIndex}`" class="d-flex flex-row align-items-center mb-3">
                        <router-link :to="categoryItem.link">
                            <i :class="`large-icon initial-height ${categoryItem.icon}`"></i>
                        </router-link>
                        <div class="pl-3 pt-2 pr-2 pb-2">
                            <router-link :to="categoryItem.link">
                                <p class="list-item-heading mb-1">{{categoryItem.title}}</p>
                            </router-link>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import SingleLightbox from "../../../../containers/pages/SingleLightbox";
import VideoPlayer from "../../../../components/Common/VideoPlayer";
import RecentPost from "../../../../components/Common/RecentPost";
import {
    blogData,
    blogCategories
} from "../../../../data/blog"

export default {
    components: {
        "single-lightbox": SingleLightbox,
        "video-player":VideoPlayer,
        "recent-post": RecentPost,
    },
    data() {
        return {
            recentPosts: blogData.slice(5),
            blogCategories
        };
    },
    methods: {},
    mounted() {}
};
</script>
