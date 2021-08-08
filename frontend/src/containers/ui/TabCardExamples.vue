<template>
  <b-row>
    <b-colxx xxs="12">
      <h5 class="mb-4 card-title">{{ $t('cards.tab-card') }}</h5>
      <b-row>
        <b-colxx xxs="12" xs="6" lg="6">
          <b-card class="mb-4" no-body>
            <b-tabs card no-fade>
              <b-tab title="Tab 1" active>
                <h5 class="mb-4 card-title">Homemade Cheesecake with Fresh Berries and Mint</h5>
                <b-button size="sm" variant="outline-primary">Edit</b-button>
              </b-tab>
              <b-tab title="Tab 2">
                <h5 class="mb-4 card-title">Wedding Cake with Flowers Macarons and Blueberries</h5>
                <b-button size="sm" variant="outline-primary">Edit</b-button>
              </b-tab>
              <b-tab title="Tab 3">
                <h5 class="mb-4 card-title">Cheesecake with Chocolate Cookies and Cream Biscuits</h5>
                <b-button size="sm" variant="outline-primary">Edit</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-colxx>
        <b-colxx xxs="12" xs="6" lg="6" class="mb-3">
          <b-card class="mb-4" no-body>
            <b-tabs card no-fade>
              <b-tab title="Tab 1" active title-item-class="w-50 text-center">
                <h5 class="mb-4 card-title">Homemade Cheesecake with Fresh Berries and Mint</h5>
                <b-button size="sm" variant="outline-primary">Edit</b-button>
              </b-tab>
              <b-tab title="Tab 2" title-item-class="w-50 text-center">
                <h5 class="mb-4 card-title">Wedding Cake with Flowers Macarons and Blueberries</h5>
                <b-button size="sm" variant="outline-primary">Edit</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-colxx>
      </b-row>
    </b-colxx>
  </b-row>
</template>
<script>
export default {};
</script>
