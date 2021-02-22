<template>

<footer class="footer" >
  <div class="footer-bot" v-on:click="$scrollToTop" style="cursor: pointer">
    <div class="container">
      <div class="footer-bot__copy" style="font-size: 16px">Shko ne fillim te faqes</div>
    </div>
  </div>
  <div class="footer__mid">
    <div class="container">
      <div class="row flex-md-column-reverse flex-lg-row">
        <div class="col-lg-9">
          <div class="row">
            <div class="footer__mid-ttl col-xl-2 col-md-3">{{footerData.gateways.name}}</div>
            <div class="col-xl-6 col-md-9">
              <ul class="footer-nav">
                <li class="footer-nav__item" :key="link.text" v-for="link in footerData.gateways.links">
                    <RouterLink :to="link.href" class="footer-nav__link">{{link.text}}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="footer__mid-ttl col-xl-2 col-md-3">{{footerData.quickLinks.name}}</div>
            <div class="col-xl-6 col-md-9">
              <ul class="footer-nav mb-0">
                <li class="footer-nav__item" :key="link.text" v-for="link in footerData.quickLinks.links">
                    <RouterLink :to="link.href" class="footer-nav__link">{{link.text}}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-3 d-md-flex d-lg-block">
          <div class="footer-search">
            <div class="footer-search__ttl">Kërko</div>
            <form action="/en/search.php" method="get">
              <div class="form-group">
                <div class="input-group input-group-lg">
                  <input style="height: 60px" type="text" class="form-control" id="search" name="q">
                  <div class="input-group-append">
                    <button class="footer-search__btn" name="sa" value="submit"><img src="https://icons-for-free.com/iconfiles/png/512/search+24px-131985193505071219.png" alt="Search"></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div class="footer-sns">
              <div class="footer-sns__item"><a href="https://www.youtube.com" target="_blank" class="footer-sns__link"><img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square1-512.png" alt="YouTube"></a></div>
              <div class="footer-sns__item"><a href="https://www.facebook.com" target="_blank" class="footer-sns__link"><img src="https://cdn.iconscout.com/icon/free/png-512/facebook-square-1868981-1583145.png" alt="Facebook"></a></div>
              <div class="footer-sns__item"><a href="https://twitter.com" target="_blank" class="footer-sns__link"><img src="https://bankimooncentre.org/wp-content/uploads/2020/05/twitter-icon-square-logo-108D17D373-seeklogo.com_.png" alt="Twitter"></a></div>
              <div class="footer-sns__item"><a href="https://www.linkedin.com" target="_blank" class="footer-sns__link"><img src="https://bankimooncentre.org/wp-content/uploads/2020/05/LinkedIn-Icon-Square.png" alt="LinkedIn"></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bot">
    <div class="footer-bot">
      <div class="container">
        <div class="footer-bot__copy">Copyright FTI</div>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import Footer from "@/data/Footer.js";

export default {
    name: "Footer",
    data() {
        return {
            footerData: Footer
        }

    },methods: {
    topFunction: function() {
      console.log('5')
      window.scrollTo(0,0)
    }
    }

}



</script>

<style lang="scss">



.footer {
  background: #fff;
  position: relative;
  z-index: 1;

  &__mid {
    background: $secondary;
    color: #fff;
    @include padding(30px 0 10px);

    .row {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }

  &__mid-ttl {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 10px;

    @media #{$md} {
      margin-bottom: 0;
    }
  }

  &__bot {
    background: $secondary;
  }
  
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__item {
    @include padding(null 15px);
    margin-bottom: 15px;
    line-height: 1;
    text-decoration: none;
    color: white;
    list-style-type: none;

    a {
        color: white;
        text-decoration: none;
    }

    @media #{$md} {
      @include padding(null 20px);
      margin-bottom: 20px;
      line-height: 1.3;
    }

    &:not(:last-child) {
      border-right: 1px solid;
    }
  }

  &__link {
    font-size: 14px;
    border-bottom: 1px solid transparent;
    transition: border-color .2s;

    @media #{$md} {
      font-size: 16px;
      &:hover {
        border-bottom-color: currentColor;
      }
    }

  }

}

.footer-search {
  margin-top: 20px;
  margin-bottom: 10px;

  @media #{$md} {
    margin-top: 0;
  }

  @include media-breakpoint-only(md) {
    display: flex;
    margin-bottom: 40px;
  }

  &__ttl {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 18px;

    @include media-breakpoint-only(md) {
      width: 200px;
    }
  }

  .input-group {
    width: 70%;
    margin: 0 auto;
    @media #{$md} {
      width: 100%;
    }
  }

  input {
    background: $secondary;
    border-radius: 0;
    color: #fff;
    outline: 0;
    border: 1px solid #fff;
    border-right: 0;    
  }

  &__btn {
    background: #888888;
    color: #fff;
    font-size: 14px;
    height: 60px;
    @include padding(null 18px);
    transition: opacity .2s;
    border: 1px solid #fff;
    border-left: 0;

    img {
      width: 21px;
    }

    &:hover {
      opacity: .7;
    }
  }

  label {
    font-size: 12px;
    margin-top: 15px;

    @media #{$md} {
      font-size: 16px;
    }
  }
}


.footer-sns {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media #{$md} {
    justify-content: flex-start;
  }

  @include media-breakpoint-only(md) {
    margin-bottom: 40px;
    margin-left: 20px;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 6px;
    }
  }

  &__link {
    display: block;
    background: #fff;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;

    @media #{$md} {
      width: 38px;
      height: 38px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      font-family: 'object-fit: cover;';
      transition: transform .4s;
    }

    &:hover {
      img {
        transform: scale(1.25);
      }
    }
  }
}

.footer-bot {
  background: rgba($primary, .3);
  color: #fff;
  @include padding(30px null 80px);

  @media #{$md} {
    @include padding(30px null 30px);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 20px;

      @media #{$md} {
        margin-right: 30px;
      }
    }
  }

  &__link {
    font-size: 12px;
    border-bottom: 1px solid transparent;
    transition: border-color .2s;

    @media #{$md} {
      font-size: 14px;
    }

    &:hover {
      border-bottom-color: currentColor;
    }
  }

  &__copy {
    font-family: sans-serif;
    font-size: 10px;
    font-weight: bold;
    text-align: center;

    @media #{$md} {
      font-size: 12px;
    }
  }
}

.sticky-footer {
  @media #{$sm} {
    display: none !important;
  }
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: rgba($primary, .8);
  color: #fff;
  z-index: 9;

  &__list {
    display: flex;
  }

  &__item {
    width: 25%;
    position: relative;
    &:not(:last-child) {
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 1px;
        background: rgba(#fff, .2);
      }
    }
  }

  &__link {
    display: block;
    height: 50px;
    font-size: 10px;
    padding-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 24px;
      height: 19px;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      background-position: 50%;
      background-repeat: no-repeat;
      opacity: .6;
    }
  }
}
</style>
