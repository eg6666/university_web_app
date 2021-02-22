<template>
  <section class="info">
    <div class="row">
        <NewsComponent class="col-6 col-lg-4" 
        :key="element.text" 
        v-for="element in data" 
        :data="element"></NewsComponent>
    </div>
  </section>
</template>

<script>
import NewsComponent from "@/components/News/NewsComponent.vue";
export default {
  name: "NewsContainer",
  components: {
    NewsComponent,
  },
  props: {
    data: Array,
  },
};
</script>

<style scoped>
.info {
  background-color: #3f5047;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
}

@media (min-width: 840px) {
  .info {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
@media (max-width: 1000px) {
  .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
