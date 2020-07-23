const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//获取首页轮播图数据
router.get('/carousel',(req,res)=>{
    let sql='SELECT cid,img,title,href FROM xd_index_carousel';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"什么也没找到",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result})
        }
    });

});
//获取热门服务的产品
router.get('/topserver',(req,res)=>{
    let sql='SELECT tid,img,href FROM xd_index_topserver';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"什么都没找到",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result})
        }
    })
});
//获取服务的分类
router.get('/siftserver',(req,res)=>{
    let sql='SELECT fid,img,title FROM xd_index_siftserver ORDER BY fid';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"什么都没找到",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result})
        }
    })
});
//获取首页的产品数据
router.get("/product",(req,res)=>{
    let sql='SELECT pid,img1,title,sales,price,sift_id,unit FROM xd_products';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"什么都没找到",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result})
        }
    })
})
module.exports=router;