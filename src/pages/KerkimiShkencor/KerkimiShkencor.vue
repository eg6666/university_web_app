<template>
  <page-template-3 :data="data"></page-template-3>
</template>

<script>
import PageTemplate3 from "../templates/page-template-3.vue";
import data from "./data3.js";
export default {
  name: "KerkimiShkencor",
  components: {
    PageTemplate3,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped></style>
