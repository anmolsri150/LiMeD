<template>
<div>
    <div class="glide details" ref="carouselImages">
        <div data-glide-el="track" class="glide__track">
            <div class="glide__slides">
                <div v-for="(item,index) in settingsImages.data" :key="`glide_${index}`">
                    <div class="glide__slide">
                        <img alt="detail" :src="item.img" class="responsive border-0 border-radius img-fluid mb-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="glide thumbs" ref="carouselThumbs">
        <div data-glide-el="track" class="glide__track">
            <div class="glide__slides">
                <div v-for="(item,index) in settingsThumbs.data" :key="`thumb_${item.id}`" :class='index===activeIndex ? "glide__slide active" : "glide__slide"' @click="onThumbClick(index)">
                    <img alt="detail" :src="item.img" class="responsive border-0 border-radius img-fluid" />
                </div>
            </div>
        </div>
        <div v-if="renderArrows" class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="simple-icon-arrow-left"></i></button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="simple-icon-arrow-right"></i></button>
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
        settingsImages: Object,
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
        settingsThumbs: Object,
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
            total: this.settingsImages.data.length,
            activeIndex: 0,
            thumbsPerView: Math.min(this.settingsThumbs.perView, this.settingsImages.data.length),
            renderArrows: true,
            resizeTimeOut: -1,
            mountTimeOut: -1,
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
    created() {
        let thumbBreakpoints = this.settingsThumbs.breakpoints;
        let newBreakpoints = {};
        for (var prop in thumbBreakpoints) {
            newBreakpoints[prop] = {
                "perView": Math.min(thumbBreakpoints[prop]["perView"], this.total)
            }

        }
        this.settingsThumbs.breakpoints = newBreakpoints;
    },
    mounted() {
        this.glideCarouselImages = new Glide(this.$refs.carouselImages, {
            ...this.settingsImages,
            direction: getDirection().direction
        });
        this.glideCarouselImages.mount();

        this.glideCarouselThumbs = new Glide(this.$refs.carouselThumbs, {
            ...this.settingsThumbs,
            direction: getDirection().direction
        });
        this.glideCarouselThumbs.mount();

        this.glideCarouselThumbs.on("resize", this.thumbsResize);
        this.glideCarouselImages.on("swipe.end", this.imagesSwipeEnd);

        this.mountTimeOut = setTimeout(() => {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("resize", false, false);
            window.dispatchEvent(event);
            this.glideCarouselImages.on("resize", this.onResize);
        }, 500);
    },
    beforeDestroy() {
        clearTimeout(this.resizeTimeOut);
        clearTimeout(this.mountTimeOut);
        this.glideCarouselImages.destroy();
        this.glideCarouselThumbs.destroy();
    },
    methods: {
        onThumbClick(index) {
            this.activeIndex = index;
            this.glideCarouselImages.go("=" + index);
        },

        thumbsResize() {
            let perView = Math.min(this.settingsThumbs.perView, this.settingsImages.data.length);
            this.thumbsPerView = perView;
            if (this.total <= perView) {
                this.renderArrows = false;
            }
        },
        imagesSwipeEnd() {
            let gap = this.glideCarouselThumbs.index + this.thumbsPerView;
            this.activeIndex = this.glideCarouselImages.index;
            if (this.activeIndex >= gap) {
                this.glideCarouselThumbs.go(">");
            }
            if (this.activeIndex < this.glideCarouselThumbs.index) {
                this.glideCarouselThumbs.go("<");
            }
        },
        onResize() {
            clearTimeout(this.resizeTimeOut);
            this.resizeTimeOut = setTimeout(() => {
                this.glideCarouselImages.update();
                this.glideCarouselThumbs.update();
                this.resizeTimeOut = -1;
            }, 500);
        },
    }

}
</script>
