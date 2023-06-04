<template>
  <div class="container_max">
    <div class="topbox">
      <div class="top">
        <a href="index.html">
          <img src="../assets/wuqi/yjj.png" class="top-logo"/>
        </a>
      </div>
    </div>

    <div class="navbox">
      <nav class="nav">
        <ul>
          <li v-bind:class="{ 'navhover': isActive1 }" v-on:click="changeStatus1"><a href="#/">首页</a></li>
          <li v-bind:class="{ 'navhover': isActive2 }" v-on:click="changeStatus2"><a href="#/goumai">周边购买</a></li>
          <li v-bind:class="{ 'navhover': isActive3 }" v-on:click="changeStatus3"><a href="#/jiesao">永结简介</a></li>
          <li v-bind:class="{ 'navhover': isActive4 }" v-on:click="changeStatus4"><a href="#/news">新闻消息</a></li>
          <li v-bind:class="{ 'navhover': isActive5 }" v-on:click="changeStatus5"><a href="#/lxwm">联系我们</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyHeader",
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false
    };
  },
  methods: {
    changeStatus1(){
      this.isActive1 = true
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
    },
    changeStatus2(){
      this.isActive2 = true
      this.isActive1 = false
      this.isActive3 = false
      this.isActive4 = false
      this.isActive5 = false
    },
    changeStatus3(){
      this.isActive3 = true
      this.isActive1 = false
      this.isActive2 = false
      this.isActive4 = false
      this.isActive5 = false
    },
    changeStatus4(){
      this.isActive4 = true
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive5 = false
    },
    changeStatus5(){
      this.isActive5 = true
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
    }
  },
};
</script>

<style>
.container_max{
    display: flex;
    flex-direction: column;
}
.topbox {
    width: 100%;
    height: 110px;
    background-image: url(../assets/ly/zz.jpg);
}
.top {
    width: 1200px;
    height: 110px;
    margin: auto;
    position: relative;
}
.top>ul {
    position: absolute;
    top: 10px;
    right: 20px;
}

.top>ul>li {
    width: 70px;
    font-size: 14px;
    display: inline-block;
    text-align: center;
    color: #8C2729;
    cursor: pointer;
}

.top>ul>li>a:hover {
    color: #8C2729;
}

.top-logo {
    margin-top: 5px;
    margin-left: 0;
    width: 280px;
}

.top-logo1 {
    margin-top: 0;
    margin-left: 300px;
    width: 100px;
}
.navbox {
    width: 100%;
    height: 50px;
    background-color: #18ab29;
}
.nav {
    width: 1200px;
    height: 50px;
    margin: auto;
}

.nav>ul>li {
    width: 240px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    float: left;
    background-image: url(../assets/nav-bg.gif);
    background-repeat: no-repeat;
    background-position: -240px 0px;
    transition: all 1s;
}

.nav>ul>li>a {
    display: block;
    color: #fff;
}
.navhover {
    background-position: 0px 0px !important;
}
.logobox {
    clear: both;
    width: 1200px;
    height: 250px;
    margin: auto;
}
img {
    border: 0px;
}

* {
    margin: 0px;
    padding: 0px;
    font-family: "微软雅黑";
    outline: none;
}

a {
    text-decoration: none;
    color: black;
}

ul,li {
    list-style-type: none;
}

</style>