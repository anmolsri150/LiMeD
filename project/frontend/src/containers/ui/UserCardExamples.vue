<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.user-card') }}</h5>
      <b-row>
        <b-colxx md="6" sm="6" lg="4" xxs="12">
          <b-card class="mb-4 text-center">
            <router-link to="?">
              <img
                src="/assets/img/profiles/l-1.jpg"
                alt="Card image cap"
                class="img-thumbnail list-thumbnail rounded-circle border-0 mb-4"
              />
              <h6 class="mb-1 card-subtitle">Sarah Kortney</h6>
              <p class="text-muted text-small mb-4">Executive Director</p>
            </router-link>
            <b-button size="sm" variant="outline-primary">Edit</b-button>
          </b-card>
        </b-colxx>

        <b-colxx md="6" sm="6" lg="4" xxs="12">
          <b-card class="mb-4 d-flex flex-row" no-body>
            <router-link to="?" class="d-flex">
              <img
                src="/assets/img/profiles/l-1.jpg"
                alt="Card image cap"
                class="img-thumbnail list-thumbnail rounded-circle align-self-center m-4"
              />
            </router-link>
            <div class="d-flex flex-grow-1 min-width-zero">
              <div
                class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
              >
                <div class="min-width-zero">
                  <router-link to="?">
                    <h6 class="mb-1 card-subtitle truncate">Sarah Kortney</h6>
                  </router-link>
                  <p class="text-muted text-small mb-2">Executive Director</p>
                  <b-button size="xs" variant="outline-primary">Edit</b-button>
                </div>
              </div>
            </div>
          </b-card>

          <b-card class="mb-4 d-flex flex-row" no-body>
            <router-link to="?" class="d-flex">
              <div
                src="/assets/img/profiles/l-1.jpg"
                alt="Card image cap"
                class="align-self-center list-thumbnail-letters rounded-circle m-4"
              >SK</div>
            </router-link>
            <div class="d-flex flex-grow-1 min-width-zero">
              <div
                class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
              >
                <div class="min-width-zero">
                  <router-link to="?">
                    <h6 class="mb-1 card-subtitle truncate">Sarah Kortney</h6>
                  </router-link>
                  <p class="text-muted text-small mb-2">Executive Director</p>
                  <b-button size="xs" variant="outline-primary">Edit</b-button>
                </div>
              </div>
            </div>
          </b-card>
        </b-colxx>

        <b-colxx md="6" sm="6" lg="4" xxs="12">
          <b-card class="mb-4 d-flex flex-row" no-body>
            <router-link to="?" class="d-flex">
              <img
                src="/assets/img/profiles/l-1.jpg"
                alt="Card image cap"
                class="img-thumbnail list-thumbnail rounded-circle align-self-center m-4 small"
              />
            </router-link>
            <div class="d-flex flex-grow-1 min-width-zero">
              <div
                class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
              >
                <div class="min-width-zero">
                  <router-link to="?">
                    <h6 class="mb-1 card-subtitle truncate">Sarah Kortney</h6>
                  </router-link>
                  <p class="text-muted text-small mb-2">Executive Director</p>
                </div>
              </div>
            </div>
          </b-card>

          <b-card class="mb-4 d-flex flex-row" no-body>
            <router-link to="?" class="d-flex">
              <div
                src="/assets/img/profiles/l-1.jpg"
                alt="Card image cap"
                class="align-self-center list-thumbnail-letters rounded-circle m-4 small"
              >SK</div>
            </router-link>
            <div class="d-flex flex-grow-1 min-width-zero">
              <div
                class="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
              >
                <div class="min-width-zero">
                  <router-link to="?">
                    <h6 class="mb-1 card-subtitle truncate">Sarah Kortney</h6>
                  </router-link>
                  <p class="text-muted text-small mb-2">Executive Director</p>
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
export default {};
</script>
