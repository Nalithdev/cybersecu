<template>
  <div class="attack-doc-container">
    <h2 class="attack-doc-title">{{ title }}</h2>

    <div v-for="(section, index) in sections" :key="index" class="attack-doc-section">
      <h3>{{ section.title }}</h3>
      <p>{{ section.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Section {
  title: string
  content: string
}
defineProps<{
  title: string
  sections: Section[]
}>()
</script>

<style scoped>
.attack-doc-container {
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  max-width: 900px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.attack-doc-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.attack-doc-section {
  margin-bottom: 20px;
}

.attack-doc-section h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
}

.attack-doc-section p {
  margin: 0;
  white-space: pre-line;
  line-height: 1.6;
  color: #ffffff;
}
</style>
