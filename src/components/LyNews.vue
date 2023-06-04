<template>
  <div>
    <LyHeader></LyHeader>
    <div class="container_body">
      <div class="newsbox" id="newsbox">
        <div class="new">
          <p class="yuefen">
            =================================================12月=================================================
          </p>
          <ul>
            <li v-for="(item, index) in news" :key="index">
              <a href=""
                ><img
                  :src="require(`@/assets/${item.imgpath}`)"
                  width="450"
                  height="250"
                />
              </a>
              <p class="wen-bt">{{ item.title }}</p>
              <div class="new-hover">
                <p>{{ item.hovertext }}</p>
                <a :href="item.detailLink">查看详情</a>
              </div>
            </li>
          </ul>
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
  name: "LyNews",
  data() {
    return {
      idx: 4,
      news: [],
    };
  },
  methods: {},

  components: {
    LyFooter,
    LyHeader,
  },

  created() {
    this.$http.get("api/news/list").then((res) => {
      console.log(res.data.data);
      this.news = res.data.data;
    });
  },
};
</script>

<style>
.container_body{
  margin-top: 20px;
}
.newsbox {
  width: 1200px;
  height: auto;
  margin: auto;
}

.new {
  width: 1200px;
  height: auto;
}
.yuefen {
  width: 1200px;
  overflow: hidden;
  white-space: nowrap;
}
.new > ul > li {
  width: 450px;
  height: 250px;
  display: inline-block;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
}
.wen-bt {
  width: 440px;
  height: 40px;
  text-align: center;
  display: block;
  padding: 5px 5px;
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0px;
  left: 0px;
  transition: all 0.5s;
}
.new > ul > li > .new-hover {
  position: absolute;
  top: 260px;
  left: 0px;
  width: 410px;
  height: 210px;
  padding: 20px;
  text-align: center;
  display: block;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-indent: 2em;
  transition: all 0.5s;
}
.new-hover > a {
  color: #2351cc;
  display: block;
  margin-top: 20px;
}
.new > ul > li:hover .new-hover {
  top: 0px !important;
}
.new > ul > li:hover .wen-bt {
  bottom: -51px !important;
}
.newlistbox {
  width: 1200px;
  height: auto;
  margin: auto;
}
.newlistbox > ul {
  width: 1200px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.newlistbox > ul > li {
  width: 1000px;
  height: 40px;
  margin: auto;
  text-align: left;
  line-height: 40px;
  position: relative;
}
.newlistbox > ul > li > a:hover {
  text-decoration: underline;
}
.newlistbox > ul > li > span {
  color: #333333;
  position: absolute;
  right: 0px;
}
</style>