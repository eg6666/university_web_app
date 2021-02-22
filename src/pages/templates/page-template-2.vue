<template>
    <div class="content">
        <Cover v-if="data.cover != undefined" :text="data.cover.text" :coverPicture="data.cover.coverPicture" />
        <div class="container" style="max-width: 90%; margin: 0 auto 50px;">
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
import Shortcuts from '@/components/Shortcuts/Shortcuts.vue';
import Cover from '@/components/Cover/Cover.vue'
import Title from '@/components/Title/Title.vue'
import Subtitle from '@/components/Subtitle/Subtitle.vue'
import Paragraph from '@/components/Paragraph/Paragraph.vue'
import LinkButton from '@/components/LinkButton/LinkButton.vue'
import ListItems from '@/components/ListItems/ListItems.vue'
import SubjectCard from '@/components/SubjectCard/SubjectCard.vue'
import Card from '@/components/CardComponent/Card.vue'
import CardComponent from '@/components/CardComponent/CardComponent.vue'
import EffectButton from '@/components/EffectButton/EffectButton.vue'
export default {
    name: "Student",
    components: { Shortcuts,Cover,Title,Subtitle,Paragraph,LinkButton,ListItems,SubjectCard,Card,CardComponent,EffectButton},
    props:{
    data:Object
  }
}
</script>
<style scoped>
#fullWidth{
    margin-bottom: 50px;
}
#listItems{
    padding:0;
}
@media (min-width: 1000px){
    #listItems{
        max-width:100%;
    }
}
#bursa{
    margin:50px 0;
    border-bottom:3px solid black;
    border-top:3px solid black;
}
#lastPraktikaParagraph{
    padding-bottom: 50px;
    border-bottom:3px solid black;
}
</style>