<template>
  <div>
    <router-view></router-view>
    <Fotter v-show="$route.meta.isFooterShow"/>
  </div>
</template>

<script>
import Fotter from './components/fotter/Fotter';
export default {
  name: 'app',
  components: {
    Fotter
  },
  mounted() {
    //console.log(this)
  },
  updated() {
    //console.log(this)
  },
}
</script>

<style>
</style>
