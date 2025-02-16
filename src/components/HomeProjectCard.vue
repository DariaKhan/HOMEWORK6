<template>
  <div>
    <!-- CARD 1-->
    <div class="projects-card">
      <img
        class="projects-card__img img1"
        :src="projectCard.img"
        alt="card_img"
      />
      <div class="projects-card__info">
        <div class="projects-card__info_box">
          <h3 class="projects-card__heading">
            {{ projectCard.heading }}
          </h3>
          <p class="projects-card__text">{{ projectCard.text }}</p>
        </div>
        <a class="projects-card_link" href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path
              d="M32 44L40 35L32 26"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
    <!-- CARD 1-->
  </div>
</template>

<script>
export default {
  name: 'HomeProjectCard',
  props: {
    projectCard: {
      type: Object,
      required: true
    }
  }
}
</script>
