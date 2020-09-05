<template lang='pug'>
  nav
    router-link(to='/' ) Home
    router-link(to='/contact' ) Contact
    router-link(to='/about' ) About
</template>

<style lang='scss'>
  nav{
    width: calc(100% - 20px);
    padding: 10px; 
    a{
      margin-right: 10px;
    }
  }
</style>