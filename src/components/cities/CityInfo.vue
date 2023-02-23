<template>
  <div class="photo-city-wrap" :class="city.bannerImgClass">
    <div class="city__img-holder">
      <h2 class="city__header">{{ city.bannerTitle }}</h2>
      <p class="city__text-wrap" v-html="city.bannerText" />
      <div class="button-wrapper">
        <a href="#articles-cafes" class="button">Перейти до огляду</a>
      </div>
    </div>
  </div>
  <div class="desctiption-city-block">
    <p class="desctiption-text-wrap" v-html="city.descrText" />
    <!-- <h2 class="desctiption-header">Локації Івано-Франківська</h2> -->
  </div>
</template>
<script>
import cities from "../../content/cities.json";
export default {
  data() {
    return {
      cities,
    };
  },
  computed: {
    city() {
      //return cities[0];
      return this.cities.find((city) => city.name === this.$route.name);
    },
  },
  created() {
    console.log(this.cities);
    console.log(this.city);
  },
};
</script>
