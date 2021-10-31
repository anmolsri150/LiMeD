<template>
  <span>
    <b-button
      :id="id"
      :class="{'btn-multiple-state': true,
                    'show-spinner': status === 'processing',
                    'show-success':status === 'success',
                    'show-fail': status === 'fail' }"
      :variant="variant"
      @click="handleClick"
      :disabled="status != 'default'"
    >
      <b-tooltip
        :show="messageShow"
        ref="statusTooltip"
        :target="id"
        placement="top"
        :disabled="true"
      >{{ message }}</b-tooltip>
      <span class="spinner d-inline-block">
        <span class="bounce1"></span>
        <span class="bounce2"></span>
        <span class="bounce3"></span>
      </span>
      <span class="icon success">
        <i class="simple-icon-check"></i>
      </span>
      <span class="icon fail">
        <i class="simple-icon-exclamation"></i>
      </span>
      <span class="label">
        <slot></slot>
      </span>
    </b-button>
  </span>
</template>

<script>
export default {
  props: ["id", "variant", "click"],
  data() {
    return {
      status: "default",
      message: "",
      messageShow: false
    };
  },
  methods: {
    handleClick() {
      this.status = "processing";
      this.click()
        .then(res => {
          this.status = "success";
          this.message = res;
        })
        .catch(err => {
          this.status = "fail";
          this.message = err;
        })
        .finally(() => {
          this.messageShow = true;
          this.$refs.statusTooltip.$emit("enable");
          setTimeout(() => {
            this.messageShow = false;
            this.status = "default";
            this.$refs.statusTooltip.$emit("disable");
          }, 3000);
        });
    }
  }
};
</script>
