<template>
<b-card class="progress-banner" no-body>
    <b-card-body class="justify-content-between d-flex flex-row align-items-center">
        <div>
            <i :class="`${icon} mr-2 text-white align-text-bottom d-inline-block`" />
            <div>
                <p class="lead text-white">{{ title }}</p>
                <p class="text-small text-white">{{ detail }}</p>
            </div>
        </div>
        <div class="progress-bar-circle progress-bar-banner position-relative">
            <radial-progress-bar :diameter="diameter" :strokeWidth="strokeWidth" :completed-steps="percent" :total-steps=100>{{progressText}}</radial-progress-bar>
        </div>
    </b-card-body>
</b-card>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
export default {
    components: {
        'radial-progress-bar': RadialProgressBar
    },
    props: ['icon', 'title', 'detail', 'percent', 'progressText'],
    data() {
        return {
            diameterDefault: 125,
            strokeWidthDefault: 5,
            diameter: this.diameterDefault,
            strokeWidth: this.strokeWidthDefault
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleWindowResize)
        this.handleWindowResize()
    },
    methods: {
        handleWindowResize(event) {
            if (event && !event.isTrusted) {
                return
            }
            const windowWidth = window.innerWidth
            if (windowWidth <= 1200) {
                this.diameter = 84
                this.strokeWidth = 2
            } else {
                this.diameter = this.diameterDefault
                this.strokeWidth = this.strokeWidthDefault
            }
        }
    }
}
</script>
