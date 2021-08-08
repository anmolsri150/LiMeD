<template>
<div data-vjs-player>
    <video ref="myPlayer" :poster="poster" :class="`${className}`"></video>
</div>
</template>

<script>
import videojs from 'video.js'

export default {
    props: ['autoplay', 'controls', 'controlBar','poster', 'sources', 'className'],
    data() {
        return {
            player: ''
        }
    },
    mounted() {
        this.player = videojs(this.$refs.myPlayer, {
            autoplay: this.autoplay ? true : false,
            controlBar: this.controlBar ,
            controls: this.controls ? true : false,
            sources: this.sources,
        }, () => {
            // console.log("player mounted")
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
