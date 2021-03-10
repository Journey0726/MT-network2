const state = ()=>({position:{}})

const mutations = {
  setPostion(state,val){
    state.position = val
  }
}
const actions = {
  setPosition:({
    commit
  },position)=>{
    commit('setPosition',position)
  }
}

export default {
  namespaced:true,
  actions,
  mutations
}