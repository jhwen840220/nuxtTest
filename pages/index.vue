<template>
  <div class="w-100">
    <section class="search-container row justify-content-between">
      <div class="blocks search-block col-12 col-md-6">
        <div class="search-frame">
          <h5>Lorem ipsum dolor sit amet consectetur.</h5>
          <div class="search-group">
            <p class="search-title text-left">關鍵字</p>
            <a-input size="large" placeholder="請輸入欲搜尋關鍵字"></a-input>
          </div>
          <div class="search-group">
            <p class="search-title text-left">縣市/地區</p>
            <div style="display:flex">
            <a-select style="flex: 1" defaultValue="tainan">
              <!-- <a-select-option key="city" value="tainan">台南市</a-select-option> -->
            </a-select>
            <a-select style="flex: 1" defaultValue="tainan">
              <!-- <a-select-option key="city" value="tainan">台南市</a-select-option> -->
            </a-select>
            </div>
          </div>
          <div class="search-group">
            <p class="search-title text-left">標籤</p>
            <a-input placeholder="請輸入標籤"></a-input>
          </div>
          <div class="search-group text-right m-0">
            <button type="button" class="btn btn-primary btn-lg">Submit</button>
            </div>
        </div>
      </div>
      <div class="blocks trend-block col-12 col-md-4">
        <div class="trend-frame up">
          <h6 class="p-2 text-left">本周熱門 Hashtags</h6>
          <div class="trend-group text-left">
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainan
              </a>
              <span class="count-badge">5,456</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanfoodie
              </a>
              <span class="count-badge">2,456</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanspotfdfknnblnmklmsklmdftainanspotfdfknnblnmklmsklmdftainanspotfdfknnblnmklmsklmdftainanspotfdfknnblnmklmsklmdftainanspotfdfknnblnmklmsklmdftainanspotfdfknnblnmklmsklmdf
              </a>
              <span class="count-badge">1,456</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanbnb
              </a>
              <span class="count-badge">25.1K</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanlunch
              </a>
              <span class="count-badge">333</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanselfie
              </a>
              <span class="count-badge">789</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanselfie
              </a>
              <span class="count-badge">789</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanselfie
              </a>
              <span class="count-badge">789</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanselfie
              </a>
              <span class="count-badge">789</span>
            </div>
            <div class="tag-block">
              <a href="#" class="text-truncate">
              #tainanselfie
              </a>
              <span class="count-badge">789</span>
            </div>
          </div>
        </div>
        <div class="trend-frame down">
          <h6 class="p-2 text-left">附近最新打卡地點</h6>
          <div class="trend-group text-left">
            <a href="#" class="spot-block">📌 Tainan, Taiwan</a>
            <a href="#" class="spot-block">📌 Tainan, Taiwan</a>
            <a href="#" class="spot-block">📌 Tainan, Taiwan</a>
            <a href="#" class="spot-block">📌 Tainan, Taiwan</a>
            <a href="#" class="spot-block">📌 Tainan, Taiwan</a>
          </div>
        </div>
      </div>
      <!-- <form role="form" @submit="login" method="post">
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
      </form> -->
      <!-- <button @click="getGameList">123</button> -->
    </section>
    <section class="latest-container my-3">
      <h4>地區精選</h4>
      <div class="row justify-content-around h-100">
        <div class="col-md-4 bg-success p-3" v-for="item in arr6" :key="item" >
          <div class="spot-img">
            <img src="https://i.imgur.com/9OWk2dp.jpg"/>
            <div class="heartCount">❤ 123,456</div>
          </div>
          <div class="spot-desc">
            <h5 class="location text-left">📌homeeee</h5>
            <div class="d-flex justify-content-between align-items-center">
              <div class="username d-flex align-items-center">
                <div class="userHead mr-2"></div>
                <span>ted_pig</span>
              </div>
              <div class="timing">7 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="quick-container mb-3">
      <h4>季節精選</h4>
      <div class="row">
        <div class="col-md-3 p-3 bg-warning" v-for="item in arr4" :key="item">
          <div class="quick-block">
          我愛夏天
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Logo from "~/components/Logo.vue";
import { message, Icon, Input, Select } from "ant-design-vue";
import { callLogin, callGetGameList } from "~/actions/api";
export default {
  components: {
    Logo,
    [message.name]: message,
    [Icon.name]: Icon,
    [Input.name]: Input,
    [Select.name]: Select
  },
  layout: "front",
  data() {
    return {
      account: "",
      password: "",
      arr3: [0, 1, 2],
      arr4: [0, 1, 2, 3],
      arr6: [0, 1, 2, 3, 4, 5]
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
