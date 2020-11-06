<template>
  <div class='aside'>
    <div class="nav">
      <aside>
        <ul class="nav_box">
          <h3>优益旅行</h3>
          <li v-for="(item, index) in menuList" :key="index">
            <div class="divOne" @click="showToggle(item, index)">
              <span>{{ item.name }}</span>
            </div>
            <ul v-show="item.isSubShow">
              <li v-for="(subItem, index) in item.subItems" :key="index">
                <div class="divTwo">{{ subItem.name }}</div>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aside',
  data(){
    return {
      menuList: [
        {
          name: "设置",
          isSubShow: false,
          subItems: [
            {
              name: "字符录入",
            }
          ],
        },
        {
          name: "用户管理",
          isSubShow: false,
          subItems: [
            {
              name: "票据录入",
            },
          ],
        },
        {
          name: "门户管理",
          isSubShow: false,
          subItems: [
            {
              name: "交易码录入",
            },
          ],
        },
        {
          name: "线路管理",
          isSubShow: false,
          subItems: [
            {
              name: "操作码录入",
            },
          ],
        },
        {
          name: "景点管理",
          isSubShow: false,
          subItems: [],
        },
        {
          name: "分类管理",
          isSubShow: false,
          subItems: [
            {
              name: "操作码录入",
            },
          ],
        },
        {
          name: "出发城市",
          isSubShow: false,
          subItems: [
            {
              name: "操作码录入",
            },
          ],
        },
        {
          name: "定制游",
          isSubShow: false,
          subItems: [],
        },
        {
          name: "订单管理",
          isSubShow: false,
          subItems: [],
        }
      ]
    }
  },
  components: {},
  computed: {},
  created(){},
  activated(){},
  deactivated(){},
  mounted(){},
  methods: {
      showToggle(item, ind) {
        this.menuList.forEach((i) => {
          // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
          if (i.isSubShow !== this.menuList[ind].isSubShow) {
            i.isSubShow = false;
          }
        });
        item.isSubShow = !item.isSubShow;
    },
  },
  watch: {}
}
</script>
<style  scoped>
.nav {
  height: 100%;
  width: 20%;
  float: left;
}
.nav aside {
  background: #000;
  height: 100%;
  padding: 20px 0;
}
.nav aside .nav_box{
  padding: 0;
  height:676px;
}
.nav aside .nav_box h3{
  color:#fff;
  margin:0;
  height:50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}
.nav aside .nav_box .divOne {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  padding-left:20%;
}
.nav aside .nav_box .divOne:hover{
  background:rgba(255,255,255,.3);
}
.nav aside .nav_box .divOne span{
  font-size: 16px;
}
.nav aside .nav_box .divOne img {
  width: 20px;
  height: 20px;
  margin: 15px 16px 15px 20px;
  vertical-align: top;
}
.nav aside .nav_box .divTwo {
  padding: 0 20px 0 60px;
  height: 40px;
  line-height: 40px;
  background: #f1f1f1;
  color: #454343;
  font-size: 16px;
}
</style>
