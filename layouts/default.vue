<template>
  <el-container class="layout-default">
    <el-header height='197px'><my-header></my-header></el-header>
    <el-main>
      <div>
        <Nuxt />
      </div>
    </el-main>
    <el-footer height="100%"><my-footer/></el-footer>
  </el-container>
</template>

<script>
  import myHeader from '@/components/public/header/index'
  import myFooter from '@/components/public/footer/footer'
  export default{
    components:{
      myHeader,
      myFooter
    }
  }
</script>
<style>

</style>
