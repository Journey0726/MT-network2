import Router from 'koa-router';
import axios from './utils/axios'
let router = new Router({prefix: '/geo'})

const sign = 'abcd'

router.get('/getPosition',async ctx=>{
  let {status,data} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  console.log(data,status);
  ctx.body = {
    name:'ζεδΊ'
  }
})

export default router