<template>
  <div>
    <!-- BANNER BLOG -->
    <div class="banner__blog center">
      <div class="banner__blog-box">
        <div class="banner__info">
          <h1 class="banner__info-heading">Статьи & Новости</h1>
          <p class="banner__info-text">Домой / Блог</p>
        </div>
      </div>
    </div>
    <!-- LAST POST -->
    <div class="last-post center">
      <p class="last-post__heading">Последний пост</p>
      <div class="last-post__inner-box">
        <div class="last-post__img-box">
          <img
            class="last-post__img"
            :src="require('@/assets/img/2-blog-main-picture.png')"
            alt="last_post_picture"
          />
        </div>
        <div class="last-post__info">
          <p class="last-post__info-heading">
            Low Cost Latest Invented Interior Designing Ideas
          </p>
          <p class="last-post__info-text">
            С того времени этот, похожий на латинский, текст стал стандартом в
            печатной промышленности для примеров шрифтов и текстов. Перед
            появлением электронных издательств дизайнеры импровизировали в
            работе над макетами, изображая текст при помощи волнистых линий. С
            появлением самоклеющихся наклеек с напечатанным текстом «Lorem
            ipsum» появился более реалистичный способ обозначения расположения
            текста на странице.
          </p>
        </div>
      </div>
    </div>
    <!-- NEWS AND ARTICLES -->
    <div class="news-box center">
      <h2 class="news-box__heading-blog">Статьи & Новости</h2>
    </div>
    <!--  ARTICLES BOX -->
    <div class="articles-box center">
      <div
        v-for="articlesBoxCard in articlesBoxCards"
        :key="articlesBoxCard.id"
      >
        <home-articles-card :articlesBoxCard="articlesBoxCard" />
      </div>
    </div>
    <!-- PAGINATION -->
    <div class="pagination center">
      <div class="pagination__element-box">
        <div class="pagination__element pagination__element-active">
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.5" cy="26" r="26" fill="#F4F0EC" />
          </svg>
          <div class="pagination__number">
            <a class="pagination__number_link" href="#">01</a>
          </div>
        </div>

        <div class="pagination__element">
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <div class="pagination__number">
            <a class="pagination__number_link" href="#">02</a>
          </div>
        </div>

        <div class="pagination__element">
          <svg
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <div class="pagination__number">
            <a class="pagination__number_link" href="#">03</a>
          </div>
        </div>
        <div class="pagination__element">
          <a class="pagination__number_link" href="#"
            ><svg
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeArticlesCard from '@/components/HomeArticlesCard.vue'
export default {
  name: 'BlogContent',
  components: {
    HomeArticlesCard
  },
  data () {
    return {
      articlesBoxCards: [
        {
          id: 0,
          img: require('@/assets/img/img_foot1.png'),
          cloudText: 'Дизайн кухни',
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь, 2022'
        },
        {
          id: 1,
          img: require('@/assets/img/img_foot2.png'),
          cloudText: 'Дизайн для жизни',
          title: 'Лучшие интерьерные идеи по низкой цене',
          date: '26 Декабрь, 2022'
        },
        {
          id: 2,
          img: require('@/assets/img/img_foot3.png'),
          cloudText: 'Дизайн Интерьера',
          title: 'Лучшие интерьерные решения для офисов',
          date: '26 Декабрь, 2022'
        },
        {
          id: 3,
          img: require('@/assets/img/img_foot4.png'),
          cloudText: 'Дизайн кухни',
          title: 'Создадим лучший макет перепланировки',
          date: '26 Декабрь, 2022'
        },
        {
          id: 4,
          img: require('@/assets/img/img_foot5.png'),
          cloudText: 'Дизайн для жизни',
          title: 'Лучшие интерьерные идеи по низкой цене',
          date: '26 Декабрь, 2022'
        },
        {
          id: 5,
          img: require('@/assets/img/img_foot6.png'),
          cloudText: 'Дизайн Интерьера',
          title: 'Лучшие интерьерные решения для офисов',
          date: '26 Декабрь, 2022'
        }
      ]
    }
  }
}
</script>

<style></style>
