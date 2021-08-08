<template>
  <b-card class="mb-4" :title="$t('alert.vue-notifications')">
    <h6 class="card-subtitle">{{ $t('alert.outline') }}</h6>
    <b-button
      variant="outline-primary"
      class="mb-3"
      @click="addNotification('primary')"
    >{{ $t('alert.primary') }}</b-button>
    <b-button
      variant="outline-secondary"
      class="mb-3"
      @click="addNotification('secondary')"
    >{{ $t('alert.secondary') }}</b-button>
    <b-button
      variant="outline-info"
      class="mb-3"
      @click="addNotification('info')"
    >{{ $t('alert.info') }}</b-button>
    <b-button
      variant="outline-success"
      class="mb-3"
      @click="addNotification('success')"
    >{{ $t('alert.success') }}</b-button>
    <b-button
      variant="outline-warning"
      class="mb-3"
      @click="addNotification('warning')"
    >{{ $t('alert.warning') }}</b-button>
    <b-button
      variant="outline-danger"
      class="mb-3"
      @click="addNotification('error')"
    >{{ $t('alert.error') }}</b-button>

    <h6 class="card-subtitle">{{ $t('alert.filled') }}</h6>
    <b-button
      variant="primary"
      class="mb-3"
      @click="addNotification('primary filled')"
    >{{ $t('alert.primary') }}</b-button>
    <b-button
      variant="secondary"
      class="mb-3"
      @click="addNotification('secondary filled')"
    >{{ $t('alert.secondary') }}</b-button>
    <b-button
      variant="info"
      class="mb-3"
      @click="addNotification('info filled')"
    >{{ $t('alert.info') }}</b-button>
    <b-button
      variant="success"
      class="mb-3"
      @click="addNotification('success filled')"
    >{{ $t('alert.success') }}</b-button>
    <b-button
      variant="warning"
      class="mb-3"
      @click="addNotification('warning filled')"
    >{{ $t('alert.warning') }}</b-button>
    <b-button
      variant="danger"
      class="mb-3"
      @click="addNotification('error filled')"
    >{{ $t('alert.error') }}</b-button>
  </b-card>
</template>
<script>
export default {
  methods: {
    addNotification(
      type = "success",
      title = "This is Notify Title",
      message = "This is Notify Message,<br>with html."
    ) {
      this.$notify(type, title, message, { duration: 3000, permanent: false });
    }
  }
};
</script>
