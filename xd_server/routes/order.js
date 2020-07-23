const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//用户下单
router.post("/neworder",(req,res)=>{
    let obj=req.body;
    let sql='INSERT INTO xd_order SET ?';
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows==0){
            res.send({msg:"下单失败",code:300})
        }else{
            res.send({msg:"下单成功",code:200})
        }
    })
});
//获取用户订单列表
router.get("/getorder",(req,res)=>{
    let obj=req.query;
    let sql='SELECT did,pos,ordertime,servertime,title,status FROM xd_order WHERE user_id=? ORDER BY did DESC';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        res.send({msg:"查询成功",code:200,result:result})
    })
});
//获取订单详情
router.get("/descri",(req,res)=>{
    let obj=req.query;
    let sql='SELECT did,status,ordertime,servertime,title,total,remark,pos,phone FROM xd_order WHERE did=?';
    pool.query(sql,[obj.did],(err,result)=>{
        if(err) throw err;
        res.send({msg:"查询成功",code:200,result:result[0]})
    })
})
module.exports=router;