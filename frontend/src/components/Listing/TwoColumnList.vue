<template>
<div class="d-flex flex-row">
    <div class="w-50">
        <ul class="list-unstyled mb-0">
            <li v-for="(item,index) in data.slice(0,data.length/2)" :key="index" class="mb-1">
                <router-link tag="a" :to="item.link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
    <div class="w-50">
        <ul class="list-unstyled mb-0">
            <li v-for="(item,index) in data.slice(data.length/2,data.length)" :key="index" class="mb-1">
                <router-link tag="a" :to="item.link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['data']
}
</script>
