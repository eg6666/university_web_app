<template>
  <div class="component_block component_item statistics_simple size_0 in-view">
    <section class="row">
      <article class="stat_simple">
        <h4 id="h4">{{ data.num1 }}</h4>
        <p id="p">{{ data.p1 }}</p>
      </article>

      <article class="stat_simple">
        <h4 id="h4">{{ data.num2 }}</h4>
        <p id="p">{{ data.p2 }}</p>
      </article>

      <article class="stat_simple">
        <h4 id="h4">{{ data.num3 }}</h4>
        <p id="p">{{ data.p3 }}</p>
      </article>
    </section>
    <section class="row">
      <article class="stat_simple">
        <h4 id="h4">{{ data.num4 }}</h4>
        <p id="p">{{ data.p4 }}</p>
      </article>

      <article class="stat_simple">
        <h4 id="h4">{{ data.num5 }}</h4>
        <p id="p">{{ data.p5 }}</p>
      </article>

      <article class="stat_simple">
        <h4 id="h4">{{ data.num6 }}</h4>
        <p id="p">{{ data.p6 }}</p>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Stats",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.statistics_simple {
  position: relative;
  padding: 25px;
  margin: 80px 0;
  border-top: 4px solid #ffc72c;
  border-bottom: 4px solid #ffc72c;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
}

.component_item {
  width: 100%;
  transition: opacity 1s;
  box-sizing: inherit;
}
/* *,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  scroll-behavior: smooth;
} */

.stat_simple {
  flex: 1 0 100%;
  text-align: center;
  /* padding: 0 15px; */
  box-sizing: inherit;
  /* @media #(sm) screen and (min-width: 500px) .stat_simple {
    -ms-flex: 1 0 30%;
    flex: 1 0 30%;
  } */
}

.stat_simple,
#h4 {
  font-family: CircularStd, sans-serif;
  font-weight: 700;
  font-size: 2.25em;
  margin: 1em 0 0.15em;
}
#h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.stat_simple,
#p {
  font-size: 1.1em;
  color: #5b5b5b;
  margin: 0 0 1em;
}
.component_block {
  position: relative;
}
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 7em;
}
</style>
