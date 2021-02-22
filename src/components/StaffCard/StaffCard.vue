<template>
    <div class="message-author">
        <div class="message-author__img">
            <img :src="data.profilePicture" alt="profesor" />
        </div>
        <div class="message-author__content">
            <h4 class="message-author__ttl">{{data.name}}</h4>
            <h5 class="message-author__subttl">{{data.degree}}</h5>
            <EffectButton v-if="data.profileButton" :data="data.button"/>
            <h6 class="message-author__subttl">{{data.email}}</h6>
        </div>
    </div>
</template>

<script>
import EffectButton from '../EffectButton/EffectButton.vue'

export default {
    components: { 
        EffectButton 
    },
    props: {
        data: Object
    },
    name: "StaffCard",
}
</script>

<style lang="scss">
.message-author {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 5px;
    border: 1px solid black;
    @include padding(30px);
    @media #{$lg} {
        width: 600px;
    }
    @media (max-width: 767px) {
        flex-direction: column;
    }
    &__img {
        flex-shrink: 0;
        width: 120px;
        margin-right: 30px;
        @media #{$sm} {
            width: 140px;
        }
        @media #{$lg} {
            width: 200px;
            margin-right: 60px;
        }
    }
    &__content {
        @include media-breakpoint-down(md) {
            text-align: center;
        }
    }
    &__ttl {
        font-size: 18px;
        margin-bottom: 0.35em;
        font-weight: bold;
        @media #{$lg} {
            font-size: 24px;
        }
    }
    &__subttl {
        font-size: 16px;
        margin-bottom: 0.8em;
        @media #{$lg} {
            font-size: 22px;
        }
    }
}
</style>
