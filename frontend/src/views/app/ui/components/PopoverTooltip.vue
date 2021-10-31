<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.popover-tooltip')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('popover-tooltip.popover')">
            <span v-for="(item,index) in popovers" :key="index" >
                <b-button :id="'pop-'+item.placement" variant="secondary" class="mr-1 mb-1">{{ item.text }}</b-button>
                <b-popover :target="'pop-'+item.placement"
                        :placement="item.placement"
                        :content="item.body">
                </b-popover>
            </span>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('popover-tooltip.tooltip')">
            <span v-for="(item,index) in tooltips" :key="index" >
                <b-button :id="'tool-'+item.placement" variant="secondary" class="mr-1 mb-1">{{ item.text }}</b-button>
                <b-tooltip :target="'tool-'+item.placement"
                        :placement="item.placement"
                        :title="item.body">
                </b-tooltip>
            </span>
        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      popovers: [
        {
          placement: 'top',
          text: 'Popover on top',
          body: 'Augue laoreet rutrum faucibus vivamus sagittis lacus vel .'
        },
        {
          placement: 'bottom',
          text: 'Popover on bottom',
          body: 'Vel augue laoreet rutrum Vivamus sagittis lacus faucibus.'
        },
        {
          placement: 'left',
          text: 'Popover on left',
          body: 'Lacus vel augue Vivamus sagittis laoreet rutrum faucibus.'
        },
        {
          placement: 'right',
          text: 'Popover on right',
          body: 'Laoreet rutrum faucibus vivamus sagittis lacus vel augue.'
        }
      ],
      tooltips: [
        {
          placement: 'top',
          text: 'Tooltip on top',
          body: 'Vivamus sagittis lacus'
        },
        {
          placement: 'bottom',
          text: 'Tooltip on bottom',
          body: 'Lacus vel augue'
        },
        {
          placement: 'left',
          text: 'Tooltip on left',
          body: 'Laoreet rutrum faucibus'
        },
        {
          placement: 'right',
          text: 'Tooltip on right',
          body: 'Augue rutrum vel'
        }
      ]
    }
  },
  mounted () {
    /* popover manuel close */
    this.$root.$on('bv::popover::show', () => {
      this.$root.$emit('bv::hide::popover')
    })
    document.addEventListener('click', e => {
      if (e.target.id.indexOf('pop') === -1) {
        this.$root.$emit('bv::hide::popover')
      }
    })
  }
}
</script>
