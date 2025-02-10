<template>
  <div id="app">
    <Header/>
    <!-- BANNER BLOG -->
    <div class="banner-article">
      <div class="banner-article__img"></div>
    </div>
    <BlogDetails/>
    <FooterComp/>
  </div>
</template>

<script>
import BlogDetails from './components/BlogDetails.vue'
import FooterComp from './components/FooterComp.vue'
import Header from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {
    BlogDetails,
    Header,
    FooterComp
  }
}
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
