<template>
  <span v-html="fieldHtml"></span>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      field: "",
      fieldHtml: ""
    };
  },
  mounted() {
    this.data = this.$attrs["row-data"];
    this.field = this.$attrs["row-field"];
    this.fieldHtml = this.data[this.field];
    const titleField = this.$parent.fields.filter(
      x => x.sortField == this.field
    );
    if (titleField && titleField[0]) {
      console.log("mounted -> titleField", titleField[0])
      this.$el.parentNode.dataset["title"] = titleField[0].title;
    }
  }
};
</script>
