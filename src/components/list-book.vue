<template>
    <div class="list__book" >
    <div class="list__book_list" v-if="checklistbook==true">
        <span class="list-book"> <h1 >list book</h1>
        books, like good friends, are few and chosen; the more select, the more enjoyable...!</span>
    <section class="block">
        <div class="block__detail" v-for="(item, index) in info" :key="index" >
            <div class="block__detail--img"><img :src="item.image" style="width: 100%;height100%" alt=""></div>
            <router-link class="link" :to="'/detail/'+item.isbn13">{{item.title}}</router-link>
        
        </div>
    </section>
    </div>
    <!-- <div class="list__book_list" v-if="checklistbook==false">
        <router-view></router-view>
    </div>   -->
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return{
            info:null,
            checklistbook:true,
        }
    },
    created() {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((response) => (this.info = response.data.books));
  },
  methods:{
      check(event){
          console.log(event),
            this.checklistbook=false,
            console.log(this.checklistbook),
            this.$emit("data_detail",event)
      }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Lato:ital,wght@1,900&family=Mulish:wght@500&family=Neonderthaw&family=Pacifico&family=Source+Sans+Pro&display=swap');
.link{
    text-decoration: none;
    color: rgb(0, 136, 255);
}
.link:hover{
    color: aqua;
}
.list-book{
    height: 100px;
    display:block;
    font-family:'Island Moments', cursive;;
    margin-top: 70px;
    text-align: left;
    padding:0px 250px;
    line-height: 1.5;
    font-size: 30px;
}
.block{
    width: 80%;
    margin: 0 auto;
    height: 2500px;
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content:space-around;
    &__detail{
        padding: 5px 10px;
        width: 20%;
        height: 400px;
        border: oldlace 2px solid;
        border-radius: 24px;
        display: flex;
        background: rgb(219, 217, 217);
        flex-direction: column;
        &--img{
            width: 100%;
            height: 85%;
        }
        &--name{
            width: 100%;
            height: 20%;
            font-family: fantasy;
        }
    }
}
</style>