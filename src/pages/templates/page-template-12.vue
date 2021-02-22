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
    import Cover from "../../components/Cover/Cover.vue";
    import Paragraph from "../../components/Paragraph/Paragraph.vue";
    import ListItems from "../../components/ListItems/ListItems.vue";
    import StaffCard from "../../components/StaffCard/StaffCard";
    import EffectButton from "../../components/EffectButton/EffectButton";

    export default {
        components: { Cover,Paragraph,ListItems,StaffCard,EffectButton},
        name: "Stafi",
        props: {
            data: Object
        }
    }
</script>
