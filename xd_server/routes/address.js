const express=require('express');
const pool=require('../pool.js');

const router=express.Router();
// 获取用户地址列表
router.get("/",(req,res)=>{
    let obj=req.query;
    let sql='SELECT aid,dname,pos,phone,is_default FROM xd_address WHERE user_id=? ORDER BY is_default DESC';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        res.send({msg:"查询成功",code:200,result:result});
    })
});
//获取用户某条地址的详细信息
router.get("/getaddress",(req,res)=>{
    let obj=req.query;
    console.log(obj);
    let sql='SELECT aid,phone,pos,dname FROM xd_address WHERE aid=?';
    pool.query(sql,[obj.aid],(err,result)=>{
        if(err) throw err;
        res.send({msg:"查询成功",code:200,result:result})
    })
})
//用户修改地址信息
router.get("/update",(req,res)=>{
    let obj=req.query;
    let sql='UPDATE xd_address SET ? WHERE aid=?';
    pool.query(sql,[obj,obj.aid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({msg:"修改成功",code:200});
        }
        
    })
});
//下单时获取用户默认地址
router.post("/default",(req,res)=>{
    let obj=req.body;
    let sql='SELECT aid,dname,pos,phone FROM xd_address WHERE is_default=true && user_id=?';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        res.send({msg:"查询成功",code:200,result:result[0]})
    })
});
//用户修改默认地址
router.get("/updatedefault",(req,res)=>{
    let obj=req.query;
    let sql='UPDATE xd_address SET is_default=false WHERE is_default=true && user_id=? ';
    pool.query(sql,[obj.uid],(err,result)=>{
        if(err) throw err;
        let sql='UPDATE xd_address SET is_default=true WHERE aid=?';
        pool.query(sql,[obj.aid],(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send({msg:"修改成功",code:200})
        })
    })
})
//用户删除地址
router.get("/del",(req,res)=>{
    let obj=req.query;
    let sql='DELETE FROM xd_address WHERE user_id=? AND aid=?';
    pool.query(sql,[obj.uid,obj.aid],(err,result)=>{
        if(result.affectedRows>0){
            res.send({msg:"删除成功",code:200})
        }else{
            res.send({msg:"删除失败",code:300})
        }
    })
})
//用户新增地址信息
router.get("/new",(req,res)=>{
    let obj=req.query;
    if(obj.is_default=="1"){
        let sql='UPDATE xd_address SET is_default=false WHERE is_default=true && user_id=? ';
        pool.query(sql,[obj.uid],(err,result)=>{
            if(err) throw err;
        })
    }
    let sql="INSERT INTO xd_address SET ?";
            pool.query(sql,[obj],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.send({msg:"添加成功",code:200})
                }else{
                    res.send({msg:"添加失败",code:300})
                }
            })
    
})
module.exports=router;