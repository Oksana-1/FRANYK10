<template>
  <div class="article-wrapper">
    <a href="" class="article__link-holder" :class="cafe.imageUrlClass">
      <h3 class="article-name">{{ cafe.title }}</h3>
    </a>
    <div class="article-text-">
      <p class="article-description">{{ cafe.text }}</p>
      <a class="button">Відвідати заклад</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cafe: Object,
  },
};
</script>
