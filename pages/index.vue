<template>
  <section class="container">
    <logo class="mb-3"/>
    <form
      role="form"
      @submit="(e)=>{if (e)  e.preventDefault() ;login({account:account,password:password})}"
      method="post"
    >
      <div class="col-md-12 input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="帳號" v-model="account">
      </div>
      <div class="col-md-12 input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="password" class="form-control" placeholder="密碼" v-model="password">
      </div>
      <button>登入</button>
    </form>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  layout: "front",
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    ...mapActions({
      login: "layoutStore/login"
    })
  }
};
</script>
