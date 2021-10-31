<template>
    <b-card @click="toggleItem($event,data.id)" :class="{'d-flex mb-3':true,'active' : selectedItems.includes(data.id)}" no-body>
        <div class="d-flex flex-grow-1 min-width-zero">
            <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center pb-2">
                <router-link tag="a" :to="`${adminRoot}/applications/survey/${data.id}`" class="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1" >
                  <i :class="{'heading-icon':true,
                              'simple-icon-check' :data.status === 'COMPLETED',
                              'simple-icon-refresh' : data.status !== 'COMPLETED'
                          }"/>
                  <span class="align-middle d-inline-block">{{data.title}}</span>
                </router-link>
                <p class="mb-1 text-muted text-small w-15 w-xs-100">{{data.category}}</p>
                <p class="mb-1 text-muted text-small w-15 w-xs-100">{{data.date}}</p>
                <div class="w-15 w-xs-100"><b-badge :variant="data.labelColor" pill>{{data.label}}</b-badge></div>
            </b-card-body>
            <div class="custom-control custom-checkbox pl-1 align-self-center mr-4 pt-sm-4 custom-control custom-checkbox pl-1 align-self-md-center align-self-start pt-4">
                <b-form-checkbox :checked="selectedItems.includes(data.id)" class="itemCheck mb-0"/>
            </div>
        </div>
        <div class="card-body pt-1"><p class="mb-0" v-html="data.detail"></p></div>
    </b-card>
</template>

<script>
import { adminRoot } from '../../constants/config'
export default {
  props: ['data', 'selectedItems'],
  data(){
    return{
      adminRoot
    }
  },
  methods: {
    toggleItem (event, itemId) {
      
      this.$emit('toggle-item', event, itemId)
    }
  }
}
</script>
