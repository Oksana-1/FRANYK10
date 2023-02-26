<template>
  <h1 class="cafe__title">{{ cafe.title }}</h1>
  <p class="cafe-description">{{ cafe.text }}</p>
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
