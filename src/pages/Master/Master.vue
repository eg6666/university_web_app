<template>
  <page-template-7 :data="data"></page-template-7>
</template>

<script>
import PageTemplate7 from "../templates/page-template-7.vue";
import data from "./data7.js";
export default {
  name: "Master",
  components: {
    PageTemplate7,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped></style>
