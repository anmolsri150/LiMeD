<template>
  <b-row>
    <!-- Larger screen layout -->
    <b-colxx xxs="12" class="d-none d-md-block">
      <b-card no-body class="mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p class="list-item-heading mb-0 truncate w-40 w-xs-100"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">{{$t('pages.prices.developer')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">{{$t('pages.prices.team')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">{{$t('pages.prices.enterprise')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p
              class="list-item-heading mb-0 truncate w-40 w-xs-100"
            >{{$t('pages.prices.twofactorauthentication')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p
              class="list-item-heading mb-0 truncate w-40 w-xs-100"
            >{{$t('pages.prices.teampermissions')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p
              class="list-item-heading mb-0 truncate w-40 w-xs-100"
            >{{$t('pages.prices.245Support')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p
              class="list-item-heading mb-0 truncate w-40 w-xs-100"
            >{{$t('pages.prices.247Support')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body
            class="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center"
          >
            <p
              class="list-item-heading mb-0 truncate w-40 w-xs-100"
            >{{$t('pages.prices.useractionsauditlog')}}</p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center"></p>
            <p class="mb-0 text-primary w-20 w-xs-100 text-center">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
    </b-colxx>

    <!-- Smaller screen layout -->
    <b-colxx xxs="12" class="d-block d-md-none">
      <b-card no-body class="d-flex flex-row mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="pl-0 pb-0">
            <p
              class="list-item-heading mb-0 text-primary"
            >{{$t('pages.prices.twofactorauthentication')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.developer')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.team')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.enterprise')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="pl-0 pb-0">
            <p class="list-item-heading mb-0 text-primary">{{$t('pages.prices.teampermissions')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.developer')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.team')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.enterprise')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="pl-0 pb-0">
            <p class="list-item-heading mb-0 text-primary">{{$t('pages.prices.245Support')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.developer')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.team')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.enterprise')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="pl-0 pb-0">
            <p class="list-item-heading mb-0 text-primary">{{$t('pages.prices.247Support')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.developer')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.team')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.enterprise')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3 table-heading">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="pl-0 pb-0">
            <p
              class="list-item-heading mb-0 text-primary"
            >{{$t('pages.prices.useractionsauditlog')}}</p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.developer')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.team')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one"></p>
          </b-card-body>
        </div>
      </b-card>
      <b-card no-body class="d-flex flex-row mb-3">
        <div class="d-flex flex-grow-1 min-width-zero">
          <b-card-body class="align-self-center d-flex flex-row">
            <p class="list-item-heading mb-0 truncate w-70">{{$t('pages.prices.enterprise')}}</p>
            <p class="text-primary text-right mb-0 w-30 text-one">
              <i class="simple-icon-check"></i>
            </p>
          </b-card-body>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
export default {};
</script>
