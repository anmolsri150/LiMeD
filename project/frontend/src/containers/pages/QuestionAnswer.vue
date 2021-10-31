<template>
  <div>
    <b-button
      v-b-toggle="`question_${data.key}`"
      class="p-0 pb-2 font-weight-bold mb-2"
      variant="link"
      role="tab"
    >{{data.question}}</b-button>
    <b-collapse :id="`question_${data.key}`" accordion="my-accordion" role="tabpanel">
      <div class="pb-4">{{data.answer}}</div>
    </b-collapse>
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
