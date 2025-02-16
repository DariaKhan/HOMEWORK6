<template>
  <div>
    <!-- CARD 1 -->
    <div class="articles-box__card">
      <div class="articles-box__inner-frame">
        <div class="articles-box__img-box">
          <img
            class="articles-box__img"
            :src="articlesBoxCard.img"
            alt="article_picture"
          />
          <div class="articles-box__cloud">
            <p class="articles-box__cloud-text">
              {{ articlesBoxCard.cloudText }}
            </p>
          </div>
        </div>
        <div class="articles-box__info">
          <p class="articles-box__title">
            {{ articlesBoxCard.title }}
          </p>
          <div class="articles-box__inner-box">
            <p class="articles-box__date">{{ articlesBoxCard.date }}</p>
            <router-link to="/ProjectsDetailsPage">
              <svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="&#62;">
                  <circle
                    id="Ellipse 4"
                    cx="26"
                    cy="26.267"
                    r="26"
                    fill="#F4F0EC"
                  />
                  <path
                    id="Vector"
                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProjectCard',
  props: {
    articlesBoxCard: {
      type: Object,
      required: true
    }
  }
}
</script>
