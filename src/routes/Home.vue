<template lang="pug"> 
  div
    h1 Campaigns
    hr
    .list-items
      .item(v-if='campaigns.data.length > 0' v-for='data, index in campaigns.data')
        Card(:data='data' :image="`https://picsum.photos/id/${index + 100}/640/480`" :callback="onClick" )        
    .modal(v-if='!!renderHtml')
      span(v-html="renderHtml")
      .modal-close
        a(@click='closePreview') Close preview
</template>

<script>
import { mapState } from 'vuex';
import {Card} from '../components/_index'


export default { 
  data(){    
    return{
      renderHtml: null
    }
  },
  components: {
    Card
  },
  computed: mapState([
      'campaigns'
  ]),
  mounted () {
    this.$store.dispatch('FETCH_campaigns')
  },  
  methods: {
    onClick(html) {
      this.renderHtml = html
    },
    closePreview(){
      this.renderHtml = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/sass_mq.scss';

  .list-items{
    display: flex;
    flex-direction: column;  

    @include mq($from: desktop) {
      flex-direction: row;      
    }  
    
    .item{
      width: calc(100% - 20px);
      padding: 10px;
    }
  }

  .modal{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .8);
  }

  .modal-close{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 2;
    text-align: right;
    background: black;
    padding: 10px; 
  }
</style>
