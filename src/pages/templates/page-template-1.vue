<template>
    <div class="content">
        <div>
            <template v-for="(component, id) in data.head">
                <component :key="id" :is="component.type" v-bind:id="component.id" :data="component.data"/>
            </template>
        </div>
    <div>
        <template v-for="(component, id) in data.body">
            <component :key="id" :is="component.type" v-bind:id="component.id" :data="component.data"/>
        </template>
    </div>    
    </div>
</template>

<script>
import Title from '@/components/Title/Title.vue'
import Card from '@/components/CardComponent/Card.vue'
import EffectButton from '@/components/EffectButton/EffectButton.vue'
import MainSlider from '@/components/MainSlider/MainSlider.vue'
import NewsContainer from "@/components/News/NewsContainer"
import ImageComponent from '@/components/ImageComponent/ImageComponent.vue'

export default {
    name: "PageTemplate1",
    components: { Title,Card,EffectButton,MainSlider,NewsContainer,ImageComponent},
    props:{
    data:Object
  }
}
</script>