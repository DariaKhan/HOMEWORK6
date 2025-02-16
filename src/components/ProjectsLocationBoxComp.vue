<template>
  <div class="location center">
    <ul class="location__list">
      <li
        class="location__item"
        :class="{ 'location__item-active': selectedCategory === 'All' }"
      >
        <button
          class="location__button"
          :class="{ 'location__button-active': selectedCategory === 'All' }"
          @click="selectCategory('All')"
        >
          All
        </button>
      </li>
      <li
        class="location__item"
        :class="{ 'location__item-active': selectedCategory === 'Bathroom' }"
      >
        <button
          class="location__button"
          :class="{ 'location__button-active': selectedCategory === 'Bathroom' }"
          @click="selectCategory('Bathroom')"
        >
          Bathroom
        </button>
      </li>
      <li
        class="location__item"
        :class="{ 'location__item-active': selectedCategory === 'Bedroom' }"
      >
        <button
          class="location__button"
          :class="{ 'location__button-active': selectedCategory === 'Bedroom' }"
          @click="selectCategory('Bedroom')"
        >
          Bedroom
        </button>
      </li>
      <li
        class="location__item"
        :class="{ 'location__item-active': selectedCategory === 'Kitchen' }"
      >
        <button
          class="location__button"
          :class="{ 'location__button-active': selectedCategory === 'Kitchen' }"
          @click="selectCategory('Kitchen')"
        >
          Kitchen
        </button>
      </li>
      <li
        class="location__item"
        :class="{ 'location__item-active': selectedCategory === 'Livingroom' }"
      >
        <button
          class="location__button"
          :class="{ 'location__button-active': selectedCategory === 'Livingroom' }"
          @click="selectCategory('Livingroom')"
        >
          Livingroom
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectsLocationBoxComp',
  props: {
    selectedCategory: {
      type: String,
      default: 'All'
    }
  },
  methods: {
    selectCategory (category) {
      this.$emit('select-category', category)
    }
  }
}
</script>

<style scoped>
</style>
