<template>
  <div>
    <LyHeader></LyHeader>
    <div class="banbox">
      <div class="ban">
        <ul class="b-list">
          <li v-for="item in fashionsShow" :key="item.id">
            <a href=""><img :src="require(`@/assets/${item.imgpath}`)" /></a>
            <div class="b-listjs">
              <a>
                <p>
                  <a class="wuQiName">{{ item.name }}</a>
                  <i
                    class="fa fa-caret-square-o-right"
                    aria-hidden="true"
                    style="font-size: 24px"
                  >
                    <router-link :to="'/detail/' + item.id" class="router-link"
                      >点击查询</router-link
                    >
                  </i>
                </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <LyFooter></LyFooter>
  </div>
</template>
<script>
import LyFooter from "../components/LyFooter";
import LyHeader from "../components/LyHeader";
export default {
  name: "LyGoumai",
  data() {
    return {
      idx: 2,
      fashionsShow: [],
    };
  },
  methods: {},
  components: {
    LyFooter,
    LyHeader,
  },

  created() {
    this.$http.get("api/wuqis/list").then((res) => {
      console.log(res.data.data);
      this.fashionsShow = res.data.data;
    });
  },
};
</script>

<style>
.wuQiName{
  width: 150px;
  height: 20px;
  color: rgb(255, 255, 255);
  margin-left: -59px;
  margin-top: 40px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  
}
.router-link {
  width: 100px;
  height: 30px;
  display: flex;
  margin-top: 75px;
  margin-left: -15px;
  font-size: 15px;
  color: rgb(255, 189, 91);
}

.router-link a {
  white-space: nowrap;
}
.goToNew {
  font-size: 20px;
}
.banbox {
  width: 100%;
  height: 500px;
  /* background-image: url(../images/chanpin/banner-bg.jpg); */
  background-image: url(../assets/ly/bj7.jpg);
  background-repeat: no-repeat;
}

.ban {
  width: 1200px;
  height: 500px;
  margin: auto;
}

.ban > .b-list {
  width: 1100px;
  height: 500px;
  margin: auto;
}

.b-list > li {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  float: left;
  margin-left: 17px;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
}

.b-list > li > a {
  width: 100px;
  height: 200px;
  display: block;
}

.b-list > li > a > img {
  height: 180px;
  margin-left: 0;
  margin-top: 12px;
}

.b-listjs {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  display: block;
  position: absolute;
  top: 200px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.b-listjs > a {
  display: block;
}

.b-listjs > a > p {
  width: 30px;
  height: auto;
  font-size: 20px;
  margin: auto;
  color: white;
  line-height: 30px;
  margin-top: 25px;
}

.b-list > li:hover .b-listjs {
  top: 1px !important;
}
</style>