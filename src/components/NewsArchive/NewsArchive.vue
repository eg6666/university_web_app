<template>
<div class="news-archive">
    <ul class="news-archive__list news-archive__list--reverse-color">
        <li class="news-archive__item news-archive__item--lg" :key="id" v-for="(item, id) in data.items">
                <a href="" target="_self" class="news-archive__img-link">
                <div class="news-archive__img">
                    <div class="newImage"><img :src="item.img" alt=""></div>
                </div>
                </a>
                <div class="news-archive__content">
                <div class="news-archive__info">
                    <div class="news-archive__category">{{item.title}}</div>
                    <div class="news-archive__date">{{item.date}}</div>
                </div>
                <h4 class="news-archive__ttl">
                    <a href="" target="_self" class="link-default">{{item.extract}}</a>
                </h4>
                <effect-button :data="{title: 'Lexo më tepër', width: 100, link: item.link}"></effect-button>
                </div>
        </li>
    </ul>
</div>
</template>

<script>
import EffectButton from '../EffectButton/EffectButton.vue'
export default {
  components: { EffectButton },
    name: "NewsArchive",
    props: {
        data: Object,
    }
}
</script>

<style lang="scss">
.news-featured {
  padding-top: 40px;

  @media #{$lg} {
    padding-top: 60px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    @include padding(null 7px);

    @media #{$md} {
      @include padding(null 15px);
    }

    &:first-child {
      width: 100%;
      margin-bottom: 15px;
      
      @media #{$md} {
        margin-bottom: 30px;
      }

      @media #{$lg} {
        margin-bottom: 60px;
      }
    }

    &:not(:first-child) {
      width: 50%;
      margin-bottom: 15px;

      @media #{$md} {
        margin-bottom: 30px;
      }

      @media #{$lg} {
        width: 25%;
        margin-bottom: 30px;
      }
    }
  }

  .news-card {
    margin-bottom: 0;
    height: 100%;
  }

}

.news-others {
  padding-top: 40px;

  &__ttl {
    margin-bottom: 1.5em;
  }

}


.news-archive {
  max-width: 1200px;
  margin: 10px auto;

  &__list {

    &--reverse-color {
      .news-archive__item {
        &:nth-child(odd) {
          background: none;
        }
        &:nth-child(even) {
          background: #fbf8ef;;
        }
      }
    }
  }

  &__item {
    display: flex;
    flex-wrap: wrap;
    @include padding(15px);

    @media #{$lg} {
      flex-wrap: nowrap;
      flex-direction: row;
      align-items: center;
      @include padding(10px 40px 10px 60px);
    }

    &:nth-child(odd) {
      background: #fbf8ef;
    }


    &--lg {
      display: flex;
      align-items: flex-start;
      @include padding(15px);

      @media #{$lg} {
        @include padding(20px 30px);
      }

      .news-archive__info {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        
        @media #{$lg} {
          margin-top: 10px;
        }
      }

      .news-archive__category {
        margin-right: 1em;
        @media #{$lg} {
          font-size: 20px;
        }
      }

      .news-archive__date {
        
        @media #{$lg} {
          font-size: 16px;
        }
      }

      .news-archive__ttl {
        width: 100%;
        margin-bottom: 1em;
        
        @media #{$lg} {
          margin-bottom: 0;
          padding-right: 0;
          font-size: 18px;
          margin-bottom: 1.5em;
        }
      }

    }

  }

  &__img-link {
    flex-shrink: 0;
    display: block;
    width: 115px;
    margin-right: 15px;

    @media #{$lg} {
      width: 250px;
      margin-right: 50px;
    }
  }
  
  &__img {
    overflow: hidden;
    padding-bottom: 67.5%;
    position: relative;

    img {
      position: absolute;
      transition: transform .4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
      font-family: 'object-fit: cover;';
    }
  }

  &__content {
    width: calc(100% - 130px);
    display: flex;
    flex-wrap: wrap;

    @media #{$lg} {
      display: block;
      width: auto;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media #{$lg} {
      display: block;
      flex-shrink: 0;
      width: 150px;
      margin-right: 10px;
    }
  }

  &__category {
    font-size: 14px;
    font-weight: bold;
    color: $secondary;

    @media #{$lg} {
      font-size: 18px;
    }
  }

  &__date {
    font-size: 12px;

    @media #{$lg} {
      font-size: 14px;
    }
  }

  &__ttl {
    font-size: 12px;
    width: calc(100% - 120px);

    @media #{$lg} {
      font-size: 16px;
      width: auto;
      padding-right: 30px;
    }
    a {
      display: inline;
    }
  }

  &__btn {
    &:hover {
      color: #fff;
      background-color: #222;
    }
  }
}


.news-search {
  padding-top: 30px;

  @media #{$lg} {
    padding-top: 60px;
  }

  .container {
    max-width: 1120px;
  }

  &__btn {
    text-align: center;
    margin-top: 30px;
    margin: 0 15px;

    .btn-primary {
      display: inline-block;
      width: 100%;
      @media #{$md} {
        width: 485px;
      }
    }
  }

}


.news-article {
  max-width: 935px;
  margin: 0 auto;
  @include padding(30px 15px null);

  @media #{$lg} {
    padding-top: 60px;
  }

  &__info {
    margin-bottom: 15px;

    @media #{$md} {
      margin-bottom: 25px;
    }
  }

  &__category {
    font-size: 28px;
    font-weight: bold;
    color: $secondary;

    @media #{$md} {
      font-size: 36px;
    }
  }

  &__date {
    font-size: 16px;
    margin-left: .5em;

    @media #{$md} {
      font-size: 18px;
    }
  }

  &__ttl {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 1em;
    border-bottom: 2px solid #c1c1c1;
    margin-bottom: 1.5em;

    @media #{$md} {
      font-size: 24px;
    }
  }

  &__body {
    font-size: 14px;

    @media #{$md} {
      font-size: 18px;
    }

    p:not(:last-child) {
      margin-bottom: 2em;
    }

    table {
      border: 0;
      border-spacing: 0;
    }
    th,
    td {
      border: 0;
    }

    a {
      display: inline;
      color: $secondary;
      border-bottom: 1px solid;
    }

  }

  &__btn {
    text-align: center;
    margin-top: 30px;
    margin: 0 15px;

    @media #{$md} {
      text-align: left;
      margin-top: 60px;
      margin: 0;
    }

    .btn-primary {
      display: inline-block;
      width: 100%;
      @media #{$md} {
        text-align: center;
        width: 240px;
        &:hover::after {
          height: 350%;
        }
      }
    }
  }
}
</style>