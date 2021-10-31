<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.jumbotron')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" >
            <b-jumbotron :header="$t('jumbotron.hello-world')" :lead="$t('jumbotron.lead')" header-level="4">
                <hr class="my-4">
                <p>{{$t('jumbotron.lead-detail')}}</p>
                <p class="lead mb-0">
                    <b-button variant="primary" size="lg">{{$t('jumbotron.learn-more')}}</b-button>
                  </p>
            </b-jumbotron>
        </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>
