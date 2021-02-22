<template>
  <page-template-10 :data="data"></page-template-10>
</template>

<script>
import PageTemplate10 from "../templates/page-template-10.vue";
import data from "./data.10";

export default {
  name: "Lendet",
  components: {
    PageTemplate10,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>
