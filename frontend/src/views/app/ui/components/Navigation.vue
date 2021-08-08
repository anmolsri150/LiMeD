<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.navigation')"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.basic')">
          <b-nav>
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.horizontal-alignment')">
          <b-nav class="justify-content-center">
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>

          <b-nav class="justify-content-end">
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.vertical-alignment')">
          <b-nav vertical class="w-25">
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.pills')">
          <b-nav pills>
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.fill-justify')">
          <b-nav fill pills>
            <b-nav-item active>{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.longer-link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.pills-dropdowns')">
          <b-nav pills>
            <b-nav-item active class="mr-1">{{ $t('nav.active') }}</b-nav-item>
            <b-nav-item-dropdown
              :text="$t('nav.dropdown')"
              extra-toggle-classes="nav-link-custom"
              right
            >
              <b-dropdown-header>{{ $t('nav.header') }}</b-dropdown-header>
              <b-dropdown-item disabled>{{ $t('nav.action') }}</b-dropdown-item>
              <b-dropdown-item>{{ $t('nav.another-action') }}</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>{{ $t('nav.another-action') }}</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item>{{ $t('nav.link') }}</b-nav-item>
            <b-nav-item>{{ $t('nav.another-link') }}</b-nav-item>
            <b-nav-item disabled>{{ $t('nav.disabled') }}</b-nav-item>
          </b-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.pagination-basic')">
          <b-pagination-nav
            :number-of-pages="3"
            :link-gen="linkGen"
            v-model="currentPage"
            :per-page="5"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.pagination-sizing')">
          <h6 class="mb-3">{{ $t('nav.large') }}</h6>
          <b-pagination-nav
            size="lg"
            :number-of-pages="3"
            :link-gen="linkGen"
            v-model="currentPage"
            :per-page="5"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination-nav>
          <h6 class="mb-3">{{ $t('nav.small') }}</h6>
          <b-pagination-nav
            size="sm"
            :number-of-pages="3"
            :link-gen="linkGen"
            v-model="currentPage"
            :per-page="5"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.pagination-alignment')">
          <h6 class="mb-3">{{ $t('nav.center') }}</h6>
          <b-pagination-nav
            size="sm"
            align="center"
            :number-of-pages="3"
            :link-gen="linkGen"
            v-model="currentPage"
            :per-page="5"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination-nav>
          <h6 class="mb-3">{{ $t('nav.right') }}</h6>
          <b-pagination-nav
            size="sm"
            align="right"
            :number-of-pages="3"
            :link-gen="linkGen"
            v-model="currentPage"
            :per-page="5"
          >
           <template v-slot:next-text>
              <i class="simple-icon-arrow-right"/>
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left"/>
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start"/>
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end"/>
            </template>
          </b-pagination-nav>
        </b-card>
      </b-colxx>

      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('nav.breadcrumb-basic')">
          <b-breadcrumb :items="breadcrumbItems.slice(0,1)"/>
          <b-breadcrumb :items="breadcrumbItems.slice(0,2)"/>
          <b-breadcrumb :items="breadcrumbItems"/>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      breadcrumbItems: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Library',
          href: '#'
        },
        {
          text: 'Data',
          href: '#'
        }
      ]
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>
