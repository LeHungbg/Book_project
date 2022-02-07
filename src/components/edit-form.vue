<template>
  <div class="form-edit">
    <div class="form-edit__text">Sửa sản phẩm</div>
    <div class="form-edit__search">
      <input
        placeholder="Nhập id để tìm sản phẩm muốn sửa"
        type="text"
        v-model="id"
        class="form-edit__search--input"
      />
      <button
        type="submit"
        class="form-edit__search--button-find"
        @click="find()"
      >
        Tìm kiếm
      </button>
    </div>
    <div v-if="check_edit == false" class="form-edit-display">
      <img class="form-edit-display-img" :src="info.image" alt="" />
      <div class="form-edit-display-content">
        <div class="form-edit-display-content-text">
          <span id="name">Name: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.title
            }}</span
            ><input
              :placeholder="info.title"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Isbn13: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.isbn13
            }}</span
            ><input
              :placeholder="info.isbn13"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Price: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.price
            }}</span
            ><input
              :placeholder="info.title"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Rating: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.rating
            }}</span
            ><input
              :placeholder="info.rating"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Subtitle: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.subtitle
            }}</span
            ><input
              :placeholder="info.subtitle"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Authors: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.authors
            }}</span
            ><input
              :placeholder="info.authors"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Publisher: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.publisher
            }}</span
            ><input
              :placeholder="info.publisher"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Pages: </span
          ><span class="info-text"
            ><span style="color: cyan" v-if="check_input == false">{{
              info.pages
            }}</span
            ><input
              :placeholder="info.pages"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
        </div>
        <div class="form-edit-display-content-text">
          <span id="name">Published: </span>
          <span class="info-text"><span style="color: cyan" v-if="check_input == false">{{
              info.year
            }}</span>
            <input
              :placeholder="info.year"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
              v-if="check_input == true"
          /></span>
          
        </div>
        <div v-if="check_input == true" class="form-edit-display-content-text">
          <span id="name">url(image): </span
          ><span class="info-text"
            ><span v-if="check_input == false">{{ info.year }}</span
            ><input
              :placeholder="info.image"
              style="height: 20px; width: 300px"
              type="text"
              v-model="infor_title"
          /></span>
        </div>
      </div>
    </div>
    <button
      v-if="check_edit == false"
      class="form-edit__button-edit"
      @click="editbook()"
    >
      Edit
    </button>
    <button
      v-if="check_input == true"
      class="form-edit__button-edit"
      @click="savebook()"
    >
      Lưu
    </button>
    <button
      v-if="check_edit == false"
      class="form-edit__button-edit"
      @click="editbook_cancel()"
    >
      Cancel
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {},
      id: "",
      url: "https://api.itbook.store/1.0/books/",
      check_edit: true,
      check_find: true,
      check_edit2: "width: 0px",
      check_input: false,
    };
  },
  methods: {
    find() {
      axios
        .get(this.url + "/" + this.id)
        .then((response) => (this.info = response.data));
      console.log(this.info.isbn13);
      this.check_edit = false;
      //   if (this.info.isbn13 == this.id) this.check_delete = false;
      //   else {
      //     alert("not find");
      //     this.check_delete = true;
      //   }
      //   console.log(this.info.isbn13);
    },
    editbook() {
      this.check_input = true;
    },
    editbook_cancel() {
      this.check_input = false;
    },
    savebook() {
      this.check_input = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.form-edit {
  width: 80%;
  margin: 50px auto;
  &__note {
    font-size: 12px;
    text-align: left;
    color: red;
    padding-left: 80px;
  }
  &__text {
    font-size: 30px;
    margin-bottom: 30px;
  }
  &__search input {
    height: 30px;
    width: 300px;
  }
  &__search button {
    height: 34px;
    width: 100px;
    background: cyan;
  }
  &-display {
    width: 80%;
    height: 400px;
    border: 2px solid rgb(255, 255, 255);
    margin: 30px auto;
    display: flex;
    &-img {
      width: 30%;
      border-right: 2px solid rgb(255, 255, 255);
    }
    &-content {
      width: 50%;
      text-align: left;
      padding: 20px;
      line-height: 2;
    }
  }
  &__button-edit {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: cyan;
    margin-left: 30px;
  }
  .check {
    overflow: hidden;
    margin: 40px auto;
  }
}
#name {
  display: inline-block;
  width: 100px;
}
.info-text input{
    color: rgb(255, 35, 35);
    width: 200px  ;
  }
</style>