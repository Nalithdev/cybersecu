<script lang="ts">
import { defineComponent, ref } from 'vue'
import { type RouteRecord, useRouter } from 'vue-router'

export default defineComponent({
  name: 'HelloWorld',
  setup() {

    const router = useRouter()
    const links = router.getRoutes()
    return {
      links,
      router
    }
  }
})
</script>

<template>
  <h1>Blog TP Cybersécurité</h1>
  <div class="card_parent">
    <div v-for="link in links" :key="link.name" class="card">
      <a :href="link.path" class="read-the-docs">{{ link.name }}</a>
      <img :src="link.meta.image" alt="Image" class="image_home" />
    </div>
  </div>
</template>
