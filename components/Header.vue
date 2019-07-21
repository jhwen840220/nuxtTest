<template>
  <div class="main_header">
    <div class="menu_burger" @click="updateData({collapse_flag: !collapse_flag })">
      <i :class="['i1',collapse_flag && 'closed']"/>
      <i :class="['i2',collapse_flag && 'closed']"/>
      <i :class="['i3',collapse_flag && 'closed']"/>
    </div>
    <nav class="navbar">
      <div class="navbar_left">   
        <nuxt-link :to="`/${locale}`">
          <div class="logo" ></div>
        </nuxt-link>
        <div class="navbar-search input-group">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </div>
      </div>

      <a-drawer
        placement="right"
        :zIndex="1025"
        :closable="false"
        @close="updateData({collapse_flag:false})"
        :visible="collapse_flag"
        wrapClassName="drawer-menu"
      >
        <div @click="updateData({collapse_flag:false})">
          <nuxt-link class="nav-link" :to="`/${locale}/login`">{{$t('login')}}</nuxt-link>
        </div>
        <div @click="updateData({collapse_flag:false})">
          <nuxt-link class="nav-link" :to="`/${locale}/product`">Product</nuxt-link>
        </div>
      </a-drawer>

      <!-- <ul class="navbar_menu mr-auto mb-0">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/product">Product</nuxt-link>
        </li>
      </ul> -->

      <div class="navbar_right">
        <a-icon type="plus" class="mr-2" style="font-size:23px" @click="increase"/>
        <a-icon type="fire" class="mr-2" style="font-size:23px" @click="test"/>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
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
    ...mapState("layoutStore", ["collapse_flag", "click_count"]),
    ...mapState(["locale"]),
    ...mapGetters({
      click_count_desc: "layoutStore/click_count_desc"
    })
  },
  methods: {
    ...mapActions({
      update_data: "basicAction/update_data"
    }),
    increase() {
      this.$store.commit("layoutStore/increase_count");
    },
    updateData(data) {
      this.update_data({ storeName: "layoutStore", data: data });
    },
    test() {
      const route = this.$route;
      if (route.params.lang) {
        const toReplace =
          "^/" +
          route.params.lang +
          (route.fullPath.indexOf("/" + route.params.lang + "/") === 0
            ? "/"
            : "");
        const re = new RegExp(toReplace);
        this.$router.push(route.fullPath.replace(re, "/"));
      } else {
        const toReplace = "^/" + (route.fullPath.indexOf("/") === 0 ? "/" : "");
        const re = new RegExp(toReplace);
        this.$router.push("/en" + route.fullPath.replace(re, "/"));
      }
    }
  }
};
</script>

<style lang="scss">
.drawer-menu {
  .ant-drawer-body {
    padding-top: 56px;
  }
}
.sticky-top {
  z-index: 1001;
}
</style>
