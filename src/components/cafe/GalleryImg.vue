<template>
  <li>
    <div :data-src="imageSrc">
      <img alt="img1" :src="imageSrc" :data-src="imageSrc" />
    </div>
  </li>
</template>
<script>
export default {
  props: { img: String },
  data() {
    return {
      imageSrc: null,
    };
  },
  methods: {
    async init() {
      const image = await import("../../assets/img" + this.img);
      this.imageSrc = image.default;
    },
  },
  created() {
    this.init();
  },
};
</script>
