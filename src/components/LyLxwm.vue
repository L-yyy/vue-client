<template>
  <div>
    <LyHeader></LyHeader>
    <div class="container_bodylxwm">
      <div class="conbox">
        <ul class="lxxq">
          <li>联系方式：</li>
          <li>电话：{{ lxwm[0].tel }}</li>
          <li>地址：{{ lxwm[0].place }}</li>
          <li>邮编：{{ lxwm[0].youbian }}</li>
          <li>邮箱：{{ lxwm[0].youxiang }}</li>
          <li>详细地址：<br />{{ lxwm[0].kaiyuan }}</li>
        </ul>
        <div>
          <img src="../assets/lxwm/ditu3.png" />
        </div>
      </div>
    </div>
    <LyFooter></LyFooter>
  </div>
</template>

<script>
import LyFooter from "../components/LyFooter";
import LyHeader from "../components/LyHeader";
export default {
  name: "LyLxwm",
  data() {
    return {
      lxwm: [],
    };
  },
  methods: {},

  components: {
    LyFooter,
    LyHeader,
  },

  created() {
    this.$http.get("api/lxwm/list").then((res) => {
      console.log(res.data.data);
      this.lxwm = res.data.data;
    });
  },
};
</script>

<style>
.container_bodylxwm{
  margin-top: 30px;
  margin-bottom: 30px;
  height: 450px;
}
.conbox {
  width: 1200px;
  height: auto;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 80px;
}

.lxfs {
  width: 1200px;
  height: auto;
  white-space: nowrap;
  margin-top: 20px;
  margin-bottom: 10px;
}
.lxfs > li {
  width: 300px;
  height: 150px;
  display: inline-block;
}
.lxfs > li > img {
  margin-left: 85px;
}
.lxxq {
  width: 450px;
  height: 300px;
  float: left;
}
.lxxq > li {
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  margin-left: 70px;
}
.lxxq > li:nth-child(1) {
  font-size: 24px;
  width: 200px;
  height: 50px;
  line-height: 40px;
  text-indent: 2em;
  /* background-image: url(../assets/lxwm/ditu3.png); */
  background-repeat: no-repeat;
  margin-left: 125px;
  margin-top: 20px;
}
</style>