<template>
<div class="pr-2 pl-2">
    <img :src="image" :alt="title" class="mb-4" />
    <h6 class="mb-1"><span class="mr-2">{{ order }}.</span>{{ title }}</h6>
    <stars :value="rate" :disabled=true />
    <p class="text-small text-muted mb-0 d-inline-block">({{ rateCount }})</p>
</div>
</template>

<script>
import Stars from '../Common/Stars'

export default {
    props: ['image', 'order', 'title', 'rate', 'rateCount'],
    components: {
        'stars': Stars
    }
}
</script>
