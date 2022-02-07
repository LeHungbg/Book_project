<template>
  <div class="form-delete">
    <div class="form-delete__note">
      Note: Sản phẩm bị xóa sẽ không thể phục hồi
    </div>
    <div class="form-delete__text">Xóa sản phẩm</div>
    <div class="form-delete__search">
      <input
        placeholder="Nhập id để tìm sản phẩm muốn xóa"
        type="text"
        v-model="id"
        class="form-delete__search--input"
      />
      <button
        type="submit"
        class="form-delete__search--button-find"
        @click="find()"
      >
        Tìm kiếm
      </button>
    </div>
    <div v-if="check_delete == false" class="form-delete-display">
      <img class="form-delete-display-img" :src="info.image" alt="" />
      <div class="form-delete-display-content">
        <div class="form-delete-display-content-text">
          Name: <span class="info-text">{{ info.title }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Isbn13: <span class="info-text">{{ info.isbn13 }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Price: <span class="info-text">{{ info.price }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Rating: <span class="info-text">{{ info.rating }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Subtitle: <span class="info-text">{{ info.subtitle }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Authors: <span class="info-text">{{ info.authors }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Publisher: <span class="info-text">{{ info.publisher }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Pages: <span class="info-text">{{ info.pages }}</span>
        </div>
        <div class="form-delete-display-content-text">
          Published: <span class="info-text">{{ info.year }}</span>
        </div>
      </div>
    </div>
    <button
      v-if="check_delete == false"
      class="form-delete__button-delete"
      @click="deletebook()"
    >
      delete
    </button>   
    <button
      v-if="check_delete == false"
      class="form-delete__button-delete"
      @click="deletebook_cancel()"
    >
      cancel
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
      check_delete: true,
      check_find: true,
      check_delete2: "width: 0px",
    };
  },
  methods: {
    find() {
      axios
       .get(this.url + "/" + this.id)
      .then((response) => (this.info = response.data));
      console.log(this.info.isbn13);
      this.check_delete = false
    //   if (this.info.isbn13 == this.id) this.check_delete = false;
    //   else {
    //     alert("not find");
    //     this.check_delete = true;
    //   }
    //   console.log(this.info.isbn13);
    },
    deletebook() {
        this.check_delete = true
    },
    deletebook_cancel() {
        this.check_delete = true
    },
  },
};
</script>
<style lang="scss" scoped>
.form-delete {
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
  &__button-delete {
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
</style>