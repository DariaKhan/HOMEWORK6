<template>
  <div>
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
export default {
  name: 'ProjectsPaginationComp'
}
</script>

<style>
</style>
