<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.image-card') }}</h5>
      <b-row>
        <b-colxx xxs="12" xs="6" lg="4">
          <b-card class="mb-4" no-body>
            <div class="position-relative">
              <img src="/assets/img/cards/thumb-1.jpg" class="card-img-top" />
              <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
              <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
            </div>
            <b-card-body>
              <h6 class="mb-4 card-subtitle">Homemade Cheesecake with Fresh Berries and Mint</h6>
              <p class="card-text text-muted text-small mb-0 font-weight-light">09.04.2022</p>
            </b-card-body>
          </b-card>
        </b-colxx>
        <b-colxx xxs="12" xs="6" lg="4" class="mb-3">
          <b-card class="mb-4" no-body>
            <b-card-body>
              <h6 class="mb-4 card-subtitle">Homemade Cheesecake with Fresh Berries and Mint</h6>
              <p class="card-text text-muted text-small mb-0 font-weight-light">09.04.2022</p>
            </b-card-body>
            <div class="position-relative">
              <img src="/assets/img/cards/thumb-1.jpg" class="card-img-bottom" />
              <b-badge variant="primary" pill class="position-absolute badge-top-left">NEW</b-badge>
              <b-badge variant="secondary" pill class="position-absolute badge-top-left-2">TRENDING</b-badge>
            </div>
          </b-card>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>
<script>
export default {

}
</script>
