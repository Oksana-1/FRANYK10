<template>
  <a :href="img">
    <img alt="img1" :src="img" />
  </a>
</template>
<script>
export default {
  props: { img: String },
  methods: {
    async init() {
      const image = await import("'" + this.img + "'");
      console.log(image);
    },
  },
  created(){
    this.init();
  }
};
</script>
