-- 设置服务器端编码为utf-8
SET NAMES UTF8;
-- 如果存在数据库xd，丢弃
DROP DATABASE IF EXISTS xd;
-- 创建数据库xd
CREATE DATABASE xd CHARSET=UTF8;
-- 进入数据库xd
USE xd;

-- 首页轮播图列表
CREATE TABLE xd_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT  COMMENT '轮播图id',
  img VARCHAR(128) COMMENT '轮播图路径',
  title VARCHAR(64) COMMENT '轮播图广告标题',
  href VARCHAR(128) COMMENT '轮播图链接'
);
INSERT INTO xd_index_carousel VALUES
(NULL,'banner1.jpg','轮播广告1','/Recharge'),
(NULL,'banner2.jpg','轮播广告2','/Recharge'),
(NULL,'banner3.jpg','轮播广告3','/Recharge');

-- 首页热门服务列表
CREATE TABLE xd_index_topserver(
  tid INT PRIMARY KEY AUTO_INCREMENT COMMENT '热门服务分类id',
  img VARCHAR(128) COMMENT '图片路径',
  href VARCHAR(128) COMMENT '产品链接'
);

INSERT INTO xd_index_topserver VALUES
(NULL,'1f001.jpg','/details/1'),
(NULL,'1f002.jpg','/details/3');

-- 首页精选服务列表
CREATE TABLE xd_index_siftserver(
  fid INT PRIMARY KEY AUTO_INCREMENT COMMENT '精选服务分类id',
  img VARCHAR(128) COMMENT '精选服务分类图标',
  title VARCHAR(64) COMMENT '精选服务分类标题'
);
INSERT INTO xd_index_siftserver VALUES
(NULL,'2f001.png','保洁服务'),
(NULL,'2f002.png','家电清洗'),
(NULL,'2f003.png','专项服务'),
(NULL,'2f004.png','家政服务');


-- 产品列表
CREATE TABLE xd_products(
  pid INT PRIMARY KEY AUTO_INCREMENT COMMENT '产品的id',
  img1 VARCHAR(128) COMMENT '产品的首图',
  title VARCHAR(64) COMMENT '产品的标题',
  sales INT COMMENT '产品的销量',
  price INT COMMENT '产品的单价',
  unit VARCHAR(16) COMMENT '产品的单位',
  sift_id INT COMMENT '外键，服务分类id',
  img2 VARCHAR(128) COMMENT '产品的详情图1',
  img3 VARCHAR(128) COMMENT '产品的详情图2',
  img4 VARCHAR(128) COMMENT '产品的详情图3',
  img5 VARCHAR(128) COMMENT '产品的详情图4'
);

