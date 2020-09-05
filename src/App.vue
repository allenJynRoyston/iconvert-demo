<template lang='pug' >
  #app
    Header(:data={value: "iConvert Demo"})
    SiteNav
    Container      
      router-view
    Footer
</template>

<script>
import 'regenerator-runtime/runtime' // allows for async/await 
import {Header, Footer, Container, SiteNav} from './components/_index'

export default {
  components: {
    Header, 
    Footer, 
    Container, 
    SiteNav   
  }
}
</script>


<style lang='scss'>
  @import './assets/css/global.scss';
</style>