<template>
  <section class="about-history section-default text-white">
    <h2 class="ttl-section">{{ data.title }}</h2>
    <div>
      <img :src="data.image" alt="Big Hero" class="about-history__img" />
    </div>
    <div class="container">
      <div class="about-history__content text-base">
        <div :key="info.title" v-for="info in data.info">
          <h3 class="about-history__subttl">{{ info.title }}</h3>
          <p>{{ info.extract }}</p>
        </div>
      </div>
      <EffectButton :data="data.button" />
    </div>
  </section>
</template>

<script>
import EffectButton from "@/components/EffectButton/EffectButton.vue";
export default {
  name: "BigHero",
  components: {
    EffectButton,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.about-history {
  background: url("bg_dot.png") 0% 0% / auto repeat;
  color: #fff !important;
  padding: 30px;
  &__content {
    max-width: 900px;
  }

  &__subttl {
    font-size: 30px;
    font-weight: bold;

    @media (max-width: $md-size) {
      font-size: 20px;
    }
  }
}
.ttl-section {
  font-family: "DINOT";
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 1em;
  text-align: center;

  @media (max-width: $md-size) {
    font-size: 25px;
  }
}
.about-history__img {
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  border: 0;
  margin-top: 0px;
  height: auto;
  box-sizing: border-box;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
//

@media all and (min-width: 1000px) {
  .about-history__img {
    margin-bottom: 50px;
  }
  .container {
    max-width: 970px;
  }
  .ttl-section {
    font-size: 36px;
    line-height: 1.5;
  }
}

.about-history__content {
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
}

.text-base {
  padding: 40px 0;
  color: white;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 500;
  width: 90%;
  @media (max-width: $md-size) {
    font-size: 13px;
    width: 100%;
  }
}
</style>
