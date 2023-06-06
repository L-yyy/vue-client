<template>
  <div>
    <LyHeader></LyHeader>
    <video class="video" v-if="status == 1" src="../assets/lll.mp4" controls></video>
    <LyFooter></LyFooter>
  </div>
</template>

<script>
import LyFooter from "../components/LyFooter";
import LyHeader from "../components/LyHeader";
export default {
  name: "LyNewdetail.vue",
  data() {
    return {
      status: 1,
      item: {},
    };
  },
  components: {
    LyFooter,
    LyHeader,
  },
  created() {
    this.$http.get("api/news/detail/" + this.$route.params.id).then((res) => {
      this.item = res.data.data;
    });
  },
};
</script>

<style>
.video {
  height: 100%;
  width: 100%;
}
</style>