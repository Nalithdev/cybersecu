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
  title: 'HTML - boutons désactivés',
  difficulty: 'Facile',
  url: 'https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives',
  goal: 'Activation du formulaire et récupérer le mot de passe.',
  technicalContext: "Le formulaire est désactivé et il faut l'activer pour récupérer le code.",
  steps: `
    1. Inspecter l'inspecteur d'éléments.
    2. Activer le formulaire.
    3. envoyer le fomulaire.
  `,
  screenshots: '../../public/challenge/bouton_unactivate_1.png',
  vulnerability: 'Modification du code html pour activer un bouton désactivé.',
  concept: "Réactivation et utilisation d'un formulaire.",
  flag: 'H************u',
  prevention: "Gérer l'accéssibiliter du formulaire depuis le serveur avec une variable.",
}
const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
