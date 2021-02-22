<template>
    <div class="logo">
      <RouterLink to="/" class="logo_link">
        <img :src="require(`@/assets/${logo}`)" :alt="alt">
        <div>{{emri}}</div>
      </RouterLink>
    </div>
</template>

<script>
export default {
    name: "Logo",
    props: {
        logo: String,
        alt: String,
        emri: String
    }
}
</script>

<style scoped>
.logo {
  width: 500px;
  height: inherit;
  margin-left: 10px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size : 1.2em;
}

.logo_link {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    transition: opacity 0.2s;
}
img{
    width: 105px;
    height: 60px;
    margin-right: 0.5em;
}

@media (max-width:640px) {
  .logo{
    width:100%;
    margin-left: 0px;
    font-size : 1em;
  }
  .logo_link{
    flex-direction: column;
  }
  img{
    margin:0px;
    }
}
@media (max-width:500px) {
  .logo img{
    width: 78px;
    height: 45px;
  }
}
@media (max-width:330px) {
  .logo{
    font-size : 0.8em;
  }
}

.logo_link:hover img{
    opacity: 0.7;
}
</style>

