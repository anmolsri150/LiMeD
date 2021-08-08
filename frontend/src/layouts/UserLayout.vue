<template>
  <div id="root">
    <div class="fixed-background"></div>
    <main>
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  mounted() {
    document.body.classList.add("background");
  },
  beforeDestroy() {
    document.body.classList.remove("background");
  }
};
</script>
