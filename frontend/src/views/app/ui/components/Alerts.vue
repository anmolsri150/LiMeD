<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.alerts')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <notification-examples></notification-examples>
        <b-card class="mb-4" :title="$t('alert.rounded')">
          <b-alert show variant="primary" class="rounded">{{ $t('alert.primary-text') }}</b-alert>
          <b-alert show variant="secondary" class="rounded">{{ $t('alert.secondary-text') }}</b-alert>
          <b-alert show variant="success" class="rounded">{{ $t('alert.success-text') }}</b-alert>
          <b-alert show variant="danger" class="rounded">{{ $t('alert.danger-text') }}</b-alert>
          <b-alert show variant="warning" class="rounded">{{ $t('alert.warning-text') }}</b-alert>
          <b-alert show variant="info" class="rounded">{{ $t('alert.info-text') }}</b-alert>
          <b-alert show variant="light" class="rounded">{{ $t('alert.light-text') }}</b-alert>
          <b-alert show variant="dark" class="rounded">{{ $t('alert.dark-text') }}</b-alert>
        </b-card>
        <b-card class="mb-4" :title="$t('alert.default')">
          <b-alert show variant="primary">{{ $t('alert.primary-text') }}</b-alert>
          <b-alert show variant="secondary">{{ $t('alert.secondary-text') }}</b-alert>
          <b-alert show variant="success">{{ $t('alert.success-text') }}</b-alert>
          <b-alert show variant="danger">{{ $t('alert.danger-text') }}</b-alert>
          <b-alert show variant="warning">{{ $t('alert.warning-text') }}</b-alert>
          <b-alert show variant="info">{{ $t('alert.info-text') }}</b-alert>
          <b-alert show variant="light">{{ $t('alert.light-text') }}</b-alert>
          <b-alert show variant="dark">{{ $t('alert.dark-text') }}</b-alert>
        </b-card>
        <b-card class="mb-4" :title="$t('alert.default')">
          <b-alert
            variant="warning"
            class="rounded"
            fade
            show
            dismissible
          >{{ $t('alert.dismissing-text') }}</b-alert>
          <b-alert
            variant="warning"
            show
            dismissible
          >{{ $t('alert.dismissing-without-animate-text') }}</b-alert>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import NotificationExamples from "../../../../containers/ui/NotificationExamples";
export default {
  components: {
    "notification-examples": NotificationExamples
  }
};
</script>
