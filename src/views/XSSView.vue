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
  title: 'XSS - Stockée 1',
  difficulty: 'Facile',
  url: 'https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1',
  goal: 'Récupérer le mot de passe administrateur',
  technicalContext:
    'Recupérer le mot de passe administrateur présent dans le cookie de session caché.',
  steps: `
    1. Injecter du code dans le formulaire.
    2. Aller sur Webhook https://webhook.site/ pour récupérer les données.
  `,
  screenshots: './challenge/XSS.png',
  vulnerability:
    'Les formulaires peuvent être utilisé pour injecter du code, ce qui permet de voler des données sensibles.',
  concept: 'Sécurisé les données réceptionner coté serveur.',
  flag: 'N***********************6',
  prevention:
    'Ne jamais stocker les mots de passent dans des cookies de session, utiliser plutôt des tokens',
}
const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
