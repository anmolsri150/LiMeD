<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.knowledge-base')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row class="equal-height-container">
        <b-colxx md="12" xl="6" class="mb-4 col-item" v-for="(item,index) in knowledgeBaseData" :key="`knowledgeBase_${index}`">
            <b-card>
                <div class="text-center">
                    <i :class="`${item.icon} large-icon`"></i>
                    <h5 class="mb-0 font-weight-semibold color-theme-1 mb-4">{{item.title}}</h5>
                </div>
                <div class="pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1">
                    <p class="text-muted mb-4">{{item.detail}}</p>
                    <ul class="list-unstyled mb-0">
                        <li v-for="(subitem,subIndex) in item.subtitles" :key="`knowledgeBaseSub_${subIndex}`">
                            <router-link :to="subitem.link" class="btn-link">{{subitem.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import knowledgeBaseData from "../../../../data/knowledgebase"

export default {
    data() {
        return {
            knowledgeBaseData
        }
    }
}
</script>
