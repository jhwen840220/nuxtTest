<template>
  <section class="container">
    <logo class="mb-3"/>
    <form role="form" @submit="login" method="post">
      <div class="col-md-12 input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <a-icon type="user"/>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="帳號" v-model="account">
      </div>
      <div class="col-md-12 input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <a-icon type="key"/>
          </span>
        </div>
        <input type="password" class="form-control" placeholder="密碼" v-model="password">
      </div>
      <button>{{$t('login')}}</button>
    </form>
    <button @click="getGameList">123</button>
    <div>{{list}}</div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Logo from "~/components/Logo.vue";
import { message, Icon } from "ant-design-vue";
import { callLogin, callGetGameList } from "~/actions/api";
export default {
  components: {
    Logo,
    [message.name]: message,
    [Icon.name]: Icon
  },
  layout: "front",
  data() {
    return {
      account: "",
      password: ""
    };
  },
  computed: {
    ...mapState("layoutStore", ["list"])
  },
  methods: {
    callLogin,
    ...mapActions({
      onSubmit: "basicAction/onSubmit",
      getList: "basicAction/getList",
      refreshToken: "refreshToken"
    }),
    login(e) {
      if (e) e.preventDefault();
      this.onSubmit({
        api: callLogin,
        postData: {
          account: this.account,
          password: this.password,
          site_id: 1,
          ip_data: {
            as: "AS3462 Chunghwa Telecom Co., Ltd.",
            city: "台北市",
            country: "台湾",
            countryCode: "TW",
            isp: "HINET",
            lat: 25.0478,
            lon: 121.5318,
            org: "Chunghwa Telecom Co. Ltd.",
            query: "60.251.26.1",
            region: "TPE",
            regionName: "台北市",
            status: "success",
            timezone: "Asia/Taipei",
            zip: ""
          },
          system: "win/chrome",
          host: "localhost:3006",
          device: 1
        }
      })
        .then(res => {
          res && message.success(res.text);
          this.refreshToken();
          this.$router.push({ path: `/${this.$store.state.locale}/product` });
        })
        .catch(errRes => errRes && message.error(errRes.text));
    },
    getGameList(e) {
      this.getList({ storeName: "layoutStore", api: callGetGameList });
    }
  }
};
</script>
