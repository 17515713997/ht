<template>
  <div class='Header'>
      <div  class="center">
      <div class="center_top">
          <span class="glyphicon glyphicon-align-justify"></span>
          <span class="glyphicon glyphicon-globe"></span>
          <span class="glyphicon glyphicon-repeat"></span>
      </div>
      <div class="center-top-right">
          <span class="glyphicon glyphicon-trash"></span>
          <span class="glyphicon glyphicon-retweet"></span>
          <span class="glyphicon glyphicon-list"></span>
          <span class="glyphicon glyphicon-tag"></span>
          <span class="glyphicon glyphicon-fullscreen"></span>
          <!-- <div class="center_img">
              <img :src="img" alt="头像">
              欢迎,
              <e>name</e>
          </div> -->
          <div class="center_img" @click="dl">
              登录
          </div>
          <span class="glyphicon glyphicon-option-vertical"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {}
  },
  components: {},
  computed: {},
  created(){},
  activated(){},
  methods: {
      dl(){
          this.$router.push("/login");
      }
  },
  watch: {}
}
</script>
<style  scoped>
.center{
  float:left;
  width:80%;
   background: #fff;
}
.center .center_top{
    width:55%;
}
.center .center-top-right{
    width:45%;
}
.center .center_top,
.center .center-top-right{
    height: 50px;
    line-height:50px;
    float: left;
}
.center .center_top span{
    padding-left:40px;
}
.center .center-top-right span{
   padding-left:40px;
}
.center .center-top-right .center_img{
    display: initial;
    padding-left:30px;
}
</style>
