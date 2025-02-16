<template>
    <div>
        <projects-banner-blog-comp/>
        <projects-gallery-comp/>
        <projects-pagination-comp/>
    </div>
</template>

<script>
import ProjectsBannerBlogComp from '@/components/ProjectsBannerBlogComp.vue'
import ProjectsGalleryComp from '@/components/ProjectsGalleryComp.vue'
import ProjectsPaginationComp from '@/components/ProjectsPaginationComp.vue'
export default {
  name: 'ProjectsPage',
  components: {
    ProjectsBannerBlogComp,
    ProjectsGalleryComp,
    ProjectsPaginationComp
  }
}
</script>
