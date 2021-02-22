<template>
  <section class="page-header">
    <div class="container">
      <div class="page-header__content">
        <h1 class="page-header__ttl text-white text-shadow-800" style="margin: 50px 65px 0 65px;">{{text}}</h1>
      </div>
      <div class="page-header__bg">
        <img :src="coverPicture" alt="foto">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cover",
  props: {
    text: String,
    coverPicture: String,
  },
};
</script>

<style lang="scss">
.page-header {
  height: 440px;
  position: relative;
  border-bottom: 20px solid rgb(224, 224, 224);

  @media #{$lg} {
    height: 580px;
    text-shadow: none;
  }

  @include media-breakpoint-down(md) {
    .page-header__ttl,
    .page-header__subttl {
      &:not(.text-white) {
        text-shadow: 
          0 0 15px rgba(#fff, 1),
          0 0 15px rgba(#fff, 1),
          0 0 15px rgba(#fff, 1);
      }
    }
  }

  &__content {
    padding-top: 20px;
    padding-left: 10px;

    @media #{$lg} {
      padding-top: 130px;
      padding-left: 0;
    }
  }

  &__subttl {
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 900;
    margin-left: 2px;
  }

  &__ttl {
    font-family: sans-serif;
    font-weight: 900;
    font-size: 42px;
    letter-spacing: -0.01em;
    line-height: 1.189;

    @media #{$lg} {
      font-size: 58px;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      font-family: 'object-fit: cover;';
    }

    &--partial {
      // -640 +175
      @media #{$lg} {
        padding-left: calc(50vw - 465px);
      }
    }

  }

  &--sm {
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .page-header__content {
      padding-top: 0;
    }
    
  }

}

.mb-lg-30 {
  @media #{$lg} {
    margin-bottom: 30px;
  }
}

.text-shadow-800 {
  text-shadow: 0 0 5px rgba(#000, .8);
}

.text-shadow-white {
  text-shadow: 
    0 0 4px rgba(#fff, 1),
    0 0 4px rgba(#fff, 1),
    0 0 4px rgba(#fff, 1),
    0 0 4px rgba(#fff, 1);
}
</style>
