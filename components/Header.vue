<template>
  <div>
    <div class="menu_burger" @click="updateData({collapse_flag: !collapse_flag })">
      <i :class="['i1',collapse_flag && 'closed']"/>
      <i :class="['i2',collapse_flag && 'closed']"/>
      <i :class="['i3',collapse_flag && 'closed']"/>
    </div>
    <nav class="navbar sticky-top">
      <nuxt-link
        class="navbar-brand"
        :to="`/${$route.params.lang}`"
        style="color:orange"
      >Home({{click_count_desc}})</nuxt-link>
      <a-drawer
        placement="right"
        :zIndex="1025"
        :closable="false"
        @close="updateData({collapse_flag:false})"
        :visible="collapse_flag"
        wrapClassName="drawer-menu"
      >
        <div @click="updateData({collapse_flag:false})">
          <nuxt-link class="nav-link" :to="`/${$route.params.lang}/login`">Login</nuxt-link>
        </div>
        <div @click="updateData({collapse_flag:false})">
          <nuxt-link class="nav-link" :to="`/${$route.params.lang}/product`">Product</nuxt-link>
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
        <a-icon type="plus" class="mr-2" style="font-size:23px" @click="increase"/>
        <a-icon type="fire" class="mr-2" style="font-size:23px"/>
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
