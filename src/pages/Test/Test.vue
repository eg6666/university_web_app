<template>
    <page-template-0 :data="data"></page-template-0>
</template>

<script>
import pageTemplate0 from '../templates/page-template-0.vue'
import data from './data.0'

export default {
  components: { pageTemplate0 },
    name: 'Test',
    data() {
        return {
            data: data,
        }
    }
}
</script>