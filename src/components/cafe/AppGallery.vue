<template>
  <lightgallery :settings="{ speed: 500, plugins: plugins }">
    <ul>
      <GalleryImg v-for="image in gallery" :key="image" :img="image" />
    </ul>
  </lightgallery>
</template>
<script>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import GalleryImg from "../cafe/GalleryImg.vue";

export default {
  components: { Lightgallery, GalleryImg },
  props: { gallery: Array },
  data() {
    return { plugins: [lgThumbnail, lgZoom] };
  },
};
</script>
<style lang="css" scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
