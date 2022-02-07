<template>
    <div class="form-add">
        <div class="form-add__title">Thêm sản phẩm</div>
        <div class="form-add__table">
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Link img:</div>
            <div class="form-add__table--div-input"><input v-model="book_image" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Isbn13:</div>
            <div class="form-add__table--div-input"><input v-model="book_isbn13" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Price:</div>
            <div class="form-add__table--div-input"><input v-model="book_price" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Rating:</div>
            <div class="form-add__table--div-input"><input v-model="book_rating" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Subtitle:</div>
            <div class="form-add__table--div-input"><input v-model="book_subtitle" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Authors:</div>
            <div class="form-add__table--div-input"><input v-model="book_authors" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Publisher:</div>
            <div class="form-add__table--div-input"><input v-model="book_publisher" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Pages:</div>
            <div class="form-add__table--div-input"><input v-model="book_pages" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Published:</div>
            <div class="form-add__table--div-input"><input v-model="book_published" type="form-add__text" /></div>
          </div>
          <div class="form-add__table--div">
            <div class="form-add__table--div-text">Description:</div>
            <div class="form-add__table--div-input"><input v-model="book_description" type="form-add__text" /></div>
          </div>
        </div>
        <div class="form-add__button">
            <button type="" class="form-add__button1" v-if="check_button==true" @click="add()">Thêm</button>
            <div v-if="check_button==false" style="margin-right:30px; margin-top:20px">Bạn chắc chắn muốn thêm ?</div>
            <button type="" class="form-add__button1" v-if="check_button==false"  @click="save()">Lưu</button>
            <button type="" class="form-add__button1" v-if="check_button==false" @click="cancel()">Hủy</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                check_button:true
        }
    },
    methods:{
            add(){
                this.check_button=false
            },
            save(){
                this.check_button=true
            },
            cancel(){
                this.check_button=true
            }
        }
}
</script>
<style lang="scss" scoped>
.form-add{
    width: 80%;
    height: 500px;
    margin: 100px auto;
    &__title{
        font-size: 30px;
        text-align: left;
    }
    &__table{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &--div{
            width: 30%;
            height: 80px;
            margin-top: 20px;
            box-sizing: border-box;        
            &-text{
                height: 50px;
                text-align: left;
                color: aqua;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 20px;

            }
            &-input{
                & input{
                        padding-left: 5px;
                        height: 30px;
                        border-radius: 0px 30px 30px 30px;
                }
            }
        }
    }
    &__button{
        display: flex;
        justify-content:center;
        &1{
            width: 5%;
            height: 60px;
            border-radius: 60px;
            background: cyan;
            color:steelblue;
            margin-top: 30px;
            margin-right: 30px;
        }
    }
}
</style>