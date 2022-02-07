import Vue from 'vue'
import VueRouter from 'vue-router'
import addbook from './components/add-form.vue'
import home from './components/introduce.vue'
import list from './components/list-book.vue'
import editbook from './components/edit-form.vue'
import deletebook from './components/delete-form.vue'
import createabout from './components/about-form.vue'
import detailbook from './components/detail-book'

Vue.use(VueRouter)
export const router = new VueRouter(
    {
        mode:"history",
    routes: [
        {path: '/home', component: home},
        {path: '/add', component: addbook},
        {path: '/list', component: list},
        {path: '/edit', component: editbook},
        {path: '/delete', component: deletebook},
        {path: '/about', component: createabout},
        {path: '/detail/:isbn13', component: detailbook}
    ]
})