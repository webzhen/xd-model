<template>
    <div>
        123
        <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="home" @click.native="gohome">
                <img v-if="selectedTab=='home'" src="../assets/images/home_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/home_disable.png" slot="icon" alt />
                家政保洁
            </mt-tab-item>
            <mt-tab-item id="order">
                <img v-if="selectedTab=='order'" src="../assets/images/order_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/order_disable.png" slot="icon" alt />
                订单
            </mt-tab-item>
            <mt-tab-item id="my" @click.native="gomy">
                <img v-if="selectedTab=='my'" src="../assets/images/me_enable.png" slot="icon" alt />
                <img v-else src="../assets/images/me_disable.png" slot="icon" alt />
            我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedTab:"order"
        }
    },
    methods:{
        gohome(){
            this.$router.push("/")
        },
        gomy(){
            this.$router.push("/my")
        }
    }
}
</script>