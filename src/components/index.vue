<template>
  <div class="wapper">
    <div class="introduce-header">
      <div id="mySidenav" :style="side_with" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
          >&times;</a
        >
        <router-link to="/about">About</router-link>
        <router-link to="/add">Thêm</router-link>
        <router-link to="/edit">Sửa</router-link>
        <router-link to="/delete">Xóa</router-link>

      </div>
      <section class="section1">
        <div class="section1__header">
          <router-link to="/home" class="section1__header--logo">
            <div class="section1__header--logo-icon">H</div>
            <div class="section1__header--logo-name">Book.store</div>
          </router-link>
          <div class="section1__header--menu">
            <ul class="section1__header--menu-ul">
              <li class="section1__header--menu-ul-li">
                <router-link class="link" to="/home">Trang chủ</router-link>
              </li>
              <li class="section1__header--menu-ul-li">
                <router-link class="link" to="/list">Danh sách</router-link>
              </li>
            </ul>
            <div class="section1__header--menu-search"></div>
          </div>
          <div class="section1__header--icon">
            <span
              style="font-size: 30px; cursor: pointer; margin-left: -27px"
              @click="openNav()"
              >&#9776;</span
            >
          </div>
        </div>
      </section>
    </div>
<router-view/>
  </div>
</template>
<script>
// import introduce from './introduce.vue'
export default {
  // components:{
  //   introduce
  // },
   created() {
    if(this.$route.path == '/' || this.$router.path == '') {
      this.$router.push('/home');
    }

  },
    //   mounted() {
    //     this.$router.push('/home');
    // },
  data() {
    return {
      side_with: "width:0px",
      
    };
  },
  methods: {
    openNav() {
      this.side_with = "width: 250px";
      console.log(this.side_with);
    },
    closeNav() {
      this.side_with = "width:0px";
    },

    
  },
};
</script>
<style lang="scss" scoped>
.link {
  text-decoration: none;
  color: lightcyan;
}
.link:hover {
  color: rgb(0, 255, 255);
}
.link_book {
  text-decoration: none;
  color: lightcyan;
  width: 100%;
}
.link_book:hover {
  color: rgb(255, 0, 0);
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
.section1 {
  &__header {
    height: 100px;
    @include display-flex();
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &--logo {
      text-decoration: none;
      width: 40%;
      font-family: "Lato", sans-serif;
      font-size: 15px;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      &-icon {
        width: 50px;
        height: 50px;
        color: rgb(88, 87, 87);
        font-size: 30px;
        border-radius: 0px 24px 24px 24px;
        @include between-center();
        background: lightcyan;
        box-shadow: rgba(100, 100, 117, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
      &-name {
        width: 20%;
        height: 50px;
        font-size: 20px;
        color: rgb(248, 255, 255);
        display: flex;
        margin-left: 4px;
        text-align: left;
        flex-direction: column;
        justify-content: center;
      }
    }
    &--menu {
      width: 50%;
      height: 100%;
      padding-top: 15px;
      &-ul {
        list-style: none;
        @include display-flex();

        &-li {
          margin-left: 50px;
          font-size: 20px;
        }
      }
    }
  }
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.sidenav {
  height: 100%;
  // width: 0px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(5, 3, 116);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: height 2s ease 3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>