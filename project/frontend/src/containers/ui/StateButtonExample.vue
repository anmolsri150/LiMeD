<template>
  <b-card class="mb-4" :title="$t('button.states')">
    <div class="mb-4">
      <p class="mb-1">{{ $t('button.states-text') }}</p>
      <state-button
        class="mb-3"
        id="successButton"
        variant="primary"
        :click="successButtonClick"
      >{{ $t('button.click-here') }}</state-button>
    </div>
    <div class="mb-4">
      <p class="mb-1">{{ $t('button.states-text-alternate') }}</p>
      <state-button
        class="mb-3"
        id="failButton"
        variant="secondary"
        :click="failButtonClick"
      >{{ $t('button.click-here') }}</state-button>
    </div>
  </b-card>
</template>

<script>
import StateButton from "../../components/Common/StateButton";
export default {
  components: {
    "state-button": StateButton
  },
  data() {
    return {
      selectedRadio: 0
    };
  },
  methods: {
    successButtonClick() {
      // eslint-disable-next-line promise/param-names
      return new Promise((success, fail) => {
        setTimeout(() => {
          success("Everything went right!");
        }, 2000);
      });
    },
    failButtonClick() {
      // eslint-disable-next-line promise/param-names
      return new Promise((success, fail) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          fail("Something is wrong!");
        }, 2000);
      });
    }
  }
};
</script>
