<template>
<div>
    <div class="glide" ref="carouselImages">
        <div data-glide-el="track" class="glide__track">
            <div class="glide__slides">
                <slot></slot>
            </div>
        </div>
        <div v-if="!settings.hideNav" class="glide__arrows slider-nav" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left left-arrow btn btn-link" data-glide-dir="<">
                <i class="simple-icon-arrow-left"></i>
            </button>

            <div class="glide__bullets slider-dot-container" data-glide-el="controls[nav]">
               <button v-for="i in total" class="glide__bullet slider-dot" :key="i" :data-glide-dir="`=${i}`"></button>
            </div>
            <button class="glide__arrow glide__arrow--right right-arrow btn btn-link" data-glide-dir=">">
                <i class="simple-icon-arrow-right"></i>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

import Glide from '@glidejs/glide'
import "@glidejs/glide/dist/css/glide.core.min.css";

import {
    getDirection
} from '../../utils';

export default {
    props: {
        settings: Object,
        // {
        //     type: String,
        //     startAt: Number,
        //     perView: Number,
        //     focusAt: Number,
        //     gap: Number,
        //     autoplay: Boolean,
        //     hoverpause: Boolean,
        //     keyboard: Boolean,
        //     bound: Boolean,
        //     swipeThreshold: [Number, Boolean],
        //     dragThreshold: [Number, Boolean],
        //     perTouch: [Number, Boolean],
        //     touchRatio: Number,
        //     touchAngle: Number,
        //     animationDuration: Number,
        //     rewind: Boolean,
        //     rewindDuration: Number,
        //     animationTimingFunc: String,
        //     direction: String,
        //     peek: Object,
        //     breakpoints: Object,
        //     classes: Object,
        //     throttle: Number,
        //     data: Array,
        // },
        id: String,
        className: String
    },
    data() {
        return {
            total: 0,
            mountTimeOut: -1,
            resizeTimeOut: -1,
            selfWidth: 0
        }
    },
    computed: {
        ...mapGetters({
            menuType: 'getMenuType',
        })
    },
    watch: {
        menuType: function (val) {
            this.onResize();
        },
    },
    mounted() {
        this.initGlide();
    },
    updated() {
        this.destroyGlide();
        this.initGlide();
    },
    beforeDestroy() {
        this.destroyGlide();
    },
    methods: {
        initGlide() {
          this.selfWidth = this.$el.offsetWidth;
            this.glideCarousel = new Glide(this.$refs.carouselImages, {
                ...this.settings,
                direction: getDirection().direction
            });
            this.glideCarousel.mount();
            this.total = this.glideCarousel._c.Html.slides.length;
            this.glideCarousel.on("resize", this.onResize);
            this.mountTimeOut = setTimeout(() => {
                var event = document.createEvent("HTMLEvents");
                event.initEvent("resize", false, false);
                window.dispatchEvent(event);
            }, 500);
        },
        destroyGlide() {
            clearTimeout(this.resizeTimeOut);
            clearTimeout(this.mountTimeOut);
            if (this.glideCarousel) {
                this.glideCarousel.destroy();
            }
        },
        onResize() {
            clearTimeout(this.resizeTimeOut);
            this.selfWidth = this.$el.offsetWidth;
            this.resizeTimeOut = setTimeout(() => {
              if (this.$el.offsetWidth !== this.selfWidth) {
                this.glideCarousel.update();
              }
                this.resizeTimeOut = -1;
            }, 500);
        }
    }
}
</script>
