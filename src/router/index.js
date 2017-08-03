import Vue from 'vue';
import Router from 'vue-router';


import NotFound from '../components/notFound.vue';
import Login from '../components/login.vue';
import Home from '../components/home.vue';
// import Main from '../components/nav1/main.vue';
import Table from '../components/nav1/table.vue';
import Form from '../components/nav1/form.vue';
import user from '../components/nav1/user.vue';
import Page4 from '../components/nav2/page4.vue';
import Page5 from '../components/nav2/page5.vue';
import Page6 from '../components/nav3/page6.vue';
import echarts from '../components/echarts.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: '',
      component: Login,
      hidden: true
    },
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    // 主导航
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-menu', // 图标样式
      children: [
        {path: '/table', component: Table, name: 'Table'},
        {path: '/form', component: Form, name: 'Form'},
        {path: '/user', component: user, name: 'User'}
      ]
    },

    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'el-icon-message',
      children: [
        {path: '/page4', component: Page4, name: '页面4'},
        {path: '/page5', component: Page5, name: '页面5'}
      ]
    },

    {
      path: '/',
      component: Home,
      name: '',
      iconCls: 'el-icon-star-on',
      leaf: true, // 只有一个节点
      children: [
        {path: '/page6', component: Page6, name: '导航三'}
      ]
    },

    {
      path: '/',
      component: Home,
      name: 'Charts',
      iconCls: 'el-icon-date',
      children: [
        {path: '/echarts', component: echarts, name: 'echarts'}
      ]
    }
  ]
});

export default router;
