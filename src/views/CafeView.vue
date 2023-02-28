<template>
  <h1 class="cide__title">{{ cafe.title }}</h1>
  <div class="cafe-photo-wrap">
    
    <div class="cafe__img-holder">
      <div class="cafe__main-img"></div>
    </div>
    <div class="cafe__cide-description">
      
      <div class="cide__wrapper">
        <div class="cide__rating"><i class="material-icons">star_rate</i>Рейтинг від сервісу GoogleMaps - {{ cafe.rating }}</div>
        <div class="cide__price"><i class="material-icons">&#xe227;</i>{{ cafe.price }}</div>
        <div class="cide__contacts-addres"><i class="material-icons">location_on</i>{{ cafe.address }}</div>
        <div class="cide__contacts-telephone"><i class="material-icons">call</i>{{ cafe.telephone }}</div>
        <h2 class="cide__working-hours"><i class="material-icons">access_time</i>{{ cafe.workHours }}</h2>
        
      </div>
      <div class="cide_contacts">
        <a href="#" class="cafe__cosial-link">Instagram</a>
        <a href="#" class="cafe__cosial-link">Facebook</a>
        <a href="#" class="cafe__cite-link">Web-cite</a>
      </div>
    </div>
  </div>
  <div class="cafe__central-holder">
    <div class="central-holder__description">
      <h2 class="description__title"></h2>
      <p class="description__subtitle">{{ cafe.text }}</p>
    </div>
    <div class="central-holder__comments">
      <h3 class="comments__title">Особисті поради та рекомендації</h3>
      <p>{{ cafe.comments }}</p>
    </div>
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
