<template>
<b-card no-body>
    <b-card-body class="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
        <div class="price-top-part">
            <i :class="`large-icon ${data.icon}`"></i>
            <h5 class=" mb-0 font-weight-semibold color-theme-1 mb-4">{{data.title}}</h5>
            <p class="text-large mb-2 text-default">{{data.price}}</p>
            <p class="text-muted text-small">{{data.detail}}</p>
        </div>
        <div class="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
            <ul class="list-unstyled">
                <li v-for="(feature,fIndex) in data.features" :key="`feature_${fIndex}`">
                    <p class="mb-0">{{feature}}</p>
                </li>
            </ul>
            <div class="text-center">
                <router-link :to="data.link" class="btn btn-link btn-empty btn-lg">
                    {{$t('pages.purchase')}} <i class="simple-icon-arrow-right"></i>
                </router-link>
            </div>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
export default {
    props: ['data']
}
</script>
