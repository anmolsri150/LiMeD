<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.types')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12">
            <b-button class="mb-1" variant="outline-primary" @click="changeDefaultMenuType('menu-default')">{{ $t('menu.default') }}</b-button>
            <b-button class="mb-1" variant="outline-primary" @click="changeDefaultMenuType('menu-sub-hidden')">{{ $t('menu.subhidden') }}</b-button>
            <b-button class="mb-1" variant="outline-primary" @click="changeDefaultMenuType('menu-hidden')">{{ $t('menu.hidden') }}</b-button>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import {
    mapGetters,
    mapMutations
} from 'vuex'
import {
    menuHiddenBreakpoint,
    subHiddenBreakpoint
} from '../../../constants/config'
import menuItems from '../../../constants/menu'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            selectedMenuHasSubItems: 'getSelectedMenuHasSubItems'
        })
    },
    methods: {
        ...mapMutations(['changeSideMenuStatus']),
        changeDefaultMenuType(containerClassnames) {
            let nextClasses = this.getMenuClassesForResize(containerClassnames)
            this.changeSideMenuStatus({
                step: 0,
                classNames: nextClasses.join(' '),
                selectedMenuHasSubItems: this.selectedMenuHasSubItems
            })
        },
        getMenuClassesForResize(classes) {
            let nextClasses = classes.split(' ').filter(x => x !== '')
            const windowWidth = window.innerWidth

            if (windowWidth < menuHiddenBreakpoint) {
                nextClasses.push('menu-mobile')
            } else if (windowWidth < subHiddenBreakpoint) {
                nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
                if (
                    nextClasses.includes('menu-default') &&
                    !nextClasses.includes('menu-sub-hidden')
                ) {
                    nextClasses.push('menu-sub-hidden')
                }
            } else {
                nextClasses = nextClasses.filter(x => x !== 'menu-mobile')
                if (
                    nextClasses.includes('menu-default') &&
                    nextClasses.includes('menu-sub-hidden')
                ) {
                    nextClasses = nextClasses.filter(x => x !== 'menu-sub-hidden')
                }
            }
            return nextClasses
        },
    }
}
</script>
