<template lang='pug'>
  header.header
    h1 {{data.value}}
</template>

<script>
export default {
  props: {
    data:{
      type: Object,
      default: function () {
        return {
          value: 'Header'
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  h1{
    padding: 0; margin: 0
  }
  .header{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    background-color: black;    
    color: white;
  }    
</style>

