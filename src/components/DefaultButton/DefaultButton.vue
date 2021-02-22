<template>
  <div class="btn-container">
    <RouterLink v-if="!data.isOuterLink" :to="data.link" class="default-btn">
      {{ data.title }}
    </RouterLink>
    <a v-if="data.isOuterLink" :href="data.link" class="default-btn">
      {{ data.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    data: Object,
  },
};
</script>
<style scoped>
.btn-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.default-btn {
  display: block;
  background-color: #850202;
  box-shadow: 0 6px 0 #3b0101;
  color: white;
  padding: 0.4em;
  font-size: 17px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
.default-btn:hover {
  background-color: #ce0606;
  cursor: pointer;
}
@media (max-width: 840px) {
  .default-btn {
    width: 120px;
    font-size: 0.8em;
  }
}
.default-btn:active {
  box-shadow: none;
}
</style>
