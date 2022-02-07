<template >
  <div class="book-detail">
    
    <div class="book-detail__name">{{ info.title }}</div>
    <div class="book-detail__content">
      <div class="book-detail__content--img">
        <img :src="info.image" alt="" />
      </div>
      <div class="book-detail__content--text">
        <div class="book-detail__content--textall">Price: <span class="info-text">{{info.price}}</span></div>
        <div class="book-detail__content--textall">Rating: <span class="info-text">{{info.rating}}</span></div>
        <div class="book-detail__content--textall">Subtitle: <span class="info-text">{{info.subtitle}}</span></div>
        <div class="book-detail__content--textall">Authors: <span class="info-text">{{info.authors}}</span></div>
        <div class="book-detail__content--textall">Publisher: <span class="info-text">{{info.publisher}}</span></div>
        <div class="book-detail__content--textall">Pages: <span class="info-text">{{info.pages}}</span></div>
        <div class="book-detail__content--textall">Published: <span class="info-text">{{info.year}}</span></div>
        
      </div>
    </div>
    <div class="book-detail__desc">Description:<span class="info-text">{{info.desc}}</span><br>
      <div v-for="(value, name, index) in info.pdf" :key="index">
      {{ name}} - {{ value}}
    </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},

  created() {
    this.callAPi();
  },
  computed: {},
  data() {
    return {
      hide: false,
      info: {},
      url: "https://api.itbook.store/1.0/books/",
    };
  },
  methods: {
    callAPi() {
      let id = this.$route.params.isbn13;
      if (!id) {
        this.$route.push("/");
      }

      axios
        .get(this.url + id)
        .then((response) => (this.info = response.data));
    },
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Island+Moments&family=Lato:ital,wght@1,900&family=Mulish:wght@500&family=Neonderthaw&family=Pacifico&family=Rubik+Beastly&family=Source+Sans+Pro&display=swap');
.book-detail {
  width: 80%;
  margin: 100px auto;
  &__name {
    width: 100%;
    height: 100px;
    text-align: left;
    padding-left: 130px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 50px;
    color: rgb(0, 255, 255);
  }
  &__content {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    &--img {
      width: 30%;
      height: 400px;
    }
    &--text {
        font-family: 'Source Sans Pro', sans-serif;
      width: 48%;
      height: 300px;
      line-height: 3;
      &all{
          text-align: left;
      }
    }
  }
  &__desc{
      text-align: left;
      line-height: 1.5;
      padding: 0 130px;
  }
}
.info-text{
    color: rgb(0, 255, 255);
    font-weight: bold;
    margin-top: 20px;
}
</style>
