<template>
<b-card no-body>
    <b-card-header class="p-0 position-relative" v-if="noSuffle!=false">
        <div class="position-absolute handle card-icon">
            <i class="simple-icon-shuffle" />
        </div>
    </b-card-header>
    <b-card-body class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0 card-title">{{ title }}</h5>
        <div class="progress-bar-circle">
            <radial-progress-bar :diameter="54" :strokeWidth="2" :completed-steps="percent" :total-steps=100>{{percent}}%</radial-progress-bar>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    props: ['title', 'percent', 'noSuffle'],
    components: {
        'radial-progress-bar' : RadialProgressBar
    }
}
</script>
