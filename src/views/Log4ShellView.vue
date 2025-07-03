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

    <AttackDocumentation title="Log4Shell – CVE-2021-44228" :sections="log4shellSections" />
  </section>
</template>

<script lang="ts" setup>
import AttackDocumentation from '@/components/AttackDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const log4shellSections = [
  {
    title: 'Quelle est la vulnérabilité exploitée ?',
    content: `Log4Shell (CVE-2021-44228) exploite une faille dans la librairie Apache Log4j, permettant une injection JNDI via des logs utilisateur non filtrés.`,
  },
  {
    title: 'Comment l’attaque s’est-elle déroulée ?',
    content: `L’attaquant envoie une chaîne spéciale dans un champ loggué (ex: User-Agent), qui déclenche une requête JNDI vers un serveur malveillant contenant du code arbitraire.`,
  },
  {
    title: 'Qui a été touché ?',
    content: `Des milliers de serveurs dans le monde entier : entreprises tech, services cloud, jeux vidéo (Minecraft), etc.`,
  },
  {
    title: 'Quels ont été les impacts ?',
    content: `Risque d’exécution de code à distance, compromission de données sensibles, propagation latérale.`,
  },
  {
    title: 'Quel coût estimé pour : petite, moyenne, grande entreprise ?',
    content: `Petite : 10k–100k €\nMoyenne : 100k–500k €\nGrande : 1M € et plus (selon l’exposition et les mesures de sécurité)`,
  },
  {
    title: 'Comment s’en protéger ?',
    content: `• Mettre à jour Log4j (≥ 2.17.0)\n• Désactiver la résolution JNDI\n• Monitorer les logs et limiter les entrées utilisateur logguées`,
  },
  {
    title: 'Pourquoi est-ce difficile à éviter ?',
    content: `• Très répandue dans les applications Java\n• Parfois embarquée dans des dépendances tierces\n• Exploitable très facilement à distance`,
  },
  {
    title: 'Dans le contexte de votre entreprise, que feriez-vous ?',
    content: `• Scanner les dépendances Java\n• Appliquer un patch immédiat\n• Mettre en place une détection d’exploitation dans les logs\n• Segmenter les applications critiques`,
  },
]

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
