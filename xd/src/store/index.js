import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用于保存用户姓名
    uname: localStorage.getItem("uname") || sessionStorage.getItem("uname") ? localStorage.getItem("uname") || sessionStorage.getItem("uname") : "",
    //用于保存用户id
    uid: localStorage.getItem("uid") || sessionStorage.getItem("uid") ? localStorage.getItem("uid") || sessionStorage.getItem("uid") : "",
    //添加
    addInfo: ""
  },
  mutations: {
    setUname(state, uname) {
      state.uname = uname
    },
    setUid(state, uid) {
      state.uid = uid
    },
    setInfo(state, info) {
      state.addInfo = info;
      console.log(1, state.addInfo)
    }
  },
  actions: {
    login(context, user) {
      console.log(user)
      return new Promise((resolve, reject) => {
        axios.post("/user/login", `username=${user.username}&upwd=${user.upwd}`).then(res => {
          context.commit("setUname", res.data.result.username);
          resolve(res)
        })
      })
    }
  },
  modules: {
  }
})
