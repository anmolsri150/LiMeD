<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.image-card-list') }}</h5>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="d-flex flex-row mb-3" no-body>
            <router-link to="?" class="d-flex">
              <img
                alt="Thumbnail"
                src="/assets/img/products/chocolate-cake-thumb.jpg"
                class="list-thumbnail responsive border-0"
              />
            </router-link>
            <div class="pl-2 d-flex flex-grow-1 min-width-zero">
              <div
                class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
              >
                <router-link to="?" class="w-40 w-sm-100">
                  <p class="list-item-heading mb-1 truncate">Chocolate Cake</p>
                </router-link>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">Cakes</p>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">09.04.2022</p>
                <div class="w-15 w-sm-100">
                  <b-badge variant="primary" pill>PROCESSED</b-badge>
                </div>
              </div>
              <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                <div class="custom-control custom-checkbox mb-0">
                  <b-form-checkbox-group id="checkboxes2" name="flavour2" stacked>
                    <b-form-checkbox value="orange" />
                  </b-form-checkbox-group>
                </div>
              </div>
            </div>
          </b-card>
        </b-colxx>
        <b-colxx xxs="12" class="mb-3">
          <b-card class="d-flex flex-row mb-4" no-body>
            <router-link to="?" class="d-flex">
              <img
                alt="Thumbnail"
                src="/assets/img/products/cheesecake-thumb.jpg"
                class="list-thumbnail responsive border-0"
              />
            </router-link>
            <div class="pl-2 d-flex flex-grow-1 min-width-zero">
              <div
                class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
              >
                <router-link to="?" class="w-40 w-sm-100">
                  <p class="list-item-heading mb-1 truncate">Cheesecake</p>
                </router-link>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">Cupcakes</p>
                <p class="mb-1 text-muted text-small w-15 w-sm-100">09.04.2022</p>
                <div class="w-15 w-sm-100">
                  <b-badge variant="secondary" pill>ON HOLD</b-badge>
                </div>
              </div>
              <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
                <div class="custom-control custom-checkbox mb-0">
                  <b-form-checkbox-group id="checkboxes2" name="flavour2" stacked>
                    <b-form-checkbox value="orange" />
                  </b-form-checkbox-group>
                </div>
              </div>
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
