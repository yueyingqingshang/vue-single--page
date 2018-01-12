<template>
  	<div class="pos">
   		 <el-row>
            <el-col :span='8' id="order-list">
            	<el-tabs>
					<el-tab-pane label="点餐">
						<el-table :data="tableData" border show-summary style="width: 100%;margin-bottom: 10px;" >
						    <el-table-column prop="goodsName" label="商品"  ></el-table-column>
						    <el-table-column prop="count" label="数量" width="50"></el-table-column>
						    <el-table-column prop="price" label="金额" width="70"></el-table-column>
						    <el-table-column  label="操作" width="100" fixed="right">
						        <template scope="scope">
						            <el-button type="text" size="small">删除</el-button>
						            <el-button type="text" size="small">增加</el-button>
						        </template>
						    </el-table-column>
						</el-table> 
						<el-button type="warning" >挂单</el-button>
						<el-button type="danger" >删除</el-button>
						<el-button type="success" >结账</el-button>
					</el-tab-pane>
					<el-tab-pane label="挂单">
						挂单
					</el-tab-pane>
					<el-tab-pane label="外卖">
						外卖
					</el-tab-pane>
				</el-tabs>
            </el-col>
            <!--商品展示-->
            <el-col :span="16">
             	<div class="title">常用商品</div>
			    <div class="often-goods-list" >
			        <ul>
			            <li v-for="item in oftenGoods">
			                <span>{{item.goodsName}}</span>
			                <span class="o-price">￥{{item.price || 0}}元</span>
			            </li>
			        </ul>
			    </div>
			    <div class="goods-type">
			    	<el-tabs>
				        <el-tab-pane label="汉堡">
				            <ul class='cookList'>
							    <li v-for="item in type0Goods">
							        <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
							        <span class="foodName">{{item.goodsName}}</span>
							        <span class="foodPrice">￥{{item.price}}元</span>
							    </li>
							</ul>
				        </el-tab-pane>
			            <el-tab-pane label="小食">
				            小食
				        </el-tab-pane>
				        <el-tab-pane label="饮料">
				            饮料
				        </el-tab-pane>
				        <el-tab-pane label="套餐">
				            套餐
				        </el-tab-pane>
			    	</el-tabs>
			    </div>
            </el-col>
        </el-row>
  	</div>
</template>

<script>
export default {
  	name: 'Pos',
  	data() {
  		return {
  			tableData: [{
	          	goodsName: '可口可乐',
	          	price: 8,
	          	count:1
		        }, {
		          	goodsName: '香辣鸡腿堡',
		          	price: 15,
		          	count:1
		        }, {
		          	goodsName: '爱心薯条',
		          	price: 8,
		          	count:1
		        }, {
		          	goodsName: '甜筒',
		          	price: 8,
		          	count:1
		        }
	        ],
         	oftenGoods:[
				{
				  goodsId:1,
				  goodsName:'香辣鸡腿堡',
				  price:18
				}, {
				  goodsId:2,
				  goodsName:'田园鸡腿堡',
				  price:15
				}, {
				  goodsId:3,
				  goodsName:'和风汉堡',
				  price:15
				}, {
				  goodsId:4,
				  goodsName:'快乐全家桶',
				  price:80
				}, {
				  goodsId:5,
				  goodsName:'脆皮炸鸡腿',
				  price:10
				}, {
				  goodsId:6,
				  goodsName:'魔法鸡块',
				  price:20
				}, {
				  goodsId:7,
				  goodsName:'可乐大杯',
				  price:10
				}, {
				  goodsId:8,
				  goodsName:'雪顶咖啡',
				  price:18
				}, {
				  goodsId:9,
				  goodsName:'大块鸡米花',
				  price:15
				}, {
				  goodsId:20,
				  goodsName:'香脆鸡柳',
				  price:17
				}
      		],
      		type0Goods:[
		          {
		              goodsId:1,
		              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
		              goodsName:'香辣鸡腿堡',
		              price:18
		          }, {
		              goodsId:2,
		              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
		              goodsName:'田园鸡腿堡',
		              price:15
		          }, {
		              goodsId:3,
		              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
		              goodsName:'和风汉堡',
		              price:15
		          }, {
		              goodsId:4,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
		              goodsName:'快乐全家桶',
		              price:80
		          }, {
		              goodsId:5,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
		              goodsName:'脆皮炸鸡腿',
		              price:10
		          }, {
		              goodsId:6,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
		              goodsName:'魔法鸡块',
		              price:20
		          }, {
		              goodsId:7,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
		              goodsName:'可乐大杯',
		              price:10
		          }, {
		              goodsId:8,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
		              goodsName:'雪顶咖啡',
		              price:18
		          }, {
		              goodsId:9,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
		              goodsName:'大块鸡米花',
		              price:15
		          }, {
		              goodsId:20,
		               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
		              goodsName:'香脆鸡柳',
		              price:17
		          }
		          
	      	],
  		}
  	},
  	mounted:function(){
      var orderHeight = document.body.clientHeight;
      document.getElementById("order-list").style.height = orderHeight + 'px';
      document.getElementsByClassName('is-scroll-left')[0].style.overflow = 'hidden';
  	},
}
</script>
<style scoped lang="scss">
	.title{
      	height: 40px;
      	border-bottom:1px solid #D3DCE6;
      	background-color: #F9FAFC;
      	padding: 10px;
   	}
   	.often-goods-list ul li{
		list-style: none;
		float:left;
		border:1px solid #E5E9F2;
		padding:10px;
		margin:5px;
		background-color:#fff;
   	}
  	.o-price{
      	color:#58B7FF; 
   	}
   	.often-goods-list {
		ul {
			display: block;
		}
		ul:after {
			content:"";
			display:block;
			height:0;
			clear:both;
			visibility:hidden;
	   	}
	}
   	.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;

   }
   .cookList li span{
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
       display: block
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>