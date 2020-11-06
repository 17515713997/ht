<style lang="css" scoped>
li {
  list-style: none;
}
html,
body{
  margin:0;
  padding: 0;
}
#Home{
  width:100%;
  background:#f5f7f9;
  float: left;
}

.bottom{
    height: 50px;
    line-height:50px;
    float: left;
    width: 80%;
}
.bottom .bottom-left{
    width:50%;
    float: left;
    padding-left:20px;
}
.bottom .bottom-left span.zhuye{
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: white;
    margin-left: 20px;
    border-radius: 8px;
}
.bottom .bottom-right{
    width:50%;
    float: right;
    text-align: right;
    padding-right:20px;
}
.bottom .bottom-right span.xiahua{
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: white;
    margin-left: 20px;
    border-radius: 8px;
}
.lunbo{
    float: left;
    width: 80%;
}
.lunbo .lunbo_left,
.lunbo .lunbo_right{
    float: left;
    width:45%;
    background: white;
    margin-left:3% ;
}
.lunbo .lunbo_left h3,
.lunbo .lunbo_right h3{
    font-size: 16px;
    margin:0;
    padding:10px 20px;
    float: left;
    width:90%;
}
.lunbo .lunbo_left div.w100,
.lunbo .lunbo_right div.w100{
    width: 100%;
    float: left;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 10px;
}
.lunbo .lunbo_left div.w100 ul,
.lunbo .lunbo_right div.w100 ul{
    float: left;
    padding: 0;
    width: 10%;
    margin:0;
    height:100%;
}
.lunbo .lunbo_left div.w100 ul li,
.lunbo .lunbo_right div.w100 ul li{
    float: left;
    width:27%;
    height:14px;
    border-radius: 50px;
    text-align: center;
    margin-top:17%;
    margin-right:10%;
}
.lunbo .lunbo_left .lunbo_box{
    width: 100%;
    float:left;
}
.lunbo .lunbo_left .lunbo_box ul.block_one{
    margin: 0;
    float: left;
    width: 100%;
    padding: 0;
}
.lunbo .lunbo_left .lunbo_box ul.block_one li{
    float: left;
    width:21%;
    margin:2%; 
}
.lunbo .lunbo_left .lunbo_box ul.block_one li span{
    float: left;
    width: 100%;
    text-align: center;
    background: #f5f6f7;
    padding: 10% 0;
    font-size:25px;
} 
.lunbo .lunbo_left .lunbo_box ul.block_one li p{
    text-align: center;
    margin:0;
    float: left;
    width:100%;
    margin-top:7%;
    color:#000;
    font-size: 14px;
} 
.lunbo .lunbo_right .lunbo_box{
    width: 100%;
    float:left;
}
.lunbo .lunbo_right .lunbo_box ul{
     margin: 0;
    float: left;
    width: 100%;
    padding: 0;
}
.lunbo .lunbo_right .lunbo_box ul li{
    float: left;
    width:45%;
    margin:2%; 
    padding:2%;
    background:#f5f6f7;
}
.lunbo .lunbo_right .lunbo_box ul li p{
    font-size: 24px;
    color:#23527c;
    font-weight:bold;
    margin:0;
}
.lxt{
    width:80%;
    float: left;
    padding:20px 46px 20px 34px;
}
.lxt .lxt_box{
    background: white;
    float: left;
    width: 100%;
}
.lxt .lxt_box .lxt_one{
    float: left;
    width:100%;
    border-bottom: 1px solid #ccc;
}
.lxt .lxt_box h3.gai{
    margin:0;
    float: left;
    width:20%;
    font-size: 16px;
    padding:10px 20px;
}
.lxt .lxt_box ul{
    float: left;
    padding:0;
    width:80%;
    margin:0;
    padding:10px 20px;
}
.lxt .lxt_box ul li{
    float: right;
    width:13px;
    height:13px;
    background: #ccc;
    text-align: center;
    border-radius: 10px;
    margin-right:5px;
}
.lxt .lxt_box .lxt_two{
    float: left;
    width:100%;
}
.lxt .lxt_box .lxt_two h3{
    text-align: center;
    padding:10px 0;
    float: left;
    width:100%;
    margin:0;
    font-size:16px;
}
</style>
<template>
  <div id="Home">
    <Aside></Aside> <!--侧边栏 -->
    <Header></Header>  <!--头部 -->
    <div class="bottom">
        <div class="bottom-left">
            <span class="glyphicon glyphicon-menu-left"></span>
            <span class="glyphicon glyphicon-home zhuye"></span>
        </div>
        <div class="bottom-right">
            <span class="glyphicon glyphicon-menu-right"></span>
            <span class="glyphicon glyphicon-menu-down xiahua"></span>
        </div>
    </div>
    <div class="lunbo">
        <div class="lunbo_left">
            <div class="w100">
                <h3>快捷方式</h3>
                <ul>
                    <li id="yuan1" style="background: #ccc;" @click="yuan1"></li>
                    <li id="yuan2" style="background: #000;" @click="yuan2"></li>
                </ul>
            </div>
            <div class="lunbo_box">
                <ul class="block_one" id="block_one">
                    <li>
                        <span class="glyphicon glyphicon-education"></span>
                        <p>主页一</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-eye-open"></span>
                        <p>主页二</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-book"></span>
                        <p>弹层</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-pencil"></span>
                        <p>聊天</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-hdd"></span>
                        <p>进度条</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-list-alt"></span>
                        <p>工单</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-user"></span>
                        <p>用户</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-cog"></span>
                        <p>设置</p>
                    </li>
                </ul>
                <ul class="block_one" style="display:none" id="block_two">
                    <li>
                        <span class="glyphicon glyphicon-map-marker"></span>
                        <p>主页三</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-tint"></span>
                        <p>主页四</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-leaf"></span>
                        <p>弹层</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-envelope"></span>
                        <p>聊天</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-star"></span>
                        <p>进度条</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-th"></span>
                        <p>工单</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-road"></span>
                        <p>用户</p>
                    </li>
                    <li>
                        <span class="glyphicon glyphicon-cog"></span>
                        <p>设置</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lunbo_right">
            <div class="w100">
                <h3>待办事项</h3>
                <ul>
                    <li id="yuan3" style="background: #000;" @click="yuan3"></li>
                    <li id="yuan4" style="background: #ccc;" @click="yuan4"></li>
                </ul>
            </div>
            <div class="lunbo_box">
                <ul id="dai1">
                    <li>
                        <span>待审评论</span>
                        <p>100</p>
                    </li>
                    <li>
                        <span>待审帖子</span>
                        <p>100</p>
                    </li>
                    <li>
                        <span>待审商品</span>
                        <p>100</p>
                    </li>
                    <li>
                        <span>待发货</span>
                        <p>100</p>
                    </li>
                </ul>
                <ul style="display:none" id="dai2">
                    <li>
                        <span>完成</span>
                        <p>1000</p>
                    </li>
                    <li>
                        <span>取消</span>
                        <p>1000</p>
                    </li>
                    <li>
                        <span>发货</span>
                        <p>1000</p>
                    </li>
                    <li>
                        <span>收货</span>
                        <p>1000</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="lxt">
        <div class="lxt_box">
            <div class="lxt_one">
                <h3 class="gai">数据概览</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
             <div class="lxt_two">
                <h3>今日流量趋势</h3>
            </div>
            <div class="my" style="float:left;width:100%">
               <div id="myChart" :style="{width: '100%', height: '300px'}">1</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Aside from "./aside/Aside"
