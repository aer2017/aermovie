<template>
  <div id="main">
      <Header title="我的喵喵"/>
      <Login />
      <TagBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TagBar from '@/components/TagBar'
import Login from '@/components/Login'
export default {
    name:'Mine',
    components:{
        Header,
        TagBar,
        Login
    }
}
</script>

<style lang="scss" scoped>

</style>