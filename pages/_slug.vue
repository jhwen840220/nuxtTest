<template>
  <div>
    <Logo/>
    <nuxt-child/>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  layout: "front",
  components: { Logo }
};
</script>
