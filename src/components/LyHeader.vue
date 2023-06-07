<template>
  <div class="container_max">
    <div class="topbox">
      <div class="top">
        <a href="index.html">
          <img src="../assets/wuqi/yjj1.png" class="top-logo" />
        </a>

        <div class="login">
          <div class="user" v-if="isLogin">
            <img class="img" :src="require(`@/assets/a.jpg`)" />
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
      <div class="dlTitle">登录</div>
      <div>
        <div class="zhangHao">
          账号&nbsp;:&nbsp;<input
            class="input"
            type="text"
            v-model="login.user.phone"
            placeholder="请输入手机号"
            @change="chargeZhangHao"
          />
        </div>
        <div class="miMa">
          密码&nbsp;:&nbsp;<input
            class="input"
            type="password"
            v-model="login.user.password"
            placeholder="请输入密码"
          />
        </div>
        <div class="yanZhengMa">
          <input
            class="yanZhengMaInput"
            type="text"
            v-model="login.code"
            placeholder="请输入验证码"
            @change="chargeYZM"
          />
          <button class="huoQuYanZM" v-on:click="huoQuYZM">获取验证码</button>
        </div>
      </div>
      <div class="queRenQuXiao">
        <div class="queRen" v-on:click="queRen">确认</div>
        <div class="quXiao" v-on:click="quXiao">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LyHeader",
  data() {
    return {
      login: {
        code: "",
        user: { phone: "", password: "" },
      },
      isLogin: false,
      isUserLogin: false,
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
    };
  },
  methods: {
    queRen() {
      axios
        .post("api/user/submit", this.login)
        .then((response) => {
          console.log(response.data);
          if (response.data.code == 200) {
            this.isLogin = true;
            this.isUserLogin = false;
          } else if (response.data.code == 500) {
            alert(response.data.msg);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    huoQuYZM() {
      axios
        .post("api/user/sendMsg", {
          phone: this.login.user.phone,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    chargeYZM() {
      const reg = /^\d{4}$/;
      if (!reg.test(this.login.code)) {
        alert("请输入4位的验证码");
        this.login.code = "";
      }
    },
    chargeZhangHao() {
      const reg = /^\d{11}$/;
      if (!reg.test(this.login.user.phone)) {
        alert("请输入11位的账号");
        this.login.user.phone = "";
      }
    },
    quXiao() {
      this.isUserLogin = false;
    },
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
.huoQuYanZM {
  position: absolute;
  top: 237px;
  left: 255px;
}
.huoQuYanZM:hover {
  cursor: pointer;
}
.yanZhengMaInput {
  width: 90px;
  position: absolute;
  top: 230px;
  left: 143px;
}
.queRen {
  background-color: rgb(255, 136, 0);
  color: #fff;
  font-weight: bold;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 30px;
}
.queRen:hover {
  cursor: pointer;
}
.quXiao {
  background-color: rgb(255, 136, 0);
  color: #fff;
  font-weight: bold;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.quXiao:hover {
  cursor: pointer;
}
.input {
  height: 20px;
  width: 170px;
  margin: 3px;
  padding: 3px;
}
.dlTitle {
  position: absolute;
  top: 45px;
  font-weight: bold;
  font-size: 25px;
}
.zhangHao {
  position: absolute;
  top: 140px;
  left: 100px;
  font-weight: bold;
  font-size: 15px;
}
.miMa {
  position: absolute;
  top: 180px;
  left: 100px;
  font-weight: bold;
  font-size: 15px;
}

.userLogin {
  background-color: #f5f5f5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
.userLogin:nth-child(n) {
  margin: 15px;
  padding: 15px;
}
.queRenQuXiao {
  display: flex;
  position: absolute;
  top: 300px;
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
  margin-right: -45px;
  border: 2px rgb(255, 166, 0) solid;
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
  font-weight: bold;
}
.tc {
  color: rgb(185, 0, 0);
  position: absolute;
  top: 45px;
  right: -10px;
  font-weight: bold;
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