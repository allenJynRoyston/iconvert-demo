<template lang='pug'>
  .container
    slot
</template>

<style lang='scss' scoped>
  @import "../assets/css/sass_mq.scss";

  .container{
    display: flex;    
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    width: calc(100% - 10px);
    padding: 10px 5px;
 
    @include mq($from: desktop) {
      max-width: calc(1200px - 200px);
      padding: 50px 100px;   
    }   

  }
</style>