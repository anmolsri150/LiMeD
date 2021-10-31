<template>
  <b-card-body>
    <p class="list-item-heading mb-4">{{ $t("survey.summary") }}</p>
    <p class="text-muted text-small mb-2">{{ $t("survey.title") }}</p>
    <p class="mb-3">{{ survey.title }}</p>
    <p class="text-muted text-small mb-2">{{ $t("survey.details-lowercase") }}</p>
    <p class="mb-3" v-html="survey.detail" />
    <p class="text-muted text-small mb-2">{{ $t("survey.category") }}</p>
    <p class="mb-3">{{ survey.category }}</p>
    <p class="text-muted text-small mb-2">{{ $t("survey.label") }}</p>
    <div>
      <p class="d-sm-inline-block mb-1">
        <b-badge :variant="survey.labelColor" pill>{{ survey.label }}</b-badge>
      </p>
      <p class="d-sm-inline-block mb-1" />
    </div>
  </b-card-body>
</template>
<script>
export default {
  props: ["survey"]
};
</script>
