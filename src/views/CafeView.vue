<template>
  <div class="cafe-photo-wrap">
    <div class="cafe__img-holder">
      <h1 class="cafe__title">{{ cafe.title }}</h1>
      <div class="rating"><span class="material-icons-outlined">e8d0</span></div>
      <div class="cafe__comments">
        <p></p>
      </div>
    </div>
    <div class="cafe__contacts bottom-row">
      <div class="cafe__contacts-icon">
        <a href="#" class="cafe__cosial-link"></a>
        <a href="#" class="cafe__cosial-link"></a>
        <a href="#" class="cafe__cite-link"></a>
      </div>
      <div class="cafe__contacts-addres">{{ cafe.address }}</div>
    </div>
  </div>
  <div class="cafe__img-holder small">
    <div class="cafe__img"></div>
    <p class="cafe__description">{{ cafe.text }}</p>
    <h2 class="cafe__working-hours">{{ cafe.workHours }}</h2>
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
