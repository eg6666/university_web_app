<template>
    <div :class="data.fullCard ? 'expand':'small-card'">
        <RouterLink :to="`${data.to ? data.to : '/'}`" :class="data.fullCard ? 'card--full':'card'">
            <div class="card-img">
                <img :src="data.url" :alt="data.alt">
            </div>
            <div class="card-body">
                <div class="card-info">
                    <span class="card-category">{{data.title}}</span>
                    <span class="card-date">{{data.date}}</span>
                </div>
                <div class="card-content" v-html="data.content"></div>
            </div>
        </RouterLink>
        <div class="blog" v-if="data.isBlogPost">
            <div class="vote">
                <button v-if="data.has_voted==1" class="unvote-btn" :id="data.id"  @click="voteORdelete"> 
                    - Fshi
                </button>
                <button v-else class="vote-btn" :id="data.id"  @click="voteORdelete"> 
                    + Voto
                </button>
                {{data.votes}}
                <span v-if="data.votes!=1">Vota</span>
                <span v-else>Votë</span>
            </div>
            <div class="comment">
                <span class='far'>&#xf075;  Komento</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        data:Object,
    },
    methods: {
      async voteORdelete(e){
          if(this.data.has_voted==0){
            try {
                const payload = {
                    post_id: e.target.id
                }
                this.data.votes++;
                this.data.has_voted=1;
                await this.$api.blog.vote(payload);
                this.$notify({
                        group: "success",
                        title: "Sukses",
                        text: `Votuat me sukses`,
                        type: "success",
                    })
            } catch (err) {
                this.$notify({
                        group: "error",
                        title: "Error",
                        text: `Pati një problem. Ju lutem provoni përsëri.`,
                        type: "error",
                    })
                this.data.votes--;
                this.data.has_voted=0;
            }
          }
          else{
            try {
                this.data.votes--;
                this.data.has_voted=0;
                await this.$api.blog.deleteVote(e.target.id);
                this.$notify({
                        group: "success",
                        title: "Sukses",
                        text: `Vota u fshi me sukses`,
                        type: "success",
                    })
                }catch (err) {
                this.$notify({
                        group: "error",
                        title: "Error",
                        text: `Pati një problem ne fshirjen e votes. Ju lutem provoni përsëri.`,
                        type: "error",
                    })
                this.data.votes++;
                this.data.has_voted=1;
            }
          }
      }
    }
}
</script>

<style lang="scss">
.blog{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.comment{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 5px;
    margin:10px;
    font-size:16px;
    max-width: fit-content;
    background-color: rgb(187, 187, 187);
}
.vote{
    min-width: fit-content;
    button:focus{
    outline: none;
    }
}

.vote-btn{
    margin:10px;
    min-width: fit-content;
    padding: 0.5em 1em;
    border-radius: 20px;
    border-color: 1px solid #0079D3;
    background-color: #0079D3;
    font-size: 14px;
    font-weight:800;
    color: white;
}
.unvote-btn{
    margin:10px;
    min-width: fit-content;
    padding: 0.5em 1em;
    border-radius: 20px;
    border-color: 1px solid red;
    background-color: red;
    font-size: 14px;
    font-weight:800;
    color: white;
}

.expand {
    width: 75%;
    margin: 60px auto;
}

.small-card {
    margin:10px 0 70px;
}

.card {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, .1);
    display: block;
    min-height: 105px;
    height: 100%;
}

@media (min-width:1000px) {
    .card {
        height: 100%;
    }
    .card--full {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, .1);
        display: flex;
    }
    .card--full .card-img {
        width: 50%;
    }
}

.card--full .card-body {
    padding: 20px;
}

.card--full .card-info {
    justify-content: space-between;
    margin-bottom: 10px;
}

.card--full .card-content {
    font-size: 16px;
    line-height: 1.3;
}

@media (min-width:1000px) {
    .card--full .card-category,.card--full .card-date,.card--full .card-content {
        font-size: 18px;
    }
}

.card-img {
    overflow: hidden;
    width: auto;
}

.card-img img {
    transition: transform .4s;
    width: 100%;
    height: 100%;
}
.card-img:hover img {
    transform: scale(1.1);
}
.card-body {
    padding: 15px;
}

.card-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

@media (min-width:840px) {
    .card-info {
        justify-content: flex-start;
        margin-bottom: 5px;
    }
}

.card-category {
    font-size: 12px;
    font-weight: 700;
    color: #8b0505;
}

@media (min-width:1000px) {
    .card-category {
        font-size: 18px;
        margin-right: 15px;
    }
}

.card-date {
    font-size: 10px;
}

@media (min-width:1000px) {
    .card-date {
        font-size: 14px;
    }
}

.card-content {
    font-size: 12px;
    line-height: 1.5;
}

@media (min-width:840px) {
    .card-content {
        font-size: 14px;
    }
}
</style>