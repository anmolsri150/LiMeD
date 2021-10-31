<template>
<div class="d-flex flex-row mb-3 pb-3 border-bottom">
    <router-link tag="a" :to="detailPath">
        <img :src="data.thumb" :alt="data.title" class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
    </router-link>
    <div class="pl-3 pr-2">
        <router-link tag="a" :to="detailPath">
            <p class="font-weight-medium mb-0 ">{{ data.title }}</p>
            <p class="text-muted mb-0 text-small">{{ data.detail }}</p>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    props: ['data', 'detailPath']
}
</script>
