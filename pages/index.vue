<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">測試</h1>
      <nuxt-link to="/login">Login</nuxt-link>
      <nuxt-link to="/product">Product</nuxt-link>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  layout: "front"
};
</script>
