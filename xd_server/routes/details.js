const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
//获取产品的详情页信息
router.get("/",(req,res)=>{
    let obj=req.query;
    let sql='SELECT pid,img1,title,sales,price,unit,img2,img3,img4,img5 FROM xd_products WHERE pid=?';
    pool.query(sql,[obj.pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"查询失败",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result[0]})
        }
    })
});
//获取产品的SKU页面的信息
router.get('/sku',(req,res)=>{
    let obj=req.query;
    let sql='SELECT a.id,a.title,a.price,b.img1,b.unit FROM xd_products_spec AS a LEFT JOIN xd_products AS b ON a.product_id=b.pid WHERE product_id=?';
    pool.query(sql,[obj.pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({msg:"查询失败",code:300})
        }else{
            res.send({msg:"查询成功",code:200,result:result})
        }
    });

})
module.exports=router;