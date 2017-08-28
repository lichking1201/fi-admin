<template>
  <el-row class="container">
    <el-col :span="24" class="main">
      <aside :class="collapsed ? 'collapse-width' : ''">
        <div class="logo">
          {{collapsed ? 'A' : 'ADMIN'}}
        </div>
        <el-menu :collapse="collapsed" :default-active="$route.path" unique-opened router>
          <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="item.children">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!item.children" :index="item.path">
              <i :class="item.iconCls"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
        <div class="aside-actions">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
          <el-dropdown trigger="hover" style="margin-top: 20px">
            <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </aside>
  
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
      sysUserName: 'lichen',
      sysUserAvatar: ''
    }
  },
  methods: {
    //退出登录
    logout: function () {
      this.$confirm('确认退出吗?', '提示')
        .then(() => { })
        .catch(() => { })
    },
    //折叠导航栏
    collapse: function () {
      this.collapsed = !this.collapsed
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .main {
    display: flex;
    position: absolute;
    top: 0px;
    bottom: 0px;
    overflow: hidden;
    aside {
      position: relative;
      width: 230px;
      transition: all .15s;
      .el-menu {
        height: 100%;
        transition: none !important;
        overflow-y: auto;
        padding-top: 60px;
        padding-bottom: 60px;
      }
      .aside-actions {
        height: 60px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-left: 20px;
      }
      .logo {
        position: absolute;
        height: 60px;
        line-height: 60px;
        padding-left: 20px;
        z-index: 9;
        font-size: 28px;
      }
    }
    aside.collapse-width {
      width: 64px;
    }
    .content-container {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      .breadcrumb-container {
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}

.el-menu--collapse {
  [class^=fa] {
    font-size: 16px;
  }
}
</style>
