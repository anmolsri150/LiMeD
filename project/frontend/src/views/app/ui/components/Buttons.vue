<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.buttons')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('button.rounded')">
          <b-button class="mb-1" variant="primary">{{ $t('button.primary') }}</b-button>
          <b-button class="mb-1" variant="secondary">{{ $t('button.secondary') }}</b-button>
          <b-button class="mb-1" variant="success">{{ $t('button.success') }}</b-button>
          <b-button class="mb-1" variant="danger">{{ $t('button.danger') }}</b-button>
          <b-button class="mb-1" variant="warning">{{ $t('button.warning') }}</b-button>
          <b-button class="mb-1" variant="info">{{ $t('button.info') }}</b-button>
          <b-button class="mb-1" variant="light">{{ $t('button.light') }}</b-button>
          <b-button class="mb-1" variant="dark">{{ $t('button.dark') }}</b-button>
        </b-card>

        <b-card class="mb-4" :title="$t('button.outline')">
          <b-button class="mb-1" variant="outline-primary">{{ $t('button.primary') }}</b-button>
          <b-button class="mb-1" variant="outline-secondary">{{ $t('button.secondary') }}</b-button>
          <b-button class="mb-1" variant="outline-success">{{ $t('button.success') }}</b-button>
          <b-button class="mb-1" variant="outline-danger">{{ $t('button.danger') }}</b-button>
          <b-button class="mb-1" variant="outline-warning">{{ $t('button.warning') }}</b-button>
          <b-button class="mb-1" variant="outline-info">{{ $t('button.info') }}</b-button>
          <b-button class="mb-1" variant="outline-light">{{ $t('button.light') }}</b-button>
          <b-button class="mb-1" variant="outline-dark">{{ $t('button.dark') }}</b-button>
        </b-card>

        <state-button-example></state-button-example>

        <b-card class="mb-4" :title="$t('button.sizes')">
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.large-button') }}</h6>
            <b-button class="mb-2" size="lg" variant="primary">{{ $t('button.large-button') }}</b-button>
            <b-button class="mb-2" size="lg" variant="secondary">{{ $t('button.large-button') }}</b-button>
          </div>
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.small-button') }}</h6>
            <b-button class="mb-2" size="sm" variant="primary">{{ $t('button.small-button') }}</b-button>
            <b-button class="mb-2" size="sm" variant="secondary">{{ $t('button.small-button') }}</b-button>
          </div>
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.extra-small-button') }}</h6>
            <b-button class="mb-2" size="xs" variant="primary">{{ $t('button.extra-small-button') }}</b-button>
            <b-button
              class="mb-2"
              size="xs"
              variant="secondary"
            >{{ $t('button.extra-small-button') }}</b-button>
          </div>
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.block-button') }}</h6>
            <b-button class="mb-2" block variant="primary">{{ $t('button.block-button') }}</b-button>
            <b-button class="mb-2" block variant="secondary">{{ $t('button.block-button') }}</b-button>
          </div>
        </b-card>

        <b-card class="mb-4" :title="$t('button.states')">
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.active') }}</h6>
            <b-button class="mb-2" href="#" variant="primary">{{ $t('button.primary-link') }}</b-button>
            <b-button class="mb-2" href="#" variant="secondary">{{ $t('button.link') }}</b-button>
          </div>
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.disabled') }}</h6>
            <b-button class="mb-2" disabled variant="primary">{{ $t('button.primary-button') }}</b-button>
            <b-button class="mb-2" disabled variant="secondary">{{ $t('button.button') }}</b-button>
          </div>
        </b-card>

        <b-card class="mb-4" :title="$t('button.button-groups')">
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.basic') }}</h6>
            <b-button-group class="mb-2">
              <b-button variant="primary">{{ $t('button.left') }}</b-button>
              <b-button variant="primary">{{ $t('button.middle') }}</b-button>
              <b-button variant="primary">{{ $t('button.right') }}</b-button>
            </b-button-group>
          </div>
          <div class="mb-4">
            <h6 class="mb-2 mr-1">{{ $t('button.toolbar') }}</h6>
            <b-button-group class="mb-2">
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button variant="primary">3</b-button>
              <b-button variant="primary">4</b-button>
            </b-button-group>
            <b-button-group class="mb-2">
              <b-button variant="primary">5</b-button>
              <b-button variant="primary">6</b-button>
              <b-button variant="primary">7</b-button>
            </b-button-group>
            <b-button-group class="mb-2">
              <b-button variant="primary">8</b-button>
            </b-button-group>
          </div>
          <div class="mb-4">
            <h6 class="mb-2 mr-1">{{ $t('button.sizes') }}</h6>
            <b-button-group class="mb-2" size="lg">
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button variant="primary">3</b-button>
            </b-button-group>
            <b-button-group class="mb-2">
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button variant="primary">3</b-button>
            </b-button-group>
            <b-button-group class="mb-2" size="sm">
              <b-button variant="primary">1</b-button>
              <b-button variant="primary">2</b-button>
              <b-button variant="primary">3</b-button>
            </b-button-group>
          </div>
        </b-card>

        <b-card class="mb-4" :title="$t('button.nesting')">
          <h6 class="mb-2">{{ $t('button.basic') }}</h6>
          <b-button-group class="mb-2">
            <b-button variant="secondary">1</b-button>
            <b-button variant="secondary">2</b-button>
            <b-dropdown variant="secondary" right :text="$t('button.dropdown')">
              <b-dropdown-item>{{ $t('button.dropdown-link') }}</b-dropdown-item>
              <b-dropdown-item>{{ $t('button.dropdown-link') }}</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-card>
        <b-card class="mb-4" :title="$t('button.vertical-variation')">
          <h6 class="mb-2">{{ $t('button.basic') }}</h6>
          <b-button-group class="mb-2" vertical>
            <b-button variant="secondary default">1</b-button>
            <b-button variant="secondary default">2</b-button>
            <b-dropdown variant="secondary default" right :text="$t('button.dropdown')">
              <b-dropdown-item>{{ $t('button.dropdown-link') }}</b-dropdown-item>
              <b-dropdown-item>{{ $t('button.dropdown-link') }}</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-card>

        <b-card class="mb-4" :title="$t('button.checkbox-radio-button')">
          <div class="mb-4">
            <h6 class="mb-2">{{ $t('button.checkbox') }}</h6>
            <b-button
              variant="primary"
              class="mb-2"
              @click="checkButtonCheck(1)"
              :pressed="checkedCheckboxes.indexOf(1) !== -1"
            >{{ $t('button.checkbox') }}</b-button>
            <br />
            <b-button
              variant="outline-primary"
              class="mb-2"
              @click="checkButtonCheck(2)"
              :pressed="checkedCheckboxes.indexOf(2) !== -1"
            >{{ $t('button.checkbox') }}</b-button>
          </div>
          <div class="mb-4">
            <h6 class="mb-2 mr-1">{{ $t('button.radio-button') }}</h6>
            <b-button-group class="mb-2">
              <b-button
                variant="primary"
                @click="selectedRadio=1"
                :pressed="selectedRadio==1"
              >{{ $t('button.radio') }}</b-button>
              <b-button
                variant="primary"
                @click="selectedRadio=2"
                :pressed="selectedRadio==2"
              >{{ $t('button.radio') }}</b-button>
              <b-button
                variant="primary"
                @click="selectedRadio=3"
                :pressed="selectedRadio==3"
              >{{ $t('button.radio') }}</b-button>
            </b-button-group>
          </div>
        </b-card>

        <b-card class="mb-4" :title="$t('button.outline')">
          <b-button class="mb-1" variant="primary default">{{ $t('button.primary') }}</b-button>
          <b-button class="mb-1" variant="secondary default">{{ $t('button.secondary') }}</b-button>
          <b-button class="mb-1" variant="success default">{{ $t('button.success') }}</b-button>
          <b-button class="mb-1" variant="danger default">{{ $t('button.danger') }}</b-button>
          <b-button class="mb-1" variant="warning default">{{ $t('button.warning') }}</b-button>
          <b-button class="mb-1" variant="info default">{{ $t('button.info') }}</b-button>
          <b-button class="mb-1" variant="light default">{{ $t('button.light') }}</b-button>
          <b-button class="mb-1" variant="dark default">{{ $t('button.dark') }}</b-button>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import StateButtonExample from "../../../../containers/ui/StateButtonExample";
export default {
  components: {
    "state-button-example": StateButtonExample
  },
  data() {
    return {
      checkedCheckboxes: [],
      selectedRadio: 0
    };
  },
  methods: {
    checkButtonCheck(i) {
      const index = this.checkedCheckboxes.indexOf(i);
      if (index === -1) {
        this.checkedCheckboxes.push(i);
      } else {
        this.checkedCheckboxes.splice(index, 1);
      }
    }
  }
};
</script>
