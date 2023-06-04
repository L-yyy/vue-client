<template>
  <div>
    <LyHeader class="navhover"></LyHeader>
    <div class="box">
      <div class="logobox">
        <img id="img" :src="require('@/assets/ly/tp' + number + '.jpg')" />
        <button class="bt1" @click="on">下一张</button>
        <button class="bt2" @click="off">上一张</button>
      </div>
    </div>
    <LyFooter></LyFooter>
  </div>
</template>

<script>
import LyFooter from "../components/LyFooter";
import LyHeader from "../components/LyHeader";
export default {
  name: "LyIndex",
  data() {
    return {
      idx: 1,
      number: 1,
      picture: "",
    };
  },
  methods: {
    on() {
      if (this.number <= 8) {
        this.number++;
      } else {
        this.number = 1;
      }
      this.picture = "../assets/ly/tp" + this.number + ".jpg";
    },
    off() {
      if (this.number > 1) {
        this.number--;
      } else {
        this.number = 9;
      }
      this.picture = "../assets/ly/tp" + this.number + ".jpg";
    },
  },

  components: {
    LyFooter,
    LyHeader,
  },

  created() {
    this.$http.get("api/shouye/list").then((res) => {
      console.log(res.data.data);
      this.number = res.data.data.number;
      this.picture = res.data.data.imgpath;
    });
  },
};
</script>

<style>
.navhover {
  background-position: 0px 0px !important;
}
.box {
  height: 550px;
}
.logobox {
  height: 660px;
  width: 1530px;
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
}
#jnkc {
  position: absolute;
  width: 400px;
  top: 0;
  bottom: 60%;
  left: 43%;
  right: 23%;
  font-size: x-large;
  border: 2px aqua;
}

.hui {
  position: absolute;
  top: 75%;
  left: 91%;
  font-size: larger;
  font-family: cursive;
}

body,
html {
  overflow-x: hidden;
}

#img {
  /* position: absolute; */
  width: 70%;
  left: 16%;
  height: 83%;
  border: 5px inset #44c767;
}
/* .bt1 {
            position: absolute;
            left: 92%;
            top: 50%;
            height: 65px;
            width: 65px;
            border-radius: 50px;
            background-color: pink;
        } */

.bt1 {
  position: absolute;
  top: 400px;
  text-align: center;
  line-height: 52px;
  font-size: 15px;
  font-family: Arial;
  width: 109px;
  height: 50px;
  border-width: 8px;
  color: #fff;
  border-color: #18ab29;
  font-weight: bold;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-shadow: 1px 1px 0px #2f6627;
  background: #44c767;
}

.bt1:hover {
  background: #5cbf2a;
}

.bt2 {
  position: absolute;
  top: 400px;
  left: 118px;
  text-align: center;
  line-height: 52px;
  font-size: 15px;
  font-family: Arial;
  width: 107px;
  height: 50px;
  border-width: 8px;
  color: #fff;
  border-color: #18ab29;
  font-weight: bold;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-shadow: 1px 1px 0px #2f6627;
  background: #44c767;
}

.bt2:hover {
  background: #5cbf2a;
}

.tab1 {
  position: absolute;
  top: 23%;
  font-size: large;
  font-family: cursive;
  border: 4px ridge pink;
}

body {
  background-size: 100%;
}
</style>