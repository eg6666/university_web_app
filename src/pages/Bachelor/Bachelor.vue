<template>
  <page-template-11 :data="data"></page-template-11>
</template>

<script>
import PageTemplate11 from "../templates/page-template-11.vue";
import data from "./data11.js";
export default {
  name: "Bachelor",
  components: {
    PageTemplate11,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped></style>
