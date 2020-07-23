const express=require('express');
const cors=require('cors');
//引入body-parser中间件
const bodyParser=require('body-parser');
const indexRouer=require('./routes/index.js');
const userRouter=require('./routes/user.js');
const detailsRouter=require('./routes/details.js');
const addressRouter=require('./routes/address.js');
const orderRouter=require('./routes/order.js');
const app=express();
app.listen(4000,()=>{
    console.log('服务器启动')
});
app.use(bodyParser.urlencoded({
	extended:false
}) );
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080','http://127.0.0.1:5500']
}));
app.use('/index',indexRouer);
app.use('/user',userRouter);
app.use('/details',detailsRouter);
app.use('/address',addressRouter);
app.use('/order',orderRouter);