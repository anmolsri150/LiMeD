<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.blog-list')" />
            <div class="separator mb-5"></div>
        </b-colxx>
        <b-colxx v-for="(blogItem,blogIndex) in blogData" xxs="12" lg="6" class="mb-5" :key="`blogItem_${blogIndex}`">
            <b-card class="flex-row listing-card-container" no-body>
                <div class="w-40 position-relative">
                    <router-link to="blog-detail">
                        <img class="card-img-left" :src="blogItem.thumb" alt="Card cap" />
                        <b-badge v-if="blogItem.badge" variant="primary" pill class="position-absolute badge-top-left">{{blogItem.badge}}</b-badge>
                    </router-link>
                </div>
                <div class="w-60 d-flex align-items-center">
                    <b-card-body>
                        <router-link to="blog-detail">
                            <h5 class="mb-3 listing-heading" v-line-clamp="2">{{ blogItem.title }}</h5>
                        </router-link>
                        <p class="listing-desc text-muted" v-line-clamp="3">{{ blogItem.description }}</p>
                    </b-card-body>
                </div>
            </b-card>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-pagination-nav class="justify-content-center pagination" :number-of-pages="5" :link-gen="linkGen" v-model="currentPage" :per-page="5" align="center">
                <template v-slot:next-text>
                    <i class="simple-icon-arrow-right" />
                </template>
                <template v-slot:prev-text>
                    <i class="simple-icon-arrow-left" />
                </template>
                <template v-slot:first-text>
                    <i class="simple-icon-control-start" />
                </template>
                <template v-slot:last-text>
                    <i class="simple-icon-control-end" />
                </template>
            </b-pagination-nav>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import {
    blogData
} from "../../../../data/blog";

export default {
    data() {
        return {
            blogData,
            currentPage: 1
        };
    },
    methods: {
        linkGen(pageNum) {
            return "#page/" + pageNum + "/foobar";
        }
    }
};
</script>
