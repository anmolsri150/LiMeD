<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="`${$t('menu.search')} : ${keyword}`"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" >
           <div v-for="(item,index) in items" :key="index" :class="{'mb-3':items.length!=(index+1)}">
             <router-link tag="a" :to="`#${item.id}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-1 color-theme-1">{{item.title}}</p>
                <p class="mb-1 text-muted text-small">{{item.category}} | {{item.title}}</p>
                <p class="mb-4 text-small">{{ item.description }}</p>
             </router-link>
             <div class="separator mb-5" v-if="items.length!=(index+1)"></div>
           </div>
        </b-card>
    </b-colxx>
    <b-colxx xxs="12" class="mt-3 ">
      <b-pagination-nav class="justify-content-center pagination" :number-of-pages="totalPage" :link-gen="linkGen" v-model="currentPage" :per-page="5" align="center">
          <template v-slot:next-text>
              <i class="simple-icon-arrow-right" />
          </template>
          <template v-slot:prev-text>
              <i class="simple-icon-arrow-left" />
          </template>
          <template v-slot:first-text>
              <i class="simple-icon-control-start" />
          </template>
          <template v-slot:last-text>
              <i class="simple-icon-control-end" />
          </template>
      </b-pagination-nav>
    </b-colxx>

  </b-row>
  </div>
</template>
<script>
import items from '../../../../data/products'
export default {
  data () {
    return {
      keyword: 'Cake',
      currentPage: 1,
      totalPage: 4,
      items
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page-' + pageNum
    }
  }
}
</script>
