<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <h1>Magdalena Cake</h1>
            <div class="top-right-button-container">
                <b-dropdown id="ddown5" :text="$t('pages.actions')" size="lg" variant="outline-primary" class="top-right-button top-right-button-single" no-fade="true">
                    <b-dropdown-header>{{ $t('pages.header') }}</b-dropdown-header>
                    <b-dropdown-item>{{ $t('pages.delete') }}</b-dropdown-item>
                    <b-dropdown-item>{{ $t('pages.another-action') }}</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item>{{ $t('pages.another-action') }}</b-dropdown-item>
                </b-dropdown>
            </div>
            <piaf-breadcrumb />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" xl="8" class="col-left">
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <glide-component-thumbs :settingsImages="{ bound: true, rewind: false, focusAt: 0, startAt: 0, gap: 5, perView: 1, data: detailImages}" :settingsThumbs="{ bbound: true, rewind: false, focusAt: 0, startAt: 0, gap: 10, perView: 5, data: detailThumbs, breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } } }" />
                </b-card-body>
            </b-card>

            <b-card class="mb-4" no-body>
                <b-tabs card no-fade>
                    <b-tab :title="$t('pages.details-title')" active>
                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <p class="font-weight-bold">Augue Vitae Commodo</p>
                                    <p>
                                        Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius. <br />
                                        <br />
                                        Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus.
                                    </p>
                                    <br />
                                    <p class="font-weight-bold">Phasellus Efficitur</p>
                                    <p>
                                        Tellus a sem condimentum, vitae convallis sapien feugiat.Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectusa est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallismaximus. Curabitur maximus, ligula vel sagittis iaculis, risus nisi tinciduntsem, ut ultricies libero nulla eu ligula. Nam ultricies mollis nulla, sedlaoreet leo convallis ac. Mauris nisl risus, tincidunt ac diam aliquet,convallis pellentesque nisi. Nam sit amet libero at odio malesuada ultricies avitae dolor. Cras in viverra felis, non consequat quam. Praesent a orci enim.Vivamus porttitor nisi at nisl egestas iaculis. Nullam commodo eget duisollicitudin sagittis. Duis id nibh mollis, hendrerit metus consectetur,ullamcorper risus. Morbi elementum ultrices nunc, quis porta nisi ornare sitamet.
                                        <br />
                                        <br />
                                        Etiam tincidunt orci in nisi aliquam placerat. Aliquam finibus in sem utvehicula. Morbi eget consectetur leo. Quisque consectetur lectus eros, sedsodales libero ornare cursus. Etiam elementum ut dolor eget hendrerit.Suspendisse eu lacus eu eros lacinia feugiat sit amet non purus.
                                        <br />
                                        <br />
                                        Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallis enim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, eget auctor sapien varius.
                                    </p>
                                    <br />
                                    <p class="font-weight-bold">Elementum Ultrices</p>
                                    <b-table borderless :items="tableItems" />
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                    <b-tab :title="`${$t('pages.comments-title')} (19)`">

                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <comment-with-likes v-for="(item,index) in commentWithLikesData" :data="item" :key="`comment_${index}`"></comment-with-likes>

                                    <b-input-group class="comment-contaiener">
                                        <b-form-input :placeholder="$t('pages.addComment')" />
                                        <b-input-group-append>
                                            <b-button variant="primary">
                                                <span class="d-inline-block">{{$t('pages.send')}}</span> <i class="simple-icon-arrow-right ml-2"></i>
                                            </b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                    <b-tab :title="`${$t('pages.questions-title')} (6)`">
                        <b-row>
                            <b-colxx sm="12">
                                <b-card-text>
                                    <question-answer v-for="(item,index) in detailsQuestionsData" :data="item" :key="`question_${index}`"></question-answer>
                                </b-card-text>
                            </b-colxx>
                        </b-row>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-colxx>
        <b-colxx xxs="12" xl="4" class="col-right">
            <b-card class="mb-4">
                <div class="mb-3">
                    <div class="post-icon mr-3 d-inline-block">
                        <router-link to="#">
                            <i class="simple-icon-heart mr-1"></i>
                        </router-link>
                        <span>4 {{$t('pages.likes')}}</span>
                    </div>

                    <div class="post-icon mr-3 d-inline-block">
                        <router-link to="#">
                            <i class="simple-icon-bubble mr-1"></i>
                        </router-link>
                        <span>2 {{$t('pages.comments-title')}}</span>
                    </div>
                </div>
                <p class="mb-3">
                    Vivamus ultricies augue vitae commodo condimentum. Nullam faucibus eros eu mauris feugiat, eget consectetur tortor tempus.
                    <br /><br />
                    Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.
                    <br /><br />
                    Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh. Sed viverra quam urna, at condimentum ante viverra non. Mauris posuere erat sapien, a convallis libero lobortis sit amet. Suspendisse in orci tellus.
                </p>
                <p class="text-muted text-small mb-2">{{$t('forms.tags')}}</p>
                <p class="mb-3">
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>FRONTEND</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>JAVASCRIPT</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>SECURITY</b-badge>
                    <b-badge variant="outline-secondary" class="mb-1 mr-1" pill>DESIGN</b-badge>
                </p>
            </b-card>
            <b-card class="mb-4">
                <b-card-title>{{$t('pages.similar-projects')}}</b-card-title>
                <gallery-detail />
            </b-card>

        </b-colxx>
    </b-row>
</div>
</template>

<script>
import GlideComponentThumbs from '../../../../components/Carousel/GlideComponentThumbs'
import CommentWithLikes from '../../../../containers/pages/CommentWithLikes'
import QuestionAnswer from '../../../../containers/pages/QuestionAnswer'
import GalleryDetail from '../../../../containers/pages/GalleryDetail'

import {
    detailImages,
    detailThumbs
} from "../../../../data/carouselItems";
import {
    commentWithLikesData
} from "../../../../data/comments"
import {
    detailsQuestionsData
} from "../../../../data/questions";

export default {
    components: {
        'glide-component-thumbs': GlideComponentThumbs,
        'comment-with-likes': CommentWithLikes,
        'question-answer': QuestionAnswer,
        'gallery-detail': GalleryDetail,
    },
    data() {
        return {
            isLoad: false,
            detailImages,
            detailThumbs,
            tableItems: [{
                    id: 1,
                    first_name: 'Mark',
                    last_name: 'Otto',
                    username: '@mdo'
                },
                {
                    id: 2,
                    first_name: 'Jacob',
                    last_name: 'Thornton',
                    username: '@fat'
                },
                {
                    id: 3,
                    first_name: 'Lary',
                    last_name: 'the Bird',
                    username: '@twitter'
                }
            ],
            commentWithLikesData,
            detailsQuestionsData,
        }
    },
    methods: {

    },
    mounted() {
        setTimeout(() => {
            this.isLoad = true
        }, 50)
    }
}
</script>
