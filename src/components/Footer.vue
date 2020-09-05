<template lang='pug'>
  footer.footer
    span Built by Allen Royston ❤️ 
      a(href="https://www.github.com/allenRoyston" target="_blank") visit my Github!
</template>

<style lang='scss' scoped>
  @import '../assets/css/sass_mq.scss';

  .footer{
    font-size: 14px;
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: black;    
    color: white;

    @include mq($from: desktop) {
      font-size: 12px;
    }   

    a{
      color: white;
      text-decoration: none;
    }
  }    
</style>