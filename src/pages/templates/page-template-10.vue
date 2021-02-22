<template>
    <div class="content">
        <Cover v-if="data.cover != undefined" :text="data.cover.text" :coverPicture="data.cover.coverPicture" />
        <div class="container" style="max-width: 90%; margin: 50px auto;">
            <template v-for="(component, id) in data.head">
                <component :key="id" :is="component.type" :data="component.data"/>
            </template>
        </div>
    </div>
</template>

<script>
import Cover from '@/components/Cover/Cover.vue'
import Paragraph from '@/components/Paragraph/Paragraph.vue'
import SubjectCard from '@/components/SubjectCard/SubjectCard.vue'
import Title from '@/components/Title/Title.vue'
import EffectButton from '@/components/EffectButton/EffectButton.vue'

export default {
  components: { Cover, Paragraph, SubjectCard, Title, EffectButton },
    name: "PageTemplate10",
    props: {
        data: Object
    }
}
</script>