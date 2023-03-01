<template>
  <div class="cafe__wrapper">
    <div class="cafe-photo-wrap">
      <div class="cafe__img-holder">
        <div class="cafe__main-img">
          <div class="cide__rating">
            <i class="material-icons">star_rate</i>Рейтинг GoogleMaps:
            {{ cafe.rating }}
          </div>
          <div class="cide__price">
            <i class="material-icons">&#xe227;</i>Цінник: {{ cafe.price }}
          </div>
        </div>
      </div>
      <div class="cafe__cide-description">
        <h1 class="cide__title">{{ cafe.title }}</h1>
        <div class="cide__wrapper">
          <div class="cide__bar">
            <div class="icon-holder">
              <i class="material-icons">location_on</i>Адреса:
            </div>
            <p class="addres-holder">{{ cafe.address }}</p>
          </div>
          <div class="cide__bar">
            <div class="icon-holder">
              <i class="material-icons">call</i>Контактний телефон:
            </div>
            <p class="addres-holder">{{ cafe.telephone }}</p>
          </div>
          <div class="cide__bar">
            <div class="icon-holder">
              <i class="material-icons">access_time</i>Робочі години:
            </div>
            <p class="addres-holder">{{ cafe.workHours }}</p>
          </div>
        </div>
        <div class="cide_contacts">
          <a href="{{ cafe.socialLink }}" class="cafe__link" target="_blank">Social Media</a>
          <a href="#" class="cafe__link" target="_blank">Web-cite</a>
        </div>
      </div>
    </div>
    <div class="cafe__central-holder">
      <div class="central-holder__comments">
        <h2 class="comments__title">Особисті рекомендації</h2>
        <p>{{ cafe.comments }}</p>
      </div>
      <div class="central-holder__description">
        <h2 class="description__title">Опис закладу</h2>
        <p class="description__subtitle">{{ cafe.text }}</p>
      </div>
    </div>
    <div class="cafe__gallery">
      <h2 class="gallery__title">Photo Gallery</h2>
    </div>
  </div>
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