import Header from "./header/Header"
export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
      Aside,
      Header
  },
  computed: {},
  created() {
  },
  activated() {},
  deactivated() {},
  mounted() {
    let w = document.documentElement.offsetWidth || document.body.offsetWidth;
    let Home = document.querySelector("#Home");
    if (w < 992) {
      Home.style.background = "blue";
    }
    if (w < 768) {
      Home.style.background = "pink";
    }
    if (w <= 500) {
      Home.style.background = "green";
    }
    this.drawLine();
  },
  methods: {
     yuan1(){
        document.querySelector("#block_one").style.display = "none"
        document.querySelector("#block_two").style.display = "block"
        document.querySelector("#yuan1").style.background = "#000"
        document.querySelector("#yuan2").style.background = "#ccc"
     },
     yuan2(){
        document.querySelector("#block_one").style.display = "block"
        document.querySelector("#block_two").style.display = "none"
        document.querySelector("#yuan1").style.background = "#ccc"
        document.querySelector("#yuan2").style.background = "#000"
     },
     yuan3(){
        document.querySelector("#dai1").style.display = "block"
        document.querySelector("#dai2").style.display = "none"
        document.querySelector("#yuan3").style.background = "#000"
        document.querySelector("#yuan4").style.background = "#ccc"
     },
     yuan4(){
        document.querySelector("#dai1").style.display = "none"
        document.querySelector("#dai2").style.display = "block"
        document.querySelector("#yuan3").style.background = "#ccc"
        document.querySelector("#yuan4").style.background = "#000"
     },
     drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.querySelector('#myChart'))
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: ["8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00","2:00","4:00","6:00"]
            },
            yAxis: {},
            series: [{
                name: '流量',
                type: 'bar',
                data: [200,300,400,300,500,700,900,800,500,800,700,500]
            }]
        });
    }
  },
  watch: {},
};
</script>
