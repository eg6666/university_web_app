<template>
    <div class="content">
        <cover v-if="data.cover != undefined" :text="data.cover.text" :coverPicture="data.cover.coverPicture" />
        <div class="container" style="max-width: 90%; margin: 50px auto;">
            <template v-for="(component, id) in data.head">
                <component :key="id" :is="component.type" :data="component.data"/>
            </template>
        </div>
    </div>
</template>

<script>
import Cover from '../../components/Cover/Cover.vue'
import Paragraph from '@/components/Paragraph/Paragraph.vue'
import Title from '@/components/Title/Title.vue'
import BigHero from '@/components/BigHero/BigHero.vue'

export default {
  components: {Cover, Paragraph, Title, BigHero},
    name: "PageTemplate0",
    props: {
        data: Object
    }
}
</script>