<template>
  <div class="home">
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="4" class="logo" :class="collapsed? 'logo-collapse-width':'logo-width' " style="text-align: center">
          {{collapsed ? '' : sysName}}
        </el-col>
        <el-col :span="16" >
          <div class="tools" @click.prevent.stop="collapse">
            <i class="el-icon-menu" style="padding-left: 20px;"></i>
          </div>
        </el-col>
        <el-col :span="4" class="user-info">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" alt="">{{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>

      <!--导航模块开始-->
      <el-col :span="24" class="main">
        <aside :class="collapsed ? 'menu-collapsed':'menu-expanded'">
          <!--导航 菜单-->
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                   unique-opened router v-show="!collapsed">
            <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
              <el-submenu :index="index+''" v-if="!item.leaf" >
                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                  {{child.name}}
                </el-menu-item>
              </el-submenu>
            </template>
          </el-menu>

          <!--导航菜单-折叠后-->
          <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
            <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
              <template v-if="!item.leaf">
                <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
                     @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"
                    @mouseout="showMenu(index,false)">
                  <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item"
                      style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''"
                      @click="$router.push(child.path)">{{child.name}}
                  </li>
                </ul>
              </template>
              <!--<template v-else>-->
              <!--<li class="el-submenu">-->
              <!--<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"-->
              <!--:class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)">-->
              <!--<i :class="item.iconCls"></i>-->
              <!--</div>-->
              <!--</li>-->
              <!--</template>-->
            </li>
          </ul>
        </aside>

        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <!--页头路径-->
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.name}}</strong>
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                  {{item.name}}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>

            <!--主页内容-->
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>


      </el-col>

    </el-row>
  </div>
</template>

<script type=" text/ecmascript-6">
  import {LoginUsers, Users} from '../mock/data/user';
  import router from '../router/index';


  export default{
    created() {
//      console.log(1111);
//      console.log(LoginUsers);
//      console.log(Users[0]);
//      console.log(router.options.routes);
    },

    data() {
      return {
        sysName: 'VUEX-MOCK',
        collapsed: false,
        sysUserName: '小明',
        sysUserAvatar: '../../src/assets/user.png',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: '',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      collapse () {
        this.collapsed = !this.collapsed;
        console.log(this.collapsed);
      },

      handleopen() {
        //console.log('handleopen');
      },
      handleclose() {
        //console.log('handleclose');
      },
      handleselect: function (a, b) {
      },
    },
    mounted () {
      var user = sessionStorage.getItem('user');
//      alert(user);
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.name || '';
        this.sysUserAvatar = user.avatar || '';
        console.log(this.sysUserAvatar, this.sysUserName);
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    .container
      position: absolute
      top: 0
      bottom: 0
      width: 100%
      .header
        height: 60px
        line-height: 60px
        background: #20a0ff
        color: #fff
        .tools
          background: #20a0ff
        .user-info
          text-align: center
          padding-right: 35px
          float: right

      .main
        display: flex
        /*background: #324057;*/
        position: absolute
        top: 60px
        bottom: 0px
        overflow: hidden
        aside
          flex: 0 0 230px
          width: 230px
          text-align: center
          /*position: absolute;*/
          /*top: 0px;*/
          /*bottom: 0px;*/
          .el-menu
            height: 100%
          .collapsed
            width: 60px
            .item
              position: relative
            .submenu
              position: absolute
              top: 0px
              left: 60px
              z-index: 99999;
              height: auto;
              display: none;
        .menu-collapsed
          flex: 0 0 60px;
          width: 60px;
        .menu-expanded
          flex: 0 0 230px;
          width: 230px;

        .content-container
          flex: 1
          overflow-y: scroll
          padding: 20px
          .breadcrumb-container
            .title
              width: 200px
              float: left
              color: #475669
            .breadcrumb-inner
              float: right
          .breadcrumb-wrapper
            background: #fff
            box-sizing: border-box


</style>
