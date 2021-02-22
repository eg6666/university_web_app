<template>
    <div class="content">
        <Cover v-if="data.cover != undefined" :text="data.cover.text" :coverPicture="data.cover.coverPicture" />
        <div class="container" style="max-width: 90%; margin: 0 auto 50px;">
            <template v-for="(component, id) in data.head">
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
import BigHero from '@/components/BigHero/BigHero.vue'
import NewsContainer from '@/components/News/NewsContainer.vue'
import ListItems from '@/components/ListItems/ListItems.vue'
import ImageComponent from '@/components/ImageComponent/ImageComponent.vue'
export default {
    name: "Fakulteti",
    components: { Shortcuts,Cover,Title,Subtitle,Paragraph,BigHero,NewsContainer,ListItems,ImageComponent},
    props:{
    data:Object
  }
}
</script>