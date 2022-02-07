<template>
  <header class="header">
    <div class="header__block1"></div>
    <div class="title">
      <h1>Reading ?</h1>
      The reading of all good books is like a conversation with the finest minds
      of past centuries.
    </div>
    <div class="header__block2">
      <div class="header__block2--note">
        Những gì sách dạy chúng ta cũng giống như lửa. Chúng ta lấy nó từ nhà
        hàng xóm, thắp nó trong nhà ra, đem nó truyền cho người khác và nó trở
        thành tài sản của tất cả mọi người.
      </div>
      <div class="header__block2--search">
        <div class="header__block2--search-form">
          <input
          style="padding-left:10px"
          onfocus="this.value=''"
          @click="reset()"
            type="text"
            v-model="idfind"
            class="header__block2--search-form-input"
            placeholder=" Nhập mã id để tìm kiếm"
          />
          <button class="header__block2--search-form-button" @click="find()">
            Tìm kiếm
          </button>
        </div>
        <div class="header__block2--search-detail">
          <a
            class="header__block2--search-detail-img"
            :href="url_detail"
          >
            <img
            :style="width_change"
              class="header__block2--search-detail-img-link"
              :src="img"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="block"
      style="text-align: left; margin-left: 20%; margin-top: 100px"
    >
      <h1>Danh sách id</h1>
      <ul>
        <li v-for="(item, index) in info" :key="index">{{ item.isbn13 }}</li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      idfind: "",
      info: null,
      check: true,
      checksidebar: false,
      width_change: "width: 0px",
      img: "",
      url_detail:'https://api.itbook.store/1.0/books/'
    };
  },
  created() {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((response) => (this.info = response.data.books));
  },
  methods: {
    reset() {
      this.width_change= "width: 0"
    },
    find() {
      this.url_detail=this.url_detail.concat(this.info.isbn13)
      this.width_change= "width: 50%"
      for (let i = 0; i < this.info.length; i++) {
        if (this.info[i].isbn13 == this.idfind) {
          this.img = this.info[i].image;
          this.check = true;
          break;
        } else {
          this.check = false;
          this.img = "";
        }
      }
      if (this.check == false) {
        alert("not finded");
      }
      this.check = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Island+Moments&family=Lato:ital,wght@1,900&family=Mulish:wght@500&family=Neonderthaw&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Island+Moments&family=Lato:ital,wght@1,900&family=Mulish:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Island+Moments&family=Lato:ital,wght@1,900&family=Mulish:wght@500&family=Neonderthaw&display=swap");
* {
  margin: 0;
  padding: 0;
}

.wapper {
  max-width: 1903px;
  height: 3000px;
  background: #0b0547;
  padding: 0 auto;
  padding-top: 30px;
}
@mixin between-center() {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
@mixin display-flex($flex-direction: row) {
  display: flex;
  flex-direction: row;
}
.title {
  font-family: "Island Moments", cursive;
  width: 100%;
  height: 200px;
  @include between-center();
  line-height: 1;
  font-size: 40px;
}
.header {
  width: 100vw;
  height: 780px;
  left: 0px;
  top: 0px;
  &__block2 {
    width: 80%;
    height: 600px;
    margin: 20px auto;
    border: oldlace solid 2px;
    box-sizing: border-box;
    @include display-flex(row);
    &--note {
      width: 48%;
      height: 100%;
      font-family: "Island Moments";
      border-right: oldlace solid 2px;
      box-sizing: border-box;
      padding: 50px 30px;
      font-size: 30px;
      background-size: 100% 100%;
      background-image: url(https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
    }
    &--search {
      width: 52%;
      height: 100%;
      background-size: 100% 100%;
      background-image: url(https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      &-form {
        margin-top: 40px;
        @include display-flex();
        justify-content: center;
        &-input {
          height: 35px;
          border-radius: 24px 0px 0px 24px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }
        &-button {
          width: 90px;
          border-radius: 0px 24px 24px 0px;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        }
        &-button:hover {
          color: rgb(7, 238, 255);
        }
      }
      // &-detail{
      //   width: 100%;
      //   height: 50%;
      //   border: 2px solid red;
      // }
    }
  }
}
.header__block2--search-detail {
  width: 100%;
  
  &-img {
    &-link {
      width: 0;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
        transition: 0.5s;
    }
    margin-left: -180px;
  }
}
</style>
