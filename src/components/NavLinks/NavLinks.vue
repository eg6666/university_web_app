<template>
<nav class="navbar navbar-expand-sm navbar-dark">
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav">
            <li class="nav-item" :key="link.text" v-for="link in links">
                <RouterLink class="nav-link" :to="link.href">{{link.text}}</RouterLink>
                <div class="nav-item-list-container">
                    <div class="nav-item-list" v-if="link.hoverText && link.hoverText.length > 0">
                        <ul>
                            <li :key="hoverText.text" v-for="hoverText in link.hoverText">
                                <RouterLink :to="{ name: hoverText.name, hash: hoverText.element }">{{hoverText.text}}</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import Shortcuts from "@/data/NavLinks.js";

export default {
    name: "NavLinks",
    data() {
        return {
            links: Shortcuts,
        }
    },
    mounted() {
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(width<=640){
        window.addEventListener('load', () => {
            const menu = document.querySelector("#navLinks");
            const linkClicked=document.querySelectorAll(".nav-item");
            const menuButton=document.querySelector(".navbar-toggler");
            menuButton.addEventListener("click",() =>{
                menu.classList.toggle("show");
            })
            for(let i=0;i<linkClicked.length;i++){
            linkClicked[i].addEventListener("click",() => {
                linkClicked[i].style.borderColor="white";
                setTimeout(() =>{
                    menu.classList.remove("show");
                    linkClicked[i].style.borderColor="rgba(0, 0, 0, .3)";
                },100);
            })
            }
        })
        }
    }
}
</script>

<style scoped>
.navbar {
    display: block;
    width: 100%;
    background-color: #750202;
    border: 2px solid #750202;
    padding: 0;
}

.navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    flex-wrap: wrap;
}

.nav-item {
    display: block;
    transition: background-color 0.5;
}

.nav-item:hover {
    background-color: rgba(255,255,255,0.2);
    color: white;
}

.nav-link {
    padding: 1.2em 1.7em !important;
    color: white !important; /*Bootstrap specifity me i larte*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Nunito, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    border-right: 1px solid rgba(0, 0, 0, .3);
}

.nav-item-list-container {
    display: none;
    position: absolute;
    margin-top: 4px;
    transition: opacity 0.4s;
}

.nav-item-list a {
    display: block;
    font-size: 12px;
    color: white;
    padding: 5px 20px;
}

@media (max-width: 1200px) {
    .nav-link {
        padding: 0.8em !important;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
    }
}

@media (min-width:1000px) {
    .nav-item:hover .nav-item-list-container {
        display: block;
        z-index: 100;
    }
    .nav-item-list {
        padding: 15px;
        background-color: rgba(139,5,5,0.9);
        font-family: Nunito, sans-serif;
        letter-spacing: 1px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, .3);
        box-shadow: 0 0 2px rgba(0, 0, 0, .2);
        margin-top: -3px;
    }
    .nav-item-list ul {
        padding-left: 10px;
        list-style: square;
    }
    .nav-item-list a {
        font-size: 14px;
    }
    .nav-item-list a:hover {
        color: #fff;
        text-decoration: underline;
    }
}

@media (max-width: 640px) {
    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .nav-item {
        border: 1px solid rgba(0, 0, 0, .3);
        margin: 5px 8px;
        transition: none;
    }
}
</style>