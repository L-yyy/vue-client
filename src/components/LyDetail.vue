<template>
  <div>
    <LyHeader></LyHeader>
    <!--内容区域-->
    <div id="app">
      <div class="conbox">
        <div class="c-top">
          <div class="c-top-l">
            <img :src="require(`@/assets/${item.imgpath}`)" />
          </div>
          <div class="c-top-r">
            <h3>
              永结无间：{{ item.type }}周边<br /><small>Eternal Knot: {{item.ucname}}skin</small>
            </h3>
            <p>商品名称 :{{ item.name }}</p>
            <p>商品属性 :{{ item.useway }}</p>
            <p>商品材质 :{{ item.cailiao }}</p>
            <p>商品源于 :{{ item.time }}</p>
            <h4>单价:￥{{ item.oneprice }}</h4>

            <div class="goumai">
              <input class="jia" type="button" value="+" id="jia" v-on:click="addNum" />
              <!-- <button v-on:click="addNum" id="jia">+</button> -->
              <input type="text" value="1" id="sltxt" class="number" v-model="skin.nums" @input="handleChange"/>
              <input class="jian" type="button" value="-" id="jian" v-on:click="jianNum" />
              <!-- <button v-on:click="jianNum" id="jian">-</button> -->
              <input class="goToShopingcar" type="button" value="加入购物车" v-on:click="gwc" />
              <input class="goumai" type="button" value="立即购买" v-on:click="mai" />

              <img
                v-if="this.skin.isMai === true"
                src="../assets/ly/zftp.jpg"
              />
              <li>
                <a
                  v-if="this.skin.isMai === true"
                  v-on:click="zf"
                  src="images/ly/zftp.jpg"
                  class="zf"
                  >扫码支付,支付完成点击此处</a
                >
              </li>
            </div>
            <br />
            <p
              style="
                clear: both;
                color: red;
                font-size: 14px;
                line-height: 40px;
              "
            >
              温馨提醒：最终解释权归本店所有
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
  name: "LyDetail",
  data() {
    return {
      item: {},
      skin: {
        name: "永结无间红皮",
        onePrice: 1800,
        nums: 1,
        isMai: false,
        isGWC: false,
      },
      allPrice: 0,
    };
  },
  methods: {
    handleChange() {
      if (this.skin.nums <= 0 || this.skin.nums == null || this.skin.nums == "") {
        this.skin.nums = 1;
        alert("至少选择1份！");
      }
    },
    addNum() {
      this.skin.nums++;
    },
    jianNum() {
      if (this.skin.nums >1) {
        this.skin.nums--;
      }else{
        alert("不能再减少了哦！")
      }
    },
    qi() {
      this.skin.onePrice = 1800;
    },
    zhuan() {
      this.skin.onePrice = 998;
    },
    qing() {
      this.skin.onePrice = 98;
    },
    mai() {
      this.skin.isMai = true;
      console.log(this.skin.isMai);
    },
    zf() {
      if (this.allPrice >= 1800) {
        alert(
          "成功支付" +
            this.allPrice +
            "元。\n您已升为本店至尊VIP，欢迎下次光临！！！"
        );
        this.skin.isMai = false;
      } else if (this.allPrice >= 998) {
        alert(
          "成功支付" +
            this.allPrice +
            "元。\n您已升为本店普通VIP，再消费998即可升为至尊VIP！！"
        );
        this.skin.isMai = false;
      } else {
        alert("成功支付" + this.allPrice + "元。\n再消费998即可升为普通VIP！");
        this.skin.isMai = false;
      }
    },
    gwc() {
      alert("成功加入购物车！！！");
    },
  },
  watch: {
    skin: {
      handler(value) {
        this.allPrice = value.nums * value.onePrice;
        console.log(this.allPrice);
      },
      deep: true,
      immediate: true,
    },
  },

  components: {
    LyFooter,
    LyHeader,
  },
  mounted(){

  },
  created() {
    this.$http.get("api/wuqis/detail/"+this.$route.params.id).then((res) => {
      this.item = res.data.data
    });
  },
};
</script>

<style>
.jia{
  width: 20px;
  height: 20px;
}
.jian{
  width: 20px;
  height: 20px;
}
.goumai{
  margin-left: 5px;
}
.goToShopingcar{
  margin-left: 20px;
}
.number{
  width: 30px;
  text-align: center;
}
.goumai{
  margin-top: 10px;
  margin-bottom: 10px;
}
.conbox {
  width: 1200px;
  height: auto;
  margin: auto;
}

.c-top {
  width: 1200px;
  height: auto;
  display: inline-block;
}

.c-top-l {
  width: 500px;
  height: auto;
  float: left;
  margin-left: 60px;
}

.c-top-l > img:nth-child(1) {
  margin-left: 40px;
}

.c-top-l > .xiaotu {
  border: 1px solid #666666;
  display: inline-block;
}

.c-top-r {
  width: 500px;
  height: auto;
  float: left;
  margin-left: 70px;
  margin-top: 30px;
}

.c-top-r > h3 {
  width: 400px;
  font-size: 24px;
  line-height: 30px;
  color: #fc4f52;
  text-align: center;
  font-weight: normal;
}

.c-top-r > h3 > small {
  text-align: center;
  font-size: 18px;
}

.c-top-r > p {
  color: #ad1d1d;
  line-height: 35px;
  font-size: 18px;
}
</style>