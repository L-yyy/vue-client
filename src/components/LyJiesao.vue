<template>
  <div>
    <LyHeader></LyHeader>
    <div class="container_body">
      <a href="https://cloudgame.ds.163.com/yjwj?utm_source=yjwjfab" class="hui"
        >开始游戏</a
      >
      <div class="conbox">
        <!--第一组-->
        <div class="jian1">
          <img :src="require('@/assets/' + jiesaos[0].imgpath)" />
          <h4>{{ jiesaos[0].title }}</h4>
          <p>
            {{ jiesaos[0].text1 }}
          </p>
          <p>
            {{ jiesaos[0].text2 }}
          </p>
          <p>{{ jiesaos[0].text3 }}</p>
          <p>
            {{ jiesaos[0].text4 }}
          </p>
          <p class="p4">
            {{ jiesaos[0].text5 }}
          </p>
          <a class="zhankai"
            >------------------------------<br /><i
              class="fa fa-angle-double-down"
              aria-hidden="true"
            ></i
          ></a>
          <a class="shouqi"
            >------------------------------<br /><i
              class="fa fa-angle-double-up"
              aria-hidden="true"
            ></i
          ></a>
        </div>
        <!--第二组-->
        <div class="list1">
          <img :src="require('@/assets/' + jiesaos[1].imgpath)" class="img1" />
          <div class="font">
            <h4>{{ jiesaos[1].title }}</h4>
            <p>
              {{ jiesaos[1].text1 }}
            </p>
            <p>
              {{ jiesaos[1].text2 }}
            </p>
            <p>{{ jiesaos[1].text3 }}</p>
            <p>{{ jiesaos[1].text4 }}</p>
            <p>{{ jiesaos[1].text5 }}</p>
          </div>
        </div>
        <!--第三组-->
        <div class="list2">
          <img :src="require('@/assets/' + jiesaos[2].imgpath)" class="img2" />
          <div class="font2">
            <h4>{{ jiesaos[2].title }}</h4>
            <p>{{ jiesaos[2].text1 }}</p>
            <p>
              {{ jiesaos[2].text2 }}
            </p>
            <p>
              {{ jiesaos[2].text3 }}
            </p>
            <p>
              {{ jiesaos[2].text4 }}
            </p>
            <p>
              {{ jiesaos[2].text5 }}
            </p>
          </div>
        </div>
        <!--第四组-->
        <div class="list1">
          <img :src="require('@/assets/' + jiesaos[3].imgpath)" class="img1" />
          <div class="font">
            <h4>{{ jiesaos[3].title }}</h4>
            <p>
              {{ jiesaos[3].text1 }}
            </p>
            <p>
              {{ jiesaos[3].text2 }}
            </p>
            <p>{{ jiesaos[3].text3 }}</p>
            <p>
              {{ jiesaos[3].text4 }}
            </p>
            <p>
              {{ jiesaos[3].text5 }}
            </p>
          </div>
        </div>
        <!--第五组-->
        <div class="list2">
          <img :src="require('@/assets/' + jiesaos[4].imgpath)" class="img2" />
          <div class="font2">
            <h4>{{ jiesaos[4].title }}</h4>
            <p>
              {{ jiesaos[4].text1 }}
            </p>
            <p>
              {{ jiesaos[4].text2 }}
            </p>
            <p>{{ jiesaos[4].text3 }}</p>
            <p>
              {{ jiesaos[4].text4 }}
            </p>
            <p>
              {{ jiesaos[4].text5 }}
            </p>
          </div>
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
  name: "LyJiesao",
  data() {
    return {
      jiesaos: [],
    };
  },
  methods: {},

  components: {
    LyFooter,
    LyHeader,
  },

  created() {
    this.$http.get("api/jiesao/list").then((res) => {
      console.log(res.data.data);
      this.jiesaos = res.data.data;
    });
  },
};
</script>

<style>
.container_body{
  margin-top: 20px;
}
.hui {
  position: fixed;
  right: 0;
  bottom: 0;
}
.mianbao {
  width: 1200px;
  height: 60px;
  margin: auto;
}

.mianbao > ul {
  width: 300px;
  height: 60px;
  margin-left: 60px;
}

.mianbao > ul > li {
  display: inline-block;
  line-height: 60px;
  text-align: left;
  color: #333333;
}
.conbox {
  width: 1200px;
  height: auto;
  margin: auto;
}
.jian1 {
  width: 1200px;
  height: auto;
  margin: auto;
  position: relative;
}
.jian1 > img {
  float: left;
  margin-left: 70px;
  margin-right: 50px;
  margin-bottom: 20px;
}
.jian1 > p {
  width: 1120px;
  line-height: 28px;
  text-indent: 2em;
}
.p4 {
  width: 1050px !important;
  height: auto;
  display: none;
  margin-left: 70px;
}
.zhankai {
  width: 550px;
  height: 50px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  margin: auto;
  color: #241eb0;
  white-space: nowrap;
  cursor: pointer;
}
.shouqi {
  width: 550px;
  height: 50px;
  display: none;
  text-align: center;
  line-height: 20px;
  color: #241eb0;
  white-space: nowrap;
  cursor: pointer;
  position: absolute;
  top: 330px;
  left: 330px;
}
.list1 {
  width: 1200px;
  height: auto;
  margin-top: 30px;
  position: relative;
}
.list1 > .img1 {
  margin-left: 70px;
  padding-right: 40px;
  border-right: 2px solid #000000;
}
.list1 > .font {
  width: 700px;
  height: auto;
  position: absolute;
  right: 70px;
  top: 0px;
  line-height: 28px;
}
.list2 {
  width: 1200px;
  height: auto;
  display: block;
  margin-top: 30px;
  position: relative;
}
.list2 > .img2 {
  padding-left: 40px;
  border-left: 2px solid #000000;
  margin-left: 780px;
}
.list2 > .font2 {
  width: 700px;
  height: auto;
  line-height: 28px;
  position: absolute;
  top: 0px;
  left: 60px;
  text-align: right;
}
</style>