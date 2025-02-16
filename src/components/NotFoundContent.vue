<template>
  <div>
    <!-- BANNER -->

    <div class="banner404">
      <div class="banner404__left center">
        <h3 class="banner404__heading">404</h3>
        <p class="banner404__text">
          Приносим извинения, но страница, которую вы искали, не найдена
        </p>
        <router-link to="/" class="banner__btn">
          <span class="banner__btn_text">Далее</span>
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
      <div class="banner404__right">
        <img :src="require('@/assets/img/img404.png')" alt="img404"
        class="banner404__img" />
      </div>
    </div>
  </div>
</template>
