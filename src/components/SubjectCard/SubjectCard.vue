<template>
    <div class="faculty">
        <div class="faculty__header">
            <p :class="`faculty__ttl ${data.titleBackground} text-white`">{{data.title}}</p>
            <div :class="`faculty__intro ${data.contentBackground}`">
            <p>{{data.content}}</p>
            </div>
        </div>
        <div class="faculty__img link-img">
            <ImageComponent :data="data.img" />
        </div>
    </div>
</template>

<script>
import ImageComponent from '@/components/ImageComponent/ImageComponent.vue'
export default {
    name: "SubjectCard",
    components:{
        ImageComponent
    },
    props: {
        data: Object
    }
}
</script>

<style lang="scss">
.faculty {
    @include clearfix;
    margin-bottom: 0px;
    @media #{$md} {
        margin-bottom: 0px;
        @include padding(null 20px);
    }
    @media #{$xl} {
        @include padding(null 60px);
    }
    &__header {
        @media #{$md} {}
        @media #{$lg} {
            float: left;
            width: 400px;
        }
        @media #{$xl} {
            width: 625px;
        }
    }
    &__ttl {
        display: block;
        font-size: 20px;
        font-weight: bold;
        @include padding(0.5em 1.3em);
        position: relative;
        z-index: 1;
        backface-visibility: hidden;
        small {
            font-size: 16px;
        }
        &:hover {
            text-decoration: underline;
        }
        .faculty__ttl-note {
            display: inline-block;
            font-size: 12px;
            font-weight: normal;
            line-height: normal;
            margin-top: 0.5em;
            @media #{$lg} {
                font-size: 13px;
            }
        }
    }
    &__intro {
        font-size: 16px;
        line-height: 1.888;
        @include padding(1.4em 1.4em);
        margin-bottom: 20px;
        @media #{$md} {
            @include padding(1.7em 1.7em);
        }
        @media #{$lg} {
            font-size: 18px;
            @include padding(1.9em 1.7em);
        }
        @media #{$xl} {
            margin-top: -20px;
        }
    }
    &__intro-note {
        font-size: 13px;
        margin-left: 0.5em;
        text-indent: -0.5em;
        margin-bottom: 0.5em;
    }
    &__img {
        display: block;
        margin: 20px;
        
        img {
            display: block;
            width: 400px;
            margin: 30px auto;
            text-align: center;
        }
    }
    &__list {
        @media #{$lg} {
            clear: left;
        }
        @media #{$xl} {
            width: 625px;
        }
    }
    &__item {
        margin-bottom: 0.5em;
    }
    &__link {
        font-size: 16px;
        font-weight: bold;
        @media #{$lg} {
            font-size: 20px;
        }
        &[href='#'] {
            pointer-events: none;
        }
    }
    &__item-note {
        font-size: 13px;
        padding-left: 25px;
        text-indent: -0.5em;
        margin-bottom: 1em;
        @media #{$xl} {
            max-width: 480px;
        }
    }
}
</style>