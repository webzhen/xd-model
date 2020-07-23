<template>
  <div class="box">
      <mt-header title="新建地址">
          <router-link to="/myAdress" slot="left">
            <mt-button icon='back'></mt-button>
          </router-link>
      </mt-header>
    <div class="container">
      <mt-field v-model="uname" label="联系人：" type="text" placeholder="例：王先生" class="border"></mt-field>
      <mt-field v-model="phone" label="手机号码：" type="text" class="border"></mt-field>
      <mt-field v-model="add" label="服务地址：" type="text" placeholder="请选择服务区域" class="border"></mt-field>
      <mt-field v-model="pos" label="详细地址：" type="text" placeholder="详细地址,例:1号楼2单元102室" class="border"></mt-field>
    </div>
    <div id="btnbox">
        <mt-checklist :options="[{label:'设为默认地址',value:1}]" v-model="loves"></mt-checklist>
    </div>
    <div class="btn-container">
        <mt-button size="large" @click="newadd">保存新建地址</mt-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            loves:[],
            uname:"",
            phone:"",
            add:"",
            pos:""
        }
    },
    computed:{
        ...mapState(["uid"])
    },
    methods:{
        newadd(){
            console.log(this.uid)
            this.axios.get("/address/new",{params:{
                dname:this.uname,
                pos:this.add+this.pos,
                phone:this.phone,
                is_default:this.loves[0]==1?1:0,
                user_id:this.uid
            }
            }).then(res=>{
                console.log(res.data)
                if(res.data.code==200){
                    this.$router.push("/myAdress")
                }
            })
        }
    }
}
</script>
<style scoped>
.border {
  border-bottom: 1px solid #aaaaaa;
}
.container{
    padding: 10px;
    background: #ffffff;
}
.box{
    background: #eaeaea;
}
.btn-container{
    width: 80%;
    margin: 0 auto;
}
.btn-container  .mint-button--default {
    color: #fff;
    background-color: #c0a062;
    box-shadow: 0 0 1px #b8bbbf;
}
#btnbox{
    background: #eaeaea;
}
#btnbox .mint-cell {
    background-color: #eaeaea;
    
}
</style>