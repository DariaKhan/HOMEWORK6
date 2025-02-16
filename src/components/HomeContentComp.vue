<template>
  <div>
    <!-- BANNER -->
    <div class="banner center">
      <div class="banner__box">
        <div class="banner__intra_box">
          <div class="banner__info">
            <h3 class="banner__intra_heading">
              Пусть ваш дом будет уникальным
            </h3>
            <p class="banner__intra_text">
              Существует много вариаций Lorem Ipsum, которые можно использовать
            </p>
          </div>
          <router-link to="/BlogDetailsPage" class="banner__btn">
            <span class="banner__btn_text">Начать</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <!-- PROJECTS -->
    <div class="projects center">
      <div class="projects__box">
        <h2 class="projects__heading">Следите за нашими проектами</h2>
        <p class="projects__text">
          Хорошо известно, что читатель будет отвлекаться на читабельный контент
          страницы
        </p>
      </div>
      <div class="projects-cards">
        <div v-for="projectCard in projectsCards" :key="projectCard.id">
          <HomeProjectCard :projectCard="projectCard" />
        </div>
      </div>
    </div>
    <!-- NUMBERS -->
    <div class="numbers center">
      <div class="numbers__box">
        <!-- NUMBERS INFO 1 -->
        <div class="numbers__info">
          <p class="numbers__number">12</p>
          <p class="numbers__number-info">Лет опыта</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
        <!-- NUMBERS INFO 2 -->
        <div class="numbers__info">
          <p class="numbers__number">85</p>
          <p class="numbers__number-info">Успешных проектов</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
        <!-- NUMBERS INFO 3 -->
        <div class="numbers__info">
          <p class="numbers__number">15</p>
          <p class="numbers__number-info">Проектов в работе</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
        <!-- NUMBERS INFO 4 -->
        <div class="numbers__info">
          <p class="numbers__number">95</p>
          <p class="numbers__number-info">Счастливых клиентов</p>
        </div>
      </div>
    </div>
    <!-- NEWS AND ARTICLES -->
    <div class="news-box center">
      <div class="news-box__box">
        <h2 class="news-box__heading">Статьи & Новости</h2>
        <p class="news-box__text">
          Хорошо известно, что читатель будет отвлекаться на читабельный контент
          страницы
        </p>
      </div>
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
  </div>
</template>

<script>
import HomeProjectCard from '@/components/HomeProjectCard.vue'
import HomeArticlesCard from './HomeArticlesCard.vue'
export default {
  name: 'HomeContentComp',
  components: {
    HomeProjectCard,
    HomeArticlesCard
  },
  data () {
    return {
      projectsCards: [
        {
          id: 0,
          img: require('@/assets/img/img_art1.png'),
          heading: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 1,
          img: require('@/assets/img/img_art2.png'),
          heading: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 2,
          img: require('@/assets/img/img_art3.png'),
          heading: 'Современная кухня',
          text: 'Декор / Планировка'
        },
        {
          id: 3,
          img: require('@/assets/img/img_art4.png'),
          heading: 'Современная кухня',
          text: 'Декор / Планировка'
        }
      ],
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
        }
      ],
      numbersCards: [
        {
          id: 0,
          number: 12,
          info: 'Лет опыта'
        },
        {
          id: 1,
          number: 85,
          info: 'Успешных проектов'
        },
        {
          id: 2,
          number: 15,
          info: 'Проектов в работе'
        },
        {
          id: 3,
          number: 95,
          info: 'Счастливых клиентов'
        }
      ]
    }
  }
}
</script>
