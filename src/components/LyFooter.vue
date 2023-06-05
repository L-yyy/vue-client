<template>
  <div>
    <div class="footbox">
      <div class="foot">
        <div class="huiding">
          <a href="#">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </a>
        </div>
        <ul>
          <li><a href="#/lxwm">联系我们</a></li>
          <li><a href="#/jiesao">永结简介</a></li>
          <li><a href="#/news">新闻消息</a></li>
        </ul>
        <p class="f-sj">我身无拘<br /><span>武道无穷</span></p>
        <img src="../assets/foot-logo.jpg" class="footer"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LyFooter",
};
</script>

<style>
.footer {
  position: absolute;
  bottom: 10px;
  right: 30px;
  border-radius: 15px;
}
.footbox {
  margin-top: 20px;
  width: 100%;
  height: 130px;
  clear: both;
  background-color: #388836;
}

.foot {
  width: 1200px;
  height: 130px;
  position: relative;
  margin: auto;
}

.foot > ul {
  width: 970px;
  height: 60px;
  margin-left: 100px;
  border-bottom: 1px solid #fff;
  white-space: nowrap;
}

.foot > ul > li {
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 80px;
  display: inline-block;
}

.foot > ul > li > a {
  color: #fff;
  display: block;
}

.foot > ul > li > a:hover {
  color: #ebb5b7;
}

.f-small {
  color: #cecece;
  font-size: 12px;
  padding: 10px 0px 0px 140px;
}

.foot > .huiding {
  clear: both;
  width: 70px;
  height: 70px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 46px;
  text-align: center;
}

.foot > .huiding > a {
  line-height: 70px;
  width: 70px;
  height: 70px;
  color: #d1d1d1;
  display: block;
  cursor: pointer;
}

.foot > .huiding > a:hover {
  color: white;
}

.foot > .f-sj {
  width: 150px;
  text-align: left;
  height: auto;
  font-family: "宋体";
  font-size: 14px;
  color: #cecece;
  line-height: 24px;
  position: absolute;
  top: 35px;
  right: 80px;
}

.foot > .f-sj > span {
  font-family: "宋体";
  font-size: 14px;
  color: #cecece;
  padding-left: 30px;
}
</style>