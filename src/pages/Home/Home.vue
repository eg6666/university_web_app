<template>
  <page-template-1 :data="data"></page-template-1>
</template>

<script>
import pageTemplate1 from '../templates/page-template-1.vue';
import data from "./data.1"

export default {
  components: { pageTemplate1 },
  name: "Home",
  data(){
    return{
      data:data
    }
  }
};
</script>
