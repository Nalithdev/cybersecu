<template>
  <div class="prose max-w-4xl mx-auto px-4 py-6">
    <h1>{{ nom }}</h1>
    <p><strong>Difficulté :</strong> {{ difficulte }}</p>
    <p>
      <strong>URL :</strong> <a :href="url" target="_blank">{{ url }}</a>
    </p>

    <hr />

    <section>
      <h2>🎯 Objectif</h2>
      <p>{{ objectif }}</p>
    </section>

    <section>
      <h2>⚙️ Contexte technique</h2>
      <p>{{ contexteTechnique }}</p>
    </section>

    <section>
      <h2>🧩 Étapes de résolution</h2>
      <p style="white-space: pre-line">{{ etapesResolution }}</p>
    </section>

    <section v-if="captures">
      <h2>🖼️ Captures d’écran</h2>
      <div v-if="Array.isArray(captures)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          v-for="(img, i) in captures"
          :key="i"
          :src="img"
          :alt="`Capture ${i + 1}`"
          class="rounded shadow"
        />
      </div>
      <div v-else>
        <img :src="captures" alt="Capture d’écran" class="rounded shadow" />
      </div>
    </section>

    <section>
      <h2>🔓 Vulnérabilité exploitée</h2>
      <p>{{ vulnerabilite }}</p>
    </section>

    <section>
      <h2>📚 Concept</h2>
      <p>{{ concept }}</p>
    </section>

    <section>
      <h2>🏁 Flag</h2>
      <code class="bg-gray-100 px-2 py-1 rounded inline-block">{{ flag }}</code>
    </section>

    <section>
      <h2>🛡️ Prévention</h2>
      <p>{{ prevention }}</p>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  nom: string
  difficulte: string
  url: string
  objectif: string
  contexteTechnique: string
  etapesResolution: string
  captures: string | string[]
  vulnerabilite: string
  concept: string
  flag: string
  prevention: string
}>()
</script>

<style scoped>
.prose h1 {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.prose section {
  margin-top: 2rem;
  color: white;
  font-size: 1.5rem;
}
</style>
