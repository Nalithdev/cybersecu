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
    <AttackDocumentation
      title="Cyberattaque SolarWinds (2020)"
      :sections="solarwindsAttackSections"
    />
  </section>
</template>

<script lang="ts" setup>
import AttackDocumentation from '@/components/AttackDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const solarwindsAttackSections = [
  {
    title: 'Quelle est la vulnérabilité exploitée ?',
    content: `Chaîne d’approvisionnement compromise : les attaquants ont injecté un code malveillant (SUNBURST) dans les mises à jour du logiciel Orion de SolarWinds. Aucune faille zero-day exploitée directement.`,
  },
  {
    title: 'Comment l’attaque s’est-elle déroulée ?',
    content: `1. Compromission du système de développement de SolarWinds.\n2. Ajout du malware SUNBURST dans Orion, une plateforme de supervision réseau.\n3. Mise à jour distribuée à 18 000 clients, activant un accès distant furtif.\n4. Déploiement de charges spécifiques pour espionner certains clients.`,
  },
  {
    title: 'Qui a été touché ?',
    content: `• Environ 18 000 organisations ont reçu la mise à jour compromise.\n• Moins de 100 ont été activement ciblées.\n• Victimes : agences gouvernementales (US Treasury, Commerce, Homeland Security), Microsoft, FireEye, etc.`,
  },
  {
    title: 'Quels ont été les impacts ?',
    content: `• Espionnage massif de données sensibles\n• Perte de confiance dans la chaîne logicielle\n• Révocation de certificats, audits de sécurité majeurs\n• Dommages réputationnels à long terme pour SolarWinds`,
  },
  {
    title: 'Quel coût estimé pour : petite, moyenne, grande entreprise ?',
    content: `• Petite : ≈ 100k – 500k € (analyse de compromission, durcissement)\n• Moyenne : ≈ 1M – 5M € (interventions, remédiation)\n• Grande : SolarWinds a déclaré ≈ 18 millions $ de coûts directs au premier trimestre 2021 ; impact global estimé à plus de 100 millions $`,
  },
  {
    title: 'Comment s’en protéger ?',
    content: `• Auditer la chaîne CI/CD (build pipeline sécurisé)\n• Surveiller les mises à jour tierces (vérification de signature, SBOM)\n• Mettre en place une détection de comportements anormaux (EDR/XDR)\n• Séparer les privilèges et surveiller les accès à haut niveau`,
  },
  {
    title: 'Pourquoi est-ce difficile à éviter ?',
    content: `• L’attaque a exploité la **confiance implicite** dans les mises à jour logicielles\n• Très peu d’outils détectaient SUNBURST au moment de l’attaque\n• Complexité à sécuriser toute la chaîne de développement en continu`,
  },
  {
    title: 'Dans le contexte de votre entreprise, que feriez-vous ?',
    content: `• Examiner tous les logiciels tiers critiques utilisés\n• Mettre en place une journalisation renforcée sur les mises à jour\n• Intégrer des solutions SBOM (Software Bill of Materials)\n• Simuler des attaques de type supply chain en test de résilience`,
  },
]

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
