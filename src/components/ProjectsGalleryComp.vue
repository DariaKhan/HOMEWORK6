<template>
  <div>
    <ProjectsLocationBoxComp
      :selectedCategory="selectedCategory"
      @select-category="selectCategory"
    />
    <!-- GALLERY -->
    <div class="gallery center">
      <div class="gallery__box-box">
        <div class="gallery__box-left">
          <div v-for="card in filteredGalleryCardsLeft" :key="card.id">
            <GalleryCardComp :card="card" />
          </div>
        </div>
        <div class="gallery__box-right">
          <div v-for="card in filteredGalleryCardsRight" :key="card.id">
            <GalleryCardComp :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCardComp from '@/components/GalleryCardComp.vue'
import ProjectsLocationBoxComp from '@/components/ProjectsLocationBoxComp.vue'

export default {
  name: 'ProjectsGalleryComp',
  components: {
    GalleryCardComp,
    ProjectsLocationBoxComp
  },
  data () {
    return {
      selectedCategory: 'All',
      galleryCardsLeft: [
        {
          id: 0,
          title: 'ВАННАЯ КОМНАТА',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto1.png'),
          category: 'Bathroom'
        },
        {
          id: 1,
          title: 'СПАЛЬНЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto3.png'),
          category: 'Bedroom'
        },
        {
          id: 2,
          title: 'ГОСТИНАЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto5.png'),
          category: 'Livingroom'
        },
        {
          id: 3,
          title: 'КУХНЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto7.png'),
          category: 'Kitchen'
        }
      ],
      galleryCardsRight: [
        {
          id: 0,
          title: 'КУХНЯ СОВРЕМЕННАЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto2.png'),
          category: 'Kitchen'
        },
        {
          id: 1,
          title: 'СПАЛЬНЯ СОВРЕМЕННАЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto4.png'),
          category: 'Bedroom'
        },
        {
          id: 2,
          title: 'ГОСТИННАЯ СОВРЕМЕННАЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto6.png'),
          category: 'Livingroom'
        },
        {
          id: 3,
          title: 'ВАННАЯ КОМНАТА СОВРЕМЕННАЯ',
          path: 'Декор / Планировка',
          img: require('@/assets/img/4-foto8.png'),
          category: 'Bathroom'
        }
      ]
    }
  },
  computed: {
    filteredGalleryCardsLeft () {
      if (this.selectedCategory === 'All') {
        return this.galleryCardsLeft
      }
      return this.galleryCardsLeft.filter(card => card.category === this.selectedCategory)
    },
    filteredGalleryCardsRight () {
      if (this.selectedCategory === 'All') {
        return this.galleryCardsRight
      }
      return this.galleryCardsRight.filter(card => card.category === this.selectedCategory)
    }
  },
  methods: {
    selectCategory (category) {
      this.selectedCategory = category
    }
  }
}
</script>

<style scoped>
</style>
