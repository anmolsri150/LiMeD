<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.dropdowns')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('dropdowns.basic')">
            <b-dropdown id="ddown1" :text="$t('dropdowns.dropdown')" variant="outline-secondary">
                <b-dropdown-header>{{ $t('dropdowns.header') }}</b-dropdown-header>
                <b-dropdown-item disabled>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('dropdowns.split-button')">
            <b-dropdown id="ddown2" :text="$t('dropdowns.action')" split variant="secondary">
                <b-dropdown-header>{{ $t('dropdowns.header') }}</b-dropdown-header>
                <b-dropdown-item disabled>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('dropdowns.sizing')">
            <b-dropdown id="ddown3" :text="$t('dropdowns.large-button')" size="lg" variant="outline-info" class="mr-1 mb-1">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="ddown4" :text="$t('dropdowns.small-button')" size="sm" variant="outline-info" class="mr-1 mb-1">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="ddown5" :text="$t('dropdowns.small-button')" size="xs" variant="outline-info" class="mr-1 mb-1">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
        </b-card>
    </b-colxx>

    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('dropdowns.drop-directions')">
            <b-dropdown id="ddown6" :text="$t('dropdowns.dropup')" dropup  variant="secondary" class="mr-1 mb-1">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="ddown7" :text="$t('dropdowns.dropleft')" left  variant="secondary" class="mr-1 mb-1 dropleft">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="ddown8" :text="$t('dropdowns.dropright')" right  variant="secondary" class="mr-1 mb-1 dropright">
                <b-dropdown-item>{{ $t('dropdowns.action') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('dropdowns.another-action') }}</b-dropdown-item>
            </b-dropdown>

        </b-card>
    </b-colxx>

  </b-row>
  </div>
</template>
