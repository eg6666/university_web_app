<template>
  <div class="top_links">
    <ul class="top_links_list">
      <li class="top_links_item" :key="link.text" v-for="link in data">
        <RouterLink :to="{ name: link.page, hash: link.element}" class="top_links_link" id="link">
          {{ link.text }} 
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
  }
};
</script>
<style lang="scss" scoped>
.top_links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: calc(100% - 510px - 250px);
  height: 100%;
  ul {
    padding-left: 15px;
  }
  @media (max-width: 1200px) {
    :nth-child(2) {
      display: none;
    }
  }
  @media (max-width: $lg-size) {
    display: none;
  }
  @media (max-width: 1150px) {
    width: calc(100% - 510px - 150px);
  }
  &_list {
    display: flex;
    margin: 0;
    list-style: none;
    @media #{$lg} {
      width: auto;
      flex-wrap: nowrap;
    }
  }
  &_item {
    @media #{$lg} {
      width: auto;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
    @media #{$xl} {
      &:not(:last-child) {
        margin-right: 50px;
      }
    }
  }
  &_link {
    @media #{$lg} {
      display: block;
      font-size: 16px;
      font-weight: bold;
      height: auto;
      position: relative;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s;
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        border-right: 1px solid;
        border-top: 1px solid;
        top: 0.5em;
        left: -1.4em;
        transform: rotate(45deg);
        transition: transform 0.2s;
      }
      &:hover {
        border-bottom-color: $secondary;
        &::before {
          transform: rotate(45deg) translate(0.4em, -0.4em);
        }
      }
    }
  }
}

//Stile te vlefshme per pjesen jashte Header
//komponentit kur krijohet i kalohet nje id fullWidth
#fullWidth{
    width: 100%;
    padding-top: 50px;
}
#fullWidth #link{
    font-size: 19px;
}
</style>
