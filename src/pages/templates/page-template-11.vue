<template>
  <div class="content">
    <Cover :text="data.cover.text" :coverPicture="data.cover.coverPicture" />
    <div class="container" style="max-width: 90%; margin: 0 auto 50px;">
      <template v-for="(component, id) in data.head">
        <component
          :key="id"
          :is="component.type"
          v-bind:id="component.id"
          :data="component.data"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Cover from "@/components/Cover/Cover.vue";
import Title from "@/components/Title/Title.vue";
import Paragraph from "@/components/Paragraph/Paragraph.vue";
import Shortcuts from "@/components/Shortcuts/Shortcuts.vue";
import BigHero from "@/components/BigHero/BigHero.vue";
import Subtitle from "@/components/Subtitle/Subtitle.vue";
import ListItems from "@/components/ListItems/ListItems.vue";
import LinkButton from "@/components/LinkButton/LinkButton.vue";
import Stats from "@/components/Stats/Stats.vue";
export default {
  name: "Bachelor",
  components: {
    Cover,
    Title,
    Paragraph,
    Shortcuts,
    BigHero,
    Subtitle,
    ListItems,
    LinkButton,
    Stats,
  },
  props: {
    data: Object,
  },
};
</script>
