const express=require('express');
const pool=require('../pool.js');

const router=express.Router();
// 注册用户
router.post("/regist",(req,res)=>{
    let obj=req.body;
    let sql='SELECT id FROM xd_user WHERE username=?';
    pool.query(sql,[obj.username],(err,result)=>{
        if(err) throw err;
        //如果用户名不存在
        if(result.length==0){
            let sql='INSERT INTO xd_user SET ?';
            //就注册该用户
            pool.query(sql,[obj],(err,result)=>{
                if(err) throw err;
                //如果注册失败，则返回0
                if(result.affectedRows==0){
                    res.send({msg:"注册失败",code:0})
                }else{
                    //否则注册失败就返回1
                    res.send({msg:"注册成功",code:1});
                }
            })
        }else{
            //如果用户名存在，就返回2
            res.send({msg:"用户名存在",code:2})
        }
    })
});
// 用户登录
router.post("/login",(req,res)=>{
    let obj=req.body;
    let sql ='SELECT id,username FROM xd_user WHERE username=? && upwd=?';
    pool.query(sql,[obj.username,obj.upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            //如果没找到该用户，则返回300，登陆失败
            res.send({msg:"查询失败",code:300})
        }else{
            //否则就登录成功,返回查询结果
            res.send({msg:"查询成功",code:200,result:result[0]})
        }
    })
});
//获取个人资料
router.get("/person",(req,res)=>{
    let obj=req.query;
    let sql ='SELECT id,username,avatar,nickname,balance FROM xd_user WHERE id=?';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            //如果没找到该用户，则返回300，登陆失败
            res.send({msg:"查询失败",code:300})
        }else{
            //否则就登录成功,返回查询结果
            res.send({msg:"查询成功",code:200,result:result[0]})
        }
    })
});
//用户充值金额
router.get("/recharge",(req,res)=>{
    let obj=req.query;
    let sql='SELECT balance FROM xd_user WHERE id=?';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        if(result.length==1){
            let money=parseInt(result[0].balance)+parseInt(obj.money);
            let sql='UPDATE xd_user SET balance=? WHERE id=?';
            pool.query(sql,[money,obj.uid],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.send({msg:"充值成功",code:200})
                }else{
                    res.send({msg:"充值失败",code:300})
                }
            })
        }
    })
})
module.exports=router;