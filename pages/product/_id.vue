<template>
  <section class="container">
    <div>
      <div class="test">{{title}}</div>
      <div>{{test}}</div>
      <div>{{$store.state.testStatus}}</div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  layout: "front",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      testStatus: "get_status"
    })
  },
  middleware: ["testMiddleware"],
  //   plugins: [`~/plugins/api.js`],
  /* Server, Nuxt Hooks */
  async asyncData({ params }) {
    let { data } = await axios.post("https://www.thef2e.com/api/isSignUp", {
      email: "hexscholl@test.com"
    });

    return { test: data, title: params.id };
  },

  validate({ params, query, store }) {
    /* */
    return /^\d+$/.test(params.id);
  },
  fetch({ store, params }) {
    const result = "報名結果是 123456";
    store.dispatch("getStatus", result);
  },

  /* Client, Vue Hooks */
  mounted() {
    console.info(this.title); /* 1 */
  }
};
</script>
