<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd><nuxt-link to="/my">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/my">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/my">抵用劵</nuxt-link></dd>
          <dd><nuxt-link to="/my">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/my">手机APP</nuxt-link>
      </li>

      <li class="list bd">
        <nuxt-link to="/my">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/my">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/my">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/my">免费手机开店</nuxt-link></dd>
          <dd><nuxt-link to="/my">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/my">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
           <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>经济型酒店</dd>
            <dd>公寓</dd>
            <dd>青年旅社</dd>
            <dd>农家院</dd>
            <dd>火车票</dd>
            <dd>主题酒店</dd>
            <dd>豪华酒店</dd>
            <dd>度假酒店</dd>
            <dd>商务酒店</dd>
            <dd>客栈</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃</dd>
            <dd>烧烤</dd>
            <dd>自助餐</dd>
            <dd>代金券</dd>
          
          
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热门影院</dd>
            <dd>最受期待电影</dd>
            <dd>国内票房榜</dd>
            <dd>电影排行榜</dd>
          </dl>
          <dl class="app">
            <dl>手机应用</dl>
            <dd><a href="#"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1910405657,4217613992&fm=11&gp=0.jpg" alt=""></a></dd>
            <dd><a href="#"><img src="data:image/jpeg;base64,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" alt=""></a></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>