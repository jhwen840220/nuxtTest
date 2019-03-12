<template>
  <div>
    <div class="menu_burger" @click="toggle_menu();testThis();">
      <i :class="['i1',collapse_flag && 'closed']"/>
      <i :class="['i2',collapse_flag && 'closed']"/>
      <i :class="['i3',collapse_flag && 'closed']"/>
    </div>
    <nav class="navbar sticky-top">
      <nuxt-link class="navbar-brand" to="/" style="color:orange">Home</nuxt-link>
      <a-drawer
        placement="right"
        :zIndex="1025"
        :closable="false"
        @close="close_menu"
        :visible="collapse_flag"
        wrapClassName="drawer-menu"
      >
        <div @click="close_menu">
          <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </div>
        <div @click="close_menu">
          <nuxt-link class="nav-link" to="/product">Product</nuxt-link>
        </div>
      </a-drawer>

      <ul class="navbar_menu mr-auto mb-0">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/product">Product</nuxt-link>
        </li>
      </ul>
      <div class="navbar_right">
        <a-icon type="search" class="mr-2" style="font-size:23px"/>
      </div>
      <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>-->
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Vue from "vue";
import { Drawer, Icon } from "ant-design-vue";
export default {
  components: {
    [Drawer.name]: Drawer,
    [Icon.name]: Icon
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("layoutStore", ["collapse_flag"])
    // 或者是 ...mapState("layoutStore", {collapse_flag:state=>state.collapse_flag})

    // ...mapGetters({
    //   collapse_flag: "layoutStore/menu_collapse_flag"
    // })
  },
  methods: {
    ...mapActions({
      toggle_menu: "layoutStore/toggle_menu",
      close_menu: "layoutStore/close_menu",
      testThis: "layoutStore/test123"
    })
  }
};
</script>

<style lang="scss">
.drawer-menu {
  .ant-drawer-body {
    padding-top: 56px;
  }
}
</style>
