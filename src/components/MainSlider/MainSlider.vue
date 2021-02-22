<template>
    <section class="hero">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide :key="i" v-for="(slide, i) in slides">
                <div class="image-sp" :style="`background-image: url(${slide.image})`"></div>
                <RouterLink :to="slide.link" class="hero__link">
                    <div class="hero__link-inner">
                        <div class="hero__ttl-wrap">
                        <div class="hero__ttl">{{ slide.title }}</div>
                        <div class="hero__subttl">{{ slide.subtitle }}</div>
                        </div>
                        
                        <EffectButton :data="{title: slide.button, link:slide.link}" v-if="!!slide.button"/>
                    </div>
                </RouterLink>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import EffectButton from "@/components/EffectButton/EffectButton.vue"
import Slides from "@/data/MainSlider"
import 'swiper/css/swiper.css'

export default {
    name: 'MainSlider',
    components: {
        Swiper,
        SwiperSlide,
        EffectButton,
    },
    data() {
        return {
        slides: Slides,
        swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
}
</script>


<style lang="scss">
.hero {
  width: 100%;
  .swiper-slide {
    position: relative;
    height: 530px;

    @media #{$md} {
      height: 750px;
    }

    .image-pc,
    .image-sp {
      position: relative;
      background: 50% / cover no-repeat;
      height: inherit;
    }

    .image-pc {
      display: none;
      @media #{$md} {
        display: block;
      }
    }

    .image-sp {
      @media #{$md} {
        /* display: none; */
      }
    }
  }

  .swiper-pagination {
    bottom: 45px;
    right: 50px !important;
    &-bullet {
        width: 10px;
        height: 10px;
        background: #fff;
        opacity: 1;

        @media #{$md} {
            width: 13px;
            height: 13px;
        }
    }

    &-bullet-active {
        background: $secondary;
    }

    @include media-breakpoint-up(md) {
      display: flex;
      flex-direction: column;
      width: auto;
      bottom: auto;
      top: 50%;
      left: auto;
      right: 140px;
      transform: translateY(-50%);
    }
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px;

    @include media-breakpoint-up(md) {
      margin: 5px 0;
    }
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__link-inner {
    padding: 20px 15px;
    
    .btn-primary {
      width: 200px;
      margin: 0 auto;
      padding-left: 1em;
      background-color:rgba(#750202, .9);

      &:hover {
        border-color: $secondary;
        &::after {
          height: 500%;
        }
      }
    }
  }

  &__ttl-wrap {
    margin-bottom: 32px;
    text-align: center;

    @media #{$md} {
      margin-bottom: 40px;
    }
  }

  &__ttl {
    font-family: sans-serif;
    font-size: 28px;
    letter-spacing: 0.01em;
    font-weight: 900;
    line-height: 1;
    margin-bottom: .5em;
    color: #fff;
    text-shadow: 0 0 5px rgba(#000, .8);

    @media #{$md} {
      font-size: 46px;
    }
  }

  &__subttl {
    font-family: sans-serif;
    font-size: 23px !important;
    letter-spacing: 0.01em;
    font-weight: 700 !important;
    line-height: 1;
    color: #fff;
    text-shadow: 0 0 5px rgba(#000, .8);

    @media #{$md} {
      font-size: 38px;
    }
  }

}
</style>