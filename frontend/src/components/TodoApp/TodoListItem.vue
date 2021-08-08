<template>
    <b-card @click.prevent="toggleItem($event,data.id)" :class="{'d-flex mb-3':true,'active' : selectedItems.includes(data.id)}" no-body>
        <div class="d-flex flex-grow-1 min-width-zero">
            <b-card-body class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center pb-2">
                <a href="#" class="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1" @click.prevent="">
                    <i :class="{'heading-icon':true,
                                'simple-icon-check' :data.status === 'COMPLETED',
                                'simple-icon-refresh' : data.status !== 'COMPLETED'
                            }"/>
                    <span class="align-middle d-inline-block">{{data.title}}</span>
                </a>
                <p class="mb-1 text-muted text-small w-15 w-xs-100">{{data.category}}</p>
                <p class="mb-1 text-muted text-small w-15 w-xs-100">{{data.date}}</p>
                <div class="w-15 w-xs-100"><b-badge :variant="data.labelColor" pill>{{data.label}}</b-badge></div>
            </b-card-body>
            <div class="custom-control custom-checkbox pl-1 align-self-md-center align-self-start mr-4 pt-4">
                <b-form-checkbox :checked="selectedItems.includes(data.id)" class="itemCheck mb-0"/>
            </div>
        </div>
        <div class="card-body pt-1"><p class="mb-0" v-html="data.detail"></p></div>
    </b-card>
</template>

<script>
export default {
  props: ['data', 'selectedItems'],
  methods: {
    toggleItem (event, itemId) {
      this.$emit('toggle-item', event, itemId)
    }
  }
}
</script>
