<template>
  <main>
    <CityInfo />
    <CafeList />
  </main>
</template>
<script>
import CityInfo from "../components/cities/CityInfo.vue";
import CafeList from "../components/cities/CafeList.vue";
export default {
  components: {
    CityInfo,
    CafeList,
  },
};
</script>
