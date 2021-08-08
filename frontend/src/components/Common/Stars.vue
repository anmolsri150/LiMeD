<template>
<div class="piaf-rater" key="1">
    <div class="piaf-rater-star " v-for="(r,index) in ratings" :key="index" @click="set(r)" @mouseover="star_over(r)" @mouseout="star_out" :class="{ 'is-active': ((value >= r) && value != null), 'is-disabled': disabled, 'will-be-active':(onMouseOver && tempValue>=r)?true:false }"></div>
</div>
</template>

<script>
export default {
    name: 'Stars',
    props: ['value', 'disabled'],
    data() {
        return {
            tempValue: null,
            ratings: [1, 2, 3, 4, 5],
            onMouseOver: false
        }
    },
    methods: {
        star_over: function (rate) {
            if (!this.disabled) {
                this.tempValue = rate
                this.onMouseOver = true
            }
        },
        star_out: function () {
            this.onMouseOver = false
        },

        set: function (value) {
            if (!this.disabled) {
                this.tempValue = value
                this.$emit('input', this.tempValue)
            }
        }
    }
}
</script>
