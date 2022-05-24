<template>
<div>
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{FooterGuide}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
