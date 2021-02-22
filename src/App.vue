<template>
  <div id="app">
    <notifications class="mt-2" group="error" position="top center" :max="3" :width="400" />
    <notifications class="mt-2" group="success" position="top center" :max="3" :width="400" />
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

.top-main {
  position: relative;
  z-index: 101;
  background: #fff;
  margin-top:130px;
}
@media (min-width: 640px) and (max-width: 1057px) {
    .top-main{
      margin-top: 170px;
    }
  }
@media (min-width: 1057px) and (max-width: 1200px) {
  .top-main{
    margin-top: 118px;
  }
}
</style>
