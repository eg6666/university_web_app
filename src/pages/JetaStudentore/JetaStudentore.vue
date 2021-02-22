<template>
    <page-template-9 :data="data"></page-template-9>
</template>

<script>
import PageTemplate9 from '../templates/page-template-9.vue';

import data from "./data.9"

export default {
    components:{PageTemplate9},
    name:"JetaStudentore",
    data() {
        return{
            data:data
        }

    }
}
</script>