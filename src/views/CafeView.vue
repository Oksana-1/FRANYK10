<template>
  <div class="cafe-photo-wrap">
    <div class="cafe__img-holder">
      <h1 class="cafe__title">{{ cafe.title }}</h1>
      <div class="rating">Рейтинг від сервісу GoogleMaps<i class="material-icons">star_rate</i>{{ cafe.rating }}</div>
      <div class="cafe__price"><i class="material-icons">&#xe227;</i>{{ cafe.price }}</div>
      <div class="cafe__comments">
        <p>{{ cafe.comments }}</p>
      </div>
    </div>
    <div class="cafe__contacts bottom-row">
      <div class="cafe__contacts-icon">
        <a href="#" class="cafe__cosial-link">Instagram</a>
        <a href="#" class="cafe__cosial-link">Facebook</a>
        <a href="#" class="cafe__cite-link">Web-cite</a>
      </div>
      <div class="cafe__contacts-addres"><i class="material-icons">location_on</i>{{ cafe.address }}</div>
      <div class="cafe__contacts-telephone"><i class="material-icons">call</i>{{ cafe.telephone }}</div>
    </div>
  </div>
  <div class="cafe__img-holder small">
    <div class="cafe__img"></div>
    <p class="cafe__description">{{ cafe.text }}</p>
    <h2 class="cafe__working-hours"><i class="material-icons">access_time</i>{{ cafe.workHours }}</h2>
  </div>
  <div class="cafe__gallery"></div>
</template>
<script>
import cafes from "../content/cafes.json";

export default {
  data() {
    return {
      cafeId: this.$route.params.id,
    };
  },
  computed: {
    cafe() {
      return cafes.find((cafe) => cafe.id === +this.cafeId);
    },
  },
  created() {
    console.log(this.cafe);
    console.log(this.cafeId, typeof this.cafeId);
  },
};
</script>
