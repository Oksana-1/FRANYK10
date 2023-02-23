<template>
  <div class="article-block-cafes" id="articles-cafes">
    <CafeItem v-for="cafe in cityCafes" :key="cafe.id" :cafe="cafe" />
  </div>
</template>
<script>
import CafeItem from "./CafeItem.vue";
import cafes from "../../content/cafes.json";
export default {
  components: {
    CafeItem,
  },
  data() {
    return {
      cafes,
    };
  },
  computed: {
    cityCafes() {
      return this.cafes.filter((cafe) => cafe.city === this.$route.name);
    },
  },
};
</script>