INSERT INTO xd_products VALUES
(NULL,'3f001.jpg','家庭日常保洁',43399,40,'元/时',1,'1f001_1f002_3f001_3f003_d2.png','1f001_1f002_3f001_3f003_d3.png','1f001_1f002_3f001_3f003_d4.png',null),
(NULL,'3f002.jpg','擦玻璃',49327,17,'元/平方米',1,'3f002_d2.png','3f002_d3.png','3f002_d4.png',null),
(NULL,'3f003.jpg','深度保洁',21982,150,'元/次起',1,'1f001_1f002_3f001_3f003_d2.png','1f001_1f002_3f001_3f003_d3.png','1f001_1f002_3f001_3f003_d4.png',null),
(NULL,'4f001.jpg','油烟机',45882,135,'元/台起',2,'4f001_d2.png','4f001_d3.png','4f001_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'4f002.jpg','冰箱清洗',42668,149,'元/台起',2,'4f002_d2.png','4f002_d3.png','4f002_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'4f003.jpg','空调清洗',48197,119,'元/台起',2,'4f003_d2.png','4f003_d3.png','4f003_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'4f004.jpg','洗衣机清洗',45112,110,'元/台起',2,'4f004_d2.png','4f004_d3.png','4f004_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'4f005.jpg','热水器',46352,130,'元/台起',2,'4f005_d2.png','4f005_d3.png','4f005_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'4f006.jpg','波轮洗衣机',45395,130,'元/台起',2,'4f006_d2.png','4f006_d3.png','4f006_d4.png','4f001_4f002_4f003_4f004_4f005_4f006_d5.png'),
(NULL,'5f001.jpg','地板打蜡',17819,20,'元/平方米',3,'5f001_d2.png','5f001_d3.png','5f001_d4.png','5f001_d5.png'),
(NULL,'5f002.jpg','开荒',25682,320,'元/次起',3,'5f002_d2.png','5f002_d3.png','5f002_d4.png','5f002_d5.png'),
(NULL,'5f003.jpg','除螨',50177,150,'元/次',3,'5f003_d2.png','5f003_d3.png','5f003_d4.png','5f003_d5.png'),
(NULL,'5f004.jpg','布艺沙发清洗',18429,40,'元/座',3,'5f004_d2.png','5f004_d3.png','5f004_d4.png','5f004_d5.png'),
(NULL,'5f005.jpg','实木家具保养',48218,70,'元/座',3,'5f005_d2.png','5f005_d3.png','5f005_d4.png','5f005_d5.png'),
(NULL,'5f006.jpg','管道疏通',24925,99,'元/次',3,null,null,null,null),
(NULL,'5f007.jpg','甲醛检测',43590,25,'元/点',3,'5f007_d2.png','5f007_d3.png','5f007_d4.png','5f007_d5.png'),
(NULL,'5f008.jpg','甲醛治理',46835,25,'元/平方米',3,'5f008_d2.png','5f008_d3.png','5f008_d4.png','5f008_d5.png'),
(NULL,'5f009.jpg','窗帘清洗',29044,30,'元/平方米',3,'5f009_d2.png','5f009_d3.png','5f009_d4.png','5f009_d5.png'),
(NULL,'5f010.jpg','真皮沙发护理',41799,30,'元/座',3,'5f010_d2.png','5f010_d3.png','5f010_d4.png','5f010_d5.png'),
(NULL,'5f011.jpg','石林养护',29489,30,'元/平方米',3,'5f011_d2.png','5f011_d3.png','5f011_d4.png','5f011_d5.png'),
(NULL,'6f001.jpg','新生儿护理',48874,11000,'元/月',4,'6f001_d2.png','6f001_d3.png','6f001_d4.png','6f001_d5.png'),
(NULL,'6f002.jpg','家庭保姆',41975,10000,'元/月',4,'6f002_d2.png','6f002_d3.png','6f002_d4.png','6f002_d5.png'),
(NULL,'6f003.jpg','专业护工',25873,8000,'元/月',4,'6f003_d2.png','6f003_d3.png','6f003_d4.png','6f003_d5.png');

-- 产品规格sku列表
CREATE TABLE xd_products_spec(
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '产品的sku规格id',
  product_id INT COMMENT '当前产品的id 外键',
  title VARCHAR(32) COMMENT 'sku规格分类的名称',
  price INT COMMENT 'sku规格的单价',
  unit VARCHAR(16) COMMENT '单位'
);

INSERT INTO xd_products_spec VALUES
(null,1,'家庭日常保洁2小时',80,'元/次'),
(null,1,'家庭日常保洁3小时',119,'元/次'),
(null,1,'家庭日常保洁4小时',159,'元/次'),
(null,1,'家庭日常保洁5小时',199,'元/次'),
(null,1,'家庭日常保洁6小时',239,'元/次'),
(null,2,'10平米左右',170,'元/次'),
(null,2,'15平米左右',245,'元/次'),
(null,2,'20平米左右',319,'元/次'),
(null,2,'30平米左右',450,'元/次'),
(null,2,'40平米左右',570,'元/次'),
(null,3,'3小时消毒保洁',150,'元/次'),
(null,3,'深度保洁3小时',180,'元/次'),
(null,3,'卫生间蒸汽高温消毒/间',199,'元/次'),
(null,3,'深度保洁4小时',239,'元/次'),
(null,3,'厨房蒸汽高温消毒/间',299,'元/次'),
(null,3,'低于50平不擦玻璃',260,'元/次'),
(null,3,'50-69平不擦玻璃',400,'元/次'),
(null,3,'70-99平不擦玻璃',500,'元/次'),
(null,3,'100-119平不擦玻璃',600,'元/次'),
(null,3,'120-150平不擦玻璃',800,'元/次'),
(null,3,'大于150平不擦玻璃',1000,'元/次'),
(null,4,'中式油烟机半拆',135,'元/台'),
(null,4,'中式油烟机全拆',199,'元/台'),
(null,4,'侧式油烟机半拆',135,'元/台'),
(null,4,'侧式油烟机全拆',245,'元/台'),
(null,4,'欧式油烟机半拆',145,'元/台'),
(null,4,'欧式油烟机全拆',229,'元/台'),
(null,4,'燃气灶',79,'元/台'),
(null,4,'油烟机+燃气灶',169,'元/台'),
(null,5,'单开门冰箱清洗',149,'元/台'),
(null,5,'双开门冰箱清洗',159,'元/台'),
(null,6,'挂机',119,'元/台'),
(null,6,'柜机',159,'元/台'),
(null,6,'中央空调风口',89,'元/台'),
(null,6,'1柜机+2挂机',238,'元/台'),
(null,6,'1柜机+2挂机',298,'元/台'),
(null,7,'波轮洗衣机半拆',110,'元/次'),
(null,7,'波轮全拆',135,'元/次'),
(null,7,'滚筒半拆',160,'元/次'),
(null,7,'滚筒全拆',299,'元/次'),
(null,8,'热水器免拆洗',130,'元/台'),
(null,8,'热水器拆洗',180,'元/台'),
(null,9,'波轮免拆洗',130,'元/台'),
(null,9,'波轮拆卸清洗',200,'元/台'),
(null,10,'地板打蜡',20,'元/平方米'),
(null,11,'一居室(不擦玻璃)',320,'元/次'),
(null,11,'一居室(擦玻璃)',440,'元/次'),
(null,11,'两居一卫(不擦玻璃)',500,'元/次'),
(null,11,'两居一卫(擦玻璃)',630,'元/次'),
(null,11,'两居2卫(不擦玻璃)',600,'元/次'),
(null,11,'两居2卫(擦玻璃)',770,'元/次'),
(null,11,'三居一卫(不擦玻璃)',720,'元/次'),
(null,11,'三居一卫(擦玻璃)',875,'元/次'),
(null,11,'三居2卫(不擦玻璃)',820,'元/次'),
(null,11,'三居2卫(擦玻璃)',980,'元/次'),
(null,11,'四居(不擦玻璃)',1000,'元/次'),
(null,11,'四居(擦玻璃)',1200,'元/次'),
(null,12,'除虫',120,'元/次'),
(null,12,'床垫',150,'元/次'),
(null,13,'布艺沙发清洗',40,'元/座'),
(null,14,'实木家具保养',70,'元/座'),
(null,15,null,null,null),
(null,16,'甲醛检测',25,'元/点'),
(null,17,'0-50平方',800,'元/次'),
(null,17,'50-70平方',1800,'元/次'),
(null,17,'70-90平方',2300,'元/次'),
(null,17,'90-120平方',3000,'元/次'),
(null,17,'120平方以上',4200,'元/次'),
(null,18,'窗帘清洗',2300,'元/平方米'),
(null,19,'真皮沙发护理',30,'元/座'),
(null,20,'石林养护',30,'元/平方米'),
(null,20,'维修',100,'元/平方米'),
(null,21,'初级月嫂',5000,'元/月'),
(null,21,'中级月嫂',6000,'元/月'),
(null,21,'金牌级月嫂',7000,'元/月'),
(null,21,'首席月嫂',9000,'元/月'),
(null,21,'新生儿护理',11000,'元/月'),
(null,22,'初级家务保姆',5000,'元/月'),
(null,22,'中级家务保姆',6500,'元/月'),
(null,22,'别墅保姆',7000,'元/月'),
(null,22,'金牌保姆',8500,'元/月'),
(null,22,'高级家务保姆',9000,'元/月'),
(null,22,'家庭保姆',10000,'元/月'),
(null,23,'专业护工',8000,'元/月'),
(null,23,'高级月嫂',8000,'元/月');
-- 用户信息列表
CREATE TABLE xd_user(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL COMMENT '用户的id',
  username VARCHAR(32) COMMENT '用户名',
  upwd VARCHAR(32) COMMENT '密码',
  avatar VARCHAR(128) default '1.jpg' COMMENT '头像',
  nickname VARCHAR(32) COMMENT '昵称',
  phone VARCHAR(16) COMMENT '手机号',
  email VARCHAR(32) COMMENT '邮箱',
  balance DECIMAL(10,2) default 0 COMMENT '钱包余额'
);

INSERT INTO xd_user VALUES
(null,'dingding','123456','1.jpg','叮了你一下','15898657489','dingding@tedu.cn',10),
(null,'ranran','123456',null,'然然很性感','18958986978','ranran@tedu.cn',50);


-- 用户地址信息列表
CREATE TABLE xd_address(
  aid INT PRIMARY KEY AUTO_INCREMENT COMMENT '地址信息的id',
  dname VARCHAR(32) COMMENT '收件人姓名',
  pos VARCHAR(128) COMMENT '收件人地址',
  phone VARCHAR(32) COMMENT '收件人手机号',
  is_default BOOLEAN COMMENT '是否默认',
  user_id INT COMMENT '用户的id'
);

INSERT INTO xd_address VALUES
(null,'阿拉丁','深圳市龙华区清湖地铁站','15898698742',false,1),
(null,'叮咚','上海市浦东新区陆家嘴1号','15898698742',false,1),
(null,'螺丝钉','北京市朝阳区万寿路88号','15898698742',true,1);

-- 订单列表
CREATE TABLE xd_order(
  did INT PRIMARY KEY AUTO_INCREMENT COMMENT '订单列表的id,外键',
  user_id INT COMMENT '用户列表的id,外键',
  status INT COMMENT '订单的状态码 1-未支付，2-已支付，3-已完成',
  ordertime VARCHAR(32) COMMENT '下单时间',
  servertime VARCHAR(32) COMMENT '服务时间',
  title VARCHAR(32) COMMENT '是xd_products的title+"-"+xd_products_spec',
  count INT COMMENT '数量',
  total DECIMAL(10,2) COMMENT '总价',
  remark VARCHAR(128) COMMENT '备注',
  sku_id INT COMMENT '产品sku规格的id',
  phone VARCHAR(16) COMMENT '收件人的电话',
  pos VARCHAR(64) COMMENT '服务地址'
);
INSERT INTO xd_order VALUES
(null,1,2,'2020-07-05 13:13:30','2020-07-05 13:00:00-15:00:00','油烟机-中式油烟机半拆',1,135,null,22,'18578324226','深圳市龙华区清湖地铁站'),
(null,1,2,'2020-07-05 13:13:30','2020-07-05 13:00:00-15:00:00','油烟机-中式油烟机半拆',1,135,null,22,'18578324226','北京市朝阳区万寿路88号'),
(null,1,2,'2020-07-05 13:13:30','2020-07-05 13:00:00-15:00:00','油烟机-中式油烟机半拆',1,135,null,22,'18578324226','上海市黄浦区市政府书记办公室');



