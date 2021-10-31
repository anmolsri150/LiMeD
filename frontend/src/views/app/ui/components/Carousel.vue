<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.carousel')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <h5 class="mb-4 card-title">{{ $t('carousel.basic') }}</h5>
        </b-colxx>
        <b-colxx xxs="12" class="mb-4 pl-0 pr-0">
            <glide-component :settings="glideBasicOption">
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <div class="w-50 position-relative">
                            <img class="card-img-left" src="/assets/img/cards/thumb-1.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                        </div>
                        <div class="w-50">
                            <b-card-body>
                                <h6 class="mb-4 card-subtitle">Cheesecake with Fresh Berries and Mint</h6>
                                <p class="card-text text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <div class="w-50 position-relative">
                            <img class="card-img-left" src="/assets/img/cards/thumb-2.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">DONE</b-badge>
                        </div>
                        <div class="w-50">
                            <b-card-body>
                                <h6 class="mb-4 card-subtitle">Wedding Cake with Flowers Macarons and Blueberries</h6>
                                <p class="card-text text-muted text-small mb-0 font-weight-light">01.06.2022</p>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <div class="w-50 position-relative">
                            <img class="card-img-left" src="/assets/img/cards/thumb-3.jpg" alt="Card cap" />
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left">PROCESSED</b-badge>
                        </div>
                        <div class="w-50">
                            <b-card-body>
                                <h6 class="mb-4 card-subtitle">Cheesecake with Chocolate Cookies and Cream Biscuits</h6>
                                <p class="card-text text-muted text-small mb-0 font-weight-light">27.05.2022</p>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <div class="w-50 position-relative">
                            <img class="card-img-left" src="/assets/img/cards/thumb-1.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                        </div>
                        <div class="w-50">
                            <b-card-body>
                                <h6 class="mb-4 card-subtitle">Cheesecake with Chocolate Cookies and Cream Biscuits</h6>
                                <p class="card-text text-muted text-small mb-0 font-weight-light">19.10.2022</p>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <div class="w-50 position-relative">
                            <img class="card-img-left" src="/assets/img/cards/thumb-3.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                        </div>
                        <div class="w-50">
                            <b-card-body>
                                <h6 class="mb-4 card-subtitle">Cheesecake with Fresh Berries and Mint</h6>
                                <p class="card-text text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
            </glide-component>
        </b-colxx>
        <b-colxx xxs="12">
            <h5 class="mb-4 card-title">{{ $t('carousel.single') }}</h5>
        </b-colxx>
        <b-colxx xxs="12" class="mb-4 pl-0 pr-0">
            <glide-component :settings="glideSingleOption">
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <img alt="Thumbnail" src="/assets/img/carousels/thumb-3.jpg" class="list-thumbnail responsive border-0" />
                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                            <b-card-body class="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <p class="list-item-heading mb-1 truncate">Cheesecake with Chocolate Cookies and Cream Biscuits</p>
                                <p class="mb-0 text-muted text-small">Cupcakes</p>
                                <p class="mb-0 text-muted text-small">09.11.2022</p>
                                <div>
                                    <b-badge variant="primary" pill class="mr-1">NEW</b-badge>
                                    <b-badge variant="secondary" pill class="mr-1">ON HOLD</b-badge>
                                </div>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card class="flex-row" no-body>
                        <img alt="Thumbnail" src="/assets/img/carousels/thumb-2.jpg" class="list-thumbnail responsive border-0" />
                        <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                            <b-card-body class="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <p class="list-item-heading mb-1 truncate">Cheesecake with Fresh Berries and Mint</p>
                                <p class="mb-0 text-muted text-small">Cupcakes</p>
                                <p class="mb-0 text-muted text-small">09.04.2022</p>
                                <div>
                                    <b-badge variant="primary" pill class="mr-1">NEW</b-badge>
                                    <b-badge variant="secondary" pill class="mr-1">ON HOLD</b-badge>
                                </div>
                            </b-card-body>
                        </div>
                    </b-card>
                </div>
            </glide-component>
        </b-colxx>
        <b-colxx xxs="12">
            <h5 class="mb-4 card-title">{{ $t('carousel.without-controls') }}</h5>
        </b-colxx>
        <b-colxx xxs="12" class="mb-4 pl-0 pr-0">
            <glide-component :settings="glideNoControlsSettings">
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" src="/assets/img/cards/thumb-1.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
                        </div>
                        <b-card-body>
                            <h6 class="mb-4">Cheesecake with Fresh Berries and Mint</h6>
                            <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                        </b-card-body>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" src="/assets/img/cards/thumb-2.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
                        </div>
                        <b-card-body>
                            <h6 class="mb-4">Homemade Cheesecake with Fresh Berries and Mint</h6>
                            <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                        </b-card-body>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" src="/assets/img/cards/thumb-3.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
                        </div>
                        <b-card-body>
                            <h6 class="mb-4">Wedding Cake with Flowers Macarons and Blueberries</h6>
                            <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                        </b-card-body>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" src="/assets/img/cards/thumb-4.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
                        </div>
                        <b-card-body>
                            <h6 class="mb-4">Cheesecake with Chocolate Cookies and Cream Biscuits</h6>
                            <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                        </b-card-body>
                    </b-card>
                </div>
                <div class="pr-3 pl-3 mb-4 glide__slide">
                    <b-card no-body>
                        <div class="position-relative">
                            <img class="card-img-top" src="/assets/img/cards/thumb-2.jpg" alt="Card cap" />
                            <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
                            <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
                        </div>
                        <b-card-body>
                            <h6 class="mb-4">Wedding Cake with Flowers Macarons and Blueberries</h6>
                            <p class="text-muted text-small mb-0 font-weight-light">09.04.2022</p>
                        </b-card-body>
                    </b-card>
                </div>
            </glide-component>

        </b-colxx>
    </b-row>
</div>
</template>

<script>
import GlideComponent from '../../../../components/Carousel/GlideComponent'

export default {
    components: {
        'glide-component': GlideComponent,
    },
    data() {
        return {
            glideBasicOption: {
                gap: 5,
                perView: 3,
                type: "carousel",
                breakpoints: {
                    600: {
                        perView: 1
                    },
                    1400: {
                        perView: 2
                    }
                }
            },
            glideSingleOption: {
                gap: 5,
                perView: 1,
                type: "carousel"
            },
            glideNoControlsSettings: {
                gap: 5,
                perView: 4,
                type: "carousel",
                breakpoints: {
                    480: {
                        perView: 1
                    },
                    800: {
                        perView: 2
                    },
                    1200: {
                        perView: 3
                    }
                },
                hideNav: true
            },

        }
    }
}
</script>
