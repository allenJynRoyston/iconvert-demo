<template lang='pug'>
  .card(:class='{expired: !data.is_enabled}')
    .cardimg(:style='bgImage()')
      .title {{data.name}}
    .cardcontent
      .date
        h3(v-if='!!data.ends_at && !!data.starts_at') 
          | Offer good till 
          span.bold {{data.starts_at | moment("DD MMM")}} 
          | till 
          span.bold {{data.ends_at | moment("DD MMM")  }} 
          | of 
          span.bold {{data.ends_at | moment("YYYY")}}.        
        h3(v-else) Continious
        hr
      .description
        p {{data.description || 'No description'}}
      .voucher(v-if='!!data.ends_at && !!data.starts_at')         
        a(v-if='!showVoucher' @click='showVoucher = !showVoucher') Click to see more!
        span.bold(v-else) {{data.voucher_code}}
        br
        span(v-if='!!data.ends_at && !!data.starts_at && showVoucher') Expires in {{data.voucher_code_expires_days}} days!
    .cardfooter(@click="() => {onClick(data)}")
      span.font-1 Show Offer 
</template>

<script>
export default {
  data(){
    return{
      showVoucher: false
    }
  },
  props: {
    data:{
      type: Object,
      default: function () {
        return {}
      }
    },
    image:{
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default: function () {
        return {}
      }      
    }    
  },
  methods: {
    bgImage(){
      const {image} = this;
      return `background: url('${image}') no-repeat center center; background-size: cover;-webkit-background-size: cover;-moz-background-size: cover;`
    },
    onClick(data) {
      this.callback(data.html)
    }    
  }
}
</script>

<style lang='scss' scoped>
  @import '../assets/css/sass_mq.scss';

  .card {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    transition: 0.5s;
    

    &.expired{
      opacity: 0.5;
      transform: scale(1.0)!important;
      pointer-events: none
    }

    &:hover{
      transform: scale(1.05)
    }
  }

  .cardimg {
    width: calc(100% - 20px);    
    height: 250px;  
    padding: 10px; 
    font-size: 18px;   

    @include mq($from: desktop) {
      height: 200px;  
      font-size: 16px;
    }         
  }

  .cardcontent {
    width: calc(100% - 20px);
    height: 300px;
    padding: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    font-size: 12px;

    h3{
      margin: 0;
      padding: 0;
    }

    .date h3{
      font-size: 18px;
      text-align: center;
      padding-top: 10px;

      @include mq($from: desktop) {
        font-size: 14px;
        text-align: left;
        padding-top: 0;
      }         
    }

    .title h3{
      font-size: 22px;
      @include mq($from: desktop) {
        font-size: 16px;
      }       
    }
  }

  .voucher{
    a{
      cursor: pointer
    }
  }


  .cardfooter {
    font-size: 12px;
    background: rgb(235, 235, 235);
    padding: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .bold{
    font-weight: bold
  }


</style>