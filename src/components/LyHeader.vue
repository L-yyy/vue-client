<template>
  <div class="container_max">
    <div class="topbox">
      <div class="top">
        <a href="index.html">
          <img src="../assets/wuqi/yjj.png" class="top-logo" />
        </a>

        <div class="login">
          <div class="user" v-if="isLogin">
            <img class="img" src="../assets/a.jpg" />
            <div class="username">
              <div class="pkt">派克特&nbsp;&nbsp;&nbsp;</div>
              <div class="tc" v-on:click="tuiChu">退出</div>
            </div>
          </div>
          <div v-if="!isLogin" class="dengluzhuce" v-on:click="userLogin">
            登录/注册
          </div>
        </div>
      </div>
    </div>

    <div class="navbox">
      <nav class="nav">
        <ul>
          <li v-bind:class="{ navhover: isActive1 }" v-on:click="changeStatus1">
            <a href="#/">首页</a>
          </li>
          <li v-bind:class="{ navhover: isActive2 }" v-on:click="changeStatus2">
            <a href="#/goumai">周边购买</a>
          </li>
          <li v-bind:class="{ navhover: isActive3 }" v-on:click="changeStatus3">
            <a href="#/jiesao">永结简介</a>
          </li>
          <li v-bind:class="{ navhover: isActive4 }" v-on:click="changeStatus4">
            <a href="#/news">新闻消息</a>
          </li>
          <li v-bind:class="{ navhover: isActive5 }" v-on:click="changeStatus5">
            <a href="#/lxwm">联系我们</a>
          </li>
        </ul>
      </nav>
    </div>

    <div v-if="isUserLogin" class="userLogin">
      <div>登录</div>
      <div>111</div>
      <div>
        <div>确认</div>
        <div>取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyHeader",
  data() {
    return {
      isLogin: true,
      isUserLogin: true,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
    };
  },
  methods: {
    userLogin() {
      this.isUserLogin = true;
    },
    tuiChu() {
      this.isLogin = false;
    },
    changeStatus1() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    changeStatus2() {
      this.isActive2 = true;
      this.isActive1 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    changeStatus3() {
      this.isActive3 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    changeStatus4() {
      this.isActive4 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive5 = false;
    },
    changeStatus5() {
      this.isActive5 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
  },
};
</script>

<style>
.userLogin {
  background-color: rgb(192, 192, 192);
  position: fixed;
  top: 170px;
  left: 550px;
  width: 400px;
  height: 500px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login {
  /* background-color: rgb(214, 214, 214); */
  width: 190px;
  height: 110px;
  position: absolute;
  right: 150px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  border-radius: 50px;
  width: 50px;
  height: 50px;
}
.dengluzhuce {
  font-weight: bold;
}
.dengluzhuce:hover {
  cursor: pointer;
}
.user {
  display: flex;
  /* background-color: rgb(116, 116, 116); */
  width: 180px;
  height: 50px;
  justify-content: space-around;
  align-items: center;
}
.username {
  display: flex;
  /* background-color: rgb(255, 92, 92); */
  justify-content: center;
  align-content: center;
}
.pkt {
  font-size: 18px;
}
.tc {
  color: rgb(185, 0, 0);
}
.tc:hover {
  cursor: pointer;
}

.container_max {
  display: flex;
  flex-direction: column;
}
.topbox {
  width: 100%;
  height: 110px;
  background-image: url(../assets/ly/zz.jpg);
}
.top {
  /* background-color: rgb(255, 221, 221); */
  width: 100%;
  height: 110px;
  margin: auto;
  position: relative;
  left: 130px;
}
.top > ul {
  position: absolute;
  top: 10px;
  right: 20px;
}

.top > ul > li {
  width: 70px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  color: #8c2729;
  cursor: pointer;
}

.top > ul > li > a:hover {
  color: #8c2729;
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

.nav > ul > li {
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

.nav > ul > li > a {
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

ul,
li {
  list-style-type: none;
}
</style>