<script lang="ts">
import { defineComponent, ref } from 'vue'
import { type RouteRecord, useRouter } from 'vue-router'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const router = useRouter()
    const links = router.getRoutes()
    console.log(links)
    console.log(router)
    return {
      links,
      router,
    }
  },
})
</script>

<template>
  <h1>Blog TP Cybersécurité</h1>
  <div class="card_parent">
    <div v-for="link in links" :key="link.name" class="card">
      <a :href="link.path" class="read-the-docs">{{ link.name }}</a>
    </div>
  </div>
</template>
