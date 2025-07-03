<template>
  <section class="page-container">
    <h1>RootMe WebPack Challenge</h1>

    <div class="card-parent">
      <div class="back-link">
        <router-link v-if="homeLink" :to="homeLink.path">
          {{ homeLink.name }}
        </router-link>
      </div>
    </div>

    <div class="p-4">
      <ChallengeDoc
        :nom="challenge.title"
        :difficulte="challenge.difficulty"
        :url="challenge.url"
        :objectif="challenge.goal"
        :contexteTechnique="challenge.technicalContext"
        :etapesResolution="challenge.steps"
        :captures="challenge.screenshots"
        :vulnerabilite="challenge.vulnerability"
        :concept="challenge.concept"
        :flag="challenge.flag"
        :prevention="challenge.prevention"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ChallengeDoc from '@/components/ChallengeDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const challenge = {
  title: 'Javascript - Webpack',
  difficulty: 'Facile',
  url: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Webpack',
  goal: 'Retrouver le mot de passe',
  technicalContext: 'Aller retrouver le mot de passe dans le code source de la page VueJs.',
  steps: `
    1. Inspecter l'inspecteur d'éléments.
    2. Trouver l'url du mapping.
    3. Analyser le fichier de mapping.
    4. Retrouver le mot de passe dans le code source.
  `,
  screenshots: './challenge/webpack.png',
  vulnerability:
    'Les fichier de mapping sont toujours présent dans le code source. donc il est facile de retrouvé le mot de passe',
  concept: " Retrouver le mot de passe dans le mapping d'un site.",
  flag: 'B******************************************************n',
  prevention: 'Ne jamais stocker un mot de passe en dur dans du code même dans mapping.',
}
const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
