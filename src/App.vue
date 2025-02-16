<template>
  <div id="app">
    <header-comp />
    <router-view></router-view>
    <footer-comp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
