<template>
  <div class="article-block-cafes" id="articles-cafes">
    <CafeItem v-for="cafe in cafes" :key="cafe.id" :cafe="cafe" />
    <!-- <div class="article-wrapper ligth-block">
      <a href="" class="article__link-holder rosteria">
        <h3 class="article-name">Ростерія кави</h3>
      </a>
      <div class="article__dark-text">
        <p class="description">
          Автентична та єдина у своєму роді кав'ярня. Тут затишок інтер'єру
          зустрічається з романтикою каміну та красою вікових стін кінця XIX
          сторіччя.
        </p>
        <a class="dark-button button">Відвідати заклад</a>
      </div>
    </div>

    <div class="article-wrapper dark-block">
      <a href="" class="article__link-holder fabrica">
        <h3 class="article-name">Fabrica</h3>
      </a>
      <div class="article__ligth-text">
        <p class="description">
          FABBRICA – італійський ресторан з українськими продуктами. Родзинка
          закладу - відкрита кухня і приготування страв в унікальній печі ручної
          роботи.
        </p>
        <a class="light-button button">Відвідати заклад</a>
      </div>
    </div>

    <div class="article-wrapper reverse-dark-block">
      <a href="" class="article__link-holder delikacia">
        <h3 class="article-name">Delikacia</h3>
      </a>
      <div class="article__ligth-text">
        <p class="description">
          Delikacia — кафе-кондитерська в самому центрі Івано-Франківська.
          Бельгійський та іспанський шоколад, вершкове масло, найкращі вершки з
          коров’ячого молока. У поєднанні з перевіреними європейськими
          технологіями отримуємо неперевершений смак навіть звичних десертів.
        </p>
        <a class="light-button button">Відвідати заклад</a>
      </div>
    </div>

    <div class="article-wrapper reverse-ligth-block">
      <a href="" class="article__link-holder tradycia">
        <h3 class="article-name">Традиція</h3>
      </a>
      <div class="article__dark-text">
        <p class="description">
          Заклад української кухні, який переверне Ваше уявлення про національні
          страви. Наша кухня - це місце приготування старих рецептів по-новому,
          які точно будуть Вам до смаку. У кожній страві - довершений смак,
          неординарність та любов.
        </p>
        <a class="dark-button button">Відвідати заклад</a>
      </div>
    </div> -->
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
};
</script>
