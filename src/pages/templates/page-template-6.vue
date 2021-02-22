<template>
    <div class="content">
        <div class="container" style="max-width: 90%; margin: 50px auto;">
            <template v-for="(component, id) in data.head">
                <component :key="id" :is="component.type" :data="component.data"/>
            </template>
        </div>
    </div>
</template>

<script>
import NewsArchive from '@/components/NewsArchive/NewsArchive.vue'
import Title from '@/components/Title/Title.vue'
import Subtitle from '@/components/Subtitle/Subtitle'

export default {
  components: { NewsArchive, Title, Subtitle },
    name: "PageTemplate6",
    props: {
        data: Object
    }
}
</script>