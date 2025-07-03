<template>
  <section class="page-container">
    <h1>Blog TP Cybersécurité</h1>

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
  title: 'Javascript - Authentification',
  difficulty: 'Facile',
  url: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification',
  goal: 'Trouver le mot de passe du formulaire',
  technicalContext: 'Aller retrouver le mot de passe dans le code source de la page.',
  steps: `
    1. Inspecter l'inspecteur d'éléments.
    2. Récupérer le mot de passe dans le script js.
  `,
  screenshots: '../../public/challenge/auth_js_1.png',
  vulnerability: 'Mot de passe stocké en brut dans le script',
  concept: "Voler un mot de passe d'un site.",
  flag: 's****g',
  prevention: 'Ne jamais stocker un mot de passe en dur dans du code.',
}
const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
