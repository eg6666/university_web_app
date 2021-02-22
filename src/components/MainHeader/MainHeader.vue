<template>
    <div class="logo_fakultet">
      <Logo_F logo="fti_logo.png" emri="Fakulteti i Teknologjisë së Informacionit" alt="FTI Logo" />
      <Shortcuts :data="links" />
      <div class="search_container">
        <input type='text' id="search_header" placeholder='Kërko...' class='search_input' />
        <div class="button_holder" @click="searchResult">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </div>
      </div>
    </div>
</template>

<script>
import Logo_F from "@/components/Logo/Logo.vue";
import Shortcuts from "@/components/Shortcuts/Shortcuts.vue";
import ShortcutsData from "@/data/MainHeader.js";

export default {
    name: "MainHeader",
    components: {
        Logo_F,
        Shortcuts
    },
    data() {
        return {
            links: ShortcutsData,
        }
    },
    methods:{
        searchResult(){
            const value=document.getElementById('search_header').value;
            if(value!="")
                this.$router.push(`/search/${value}`);
        }
    }
}
</script>

<style lang="scss">
.logo_fakultet {
    background-color: #f7f7f7;
    font-size: 16px;
    border: 2px solid #f7f7f7;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: $lg-size) {
        justify-content: space-between;
    }
    @media (max-width: $sm-size) {
        justify-content: center;
    }
}

.search_container {
    width: 250px;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: $sm-size) {
        display: none;
    }
    @media (max-width: $lg-size) {
        width: calc(100% - 510px);
    }
    @media (max-width: 1150px) {
        width: 150px;
    }
   .search_input {
        border: thin solid #dddddd;
        box-shadow: 1px 1px #dddddd;
        outline-color: #750202;
        padding: .4em 0 .4em .6em;
        @media (max-width: 1150px) {
            width: 100px;
        }
    }
    .button_holder {
        background-color: #f1f1f1;
        border: thin solid #dddddd;
        box-shadow: 1px 1px #dddddd;
        cursor: pointer;
        text-align: center;
        width: 50px;
        padding: 0.4em 0.6em;
    }
    .button_holder:hover {
        color: #750202;
        svg {
            zoom: 1.3;
        }
    }
}
</style>

