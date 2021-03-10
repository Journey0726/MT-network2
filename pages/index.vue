<template>
  <div class="page-index">
   <el-row>
     <el-col :span="5"> <my-menu/></el-col>
     <el-col :span="19">
      <life/>
     </el-col>
     <el-col :span="24"><artistic/></el-col>
   </el-row>
   <el-row></el-row>
  </div>
</template>

<script>
import myMenu from '@/components/index/menu.vue'
import life from '@/components/index/life.vue'
import artistic from '@/components/index/artistic.vue'
export default {
  components:{
    myMenu,life,artistic
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/index/index.scss';
</style>
