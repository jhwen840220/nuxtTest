<template>
  <div>
    <no-ssr placeholder="123456aaa">
      <Logo/>
    </no-ssr>

    <section class="container">
      <nuxt-child/>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: { Logo },
  layout: "front",
  /* Both */
  data() {
    return {};
  },
  mounted() {
    console.log(this.$children);
  }
};
</script>