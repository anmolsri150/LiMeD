<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.badges')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">

    <b-card class="mb-4" :title="$t('badge.sizes')">
        <h1>Example Heading <b-badge variant="secondary">New</b-badge></h1>
        <h2>Example Heading <b-badge variant="secondary">New</b-badge></h2>
        <h3>Example Heading <b-badge variant="secondary">New</b-badge></h3>
        <h4>Example Heading <b-badge variant="secondary">New</b-badge></h4>
        <h5>Example Heading <b-badge variant="secondary">New</b-badge></h5>
        <h6>Example Heading <b-badge variant="secondary">New</b-badge></h6>
    </b-card>

    <b-card class="mb-4" :title="$t('badge.colors')">
        <b-badge class="mb-1" pill variant="primary">{{ $t('badge.primary') }}</b-badge>
        <b-badge class="mb-1" pill variant="secondary">{{ $t('badge.secondary') }}</b-badge>
        <b-badge class="mb-1" pill variant="success">{{ $t('badge.success') }}</b-badge>
        <b-badge class="mb-1" pill variant="danger">{{ $t('badge.danger') }}</b-badge>
        <b-badge class="mb-1" pill variant="warning">{{ $t('badge.warning') }}</b-badge>
        <b-badge class="mb-1" pill variant="info">{{ $t('badge.info') }}</b-badge>
        <b-badge class="mb-1" pill variant="light">{{ $t('badge.light') }}</b-badge>
        <b-badge class="mb-1" pill variant="dark">{{ $t('badge.dark') }}</b-badge>
    </b-card>

    <b-card class="mb-4" :title="$t('badge.outline')">
        <b-badge class="mb-1" pill variant="outline-primary">{{ $t('badge.primary') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-secondary">{{ $t('badge.secondary') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-success">{{ $t('badge.success') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-danger">{{ $t('badge.danger') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-warning">{{ $t('badge.warning') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-info">{{ $t('badge.info') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-light">{{ $t('badge.light') }}</b-badge>
        <b-badge class="mb-1" pill variant="outline-dark">{{ $t('badge.dark') }}</b-badge>
    </b-card>

     <b-card class="mb-4" :title="$t('badge.links')">
        <b-badge class="mb-1" href="#" variant="primary">{{ $t('badge.primary') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="secondary">{{ $t('badge.secondary') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="success">{{ $t('badge.success') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="danger">{{ $t('badge.danger') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="warning">{{ $t('badge.warning') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="info">{{ $t('badge.info') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="light">{{ $t('badge.light') }}</b-badge>
        <b-badge class="mb-1" href="#" variant="dark">{{ $t('badge.dark') }}</b-badge>
    </b-card>

    <b-card class="mb-4" :title="$t('badge.counter-badges')">
        <b-button variant="primary">
            Notifications <b-badge variant="light">4</b-badge>
        </b-button>
        <b-button variant="outline-primary">
            Notifications <b-badge variant="secondary">4</b-badge>
        </b-button>
    </b-card>

    <b-card class="mb-4" :title="$t('badge.bootstrap-default')">
        <b-badge class="mb-1" variant="primary">{{ $t('badge.primary') }}</b-badge>
        <b-badge class="mb-1" variant="secondary">{{ $t('badge.secondary') }}</b-badge>
        <b-badge class="mb-1" variant="success">{{ $t('badge.success') }}</b-badge>
        <b-badge class="mb-1" variant="danger">{{ $t('badge.danger') }}</b-badge>
        <b-badge class="mb-1" variant="warning">{{ $t('badge.warning') }}</b-badge>
        <b-badge class="mb-1" variant="info">{{ $t('badge.info') }}</b-badge>
        <b-badge class="mb-1" variant="light">{{ $t('badge.light') }}</b-badge>
        <b-badge class="mb-1" variant="dark">{{ $t('badge.dark') }}</b-badge>
    </b-card>

    </b-colxx>
  </b-row>
  </div>
</template>
