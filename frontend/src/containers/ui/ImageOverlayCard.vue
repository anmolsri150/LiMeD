<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.image-overlay-card') }}</h5>
      <b-row>
        <b-colxx xxs="12" xs="6" lg="3" class="mb-3">
          <b-card class="mb-4 text-white" no-body>
            <img src="/assets/img/cards/thumb-1.jpg" class="card-img" />
            <div class="card-img-overlay">
              <h5 class="card-title">Fruitcake</h5>
              <p
                class="card-text"
              >This is a wider card with supporting text below as a natural lead-in to additional content.</p>
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
