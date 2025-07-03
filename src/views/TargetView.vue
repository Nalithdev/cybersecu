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
      title="Cyberattaque contre Target (2013)"
      :sections="targetAttackSections"
    />
  </section>
</template>

<script lang="ts" setup>
import AttackDocumentation from '@/components/AttackDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const targetAttackSections = [
  {
    title: 'Quelle est la vulnérabilité exploitée ?',
    content: `Compromission des identifiants d’un fournisseur tiers (HVAC) permettant un accès au réseau interne de Target. Aucune faille technique complexe : faiblesse dans la gestion des accès.`,
  },
  {
    title: 'Comment l’attaque s’est-elle déroulée ?',
    content: `1. Les attaquants ont volé les identifiants d'un sous-traitant.\n2. Ils ont accédé au réseau de Target via une passerelle externe.\n3. Un malware (BlackPOS) a été installé sur les terminaux de paiement (POS).\n4. Les données de carte bancaire ont été siphonnées puis exfiltrées.`,
  },
  {
    title: 'Qui a été touché ?',
    content: `Environ 40 millions de clients pour les données de cartes bancaires et 70 millions de personnes pour des données personnelles (emails, adresses, noms, etc.).`,
  },
  {
    title: 'Quels ont été les impacts ?',
    content: `• Perte de confiance des consommateurs\n• Démission du PDG et du CIO\n• Frais juridiques et réglementaires\n• Amendes, indemnisations et actions collectives\n• Renforcement de la régulation (ex : PCI DSS)`,
  },
  {
    title: 'Quel coût estimé pour : petite, moyenne, grande entreprise ?',
    content: `• Petite : 100k – 500k € (gestion de crise, réputation)\n• Moyenne : 1M – 5M € (perte clients, juridiques)\n• Grande : 162 millions $ de coûts directs pour Target (après assurances)`,
  },
  {
    title: 'Comment s’en protéger ?',
    content: `• Segmenter les réseaux internes (accès limité au POS)\n• Renforcer les contrôles des accès des partenaires tiers\n• Surveillance réseau avancée (SIEM, détection d’anomalies)\n• Tests de pénétration réguliers et audits de sécurité`,
  },
  {
    title: 'Pourquoi est-ce difficile à éviter ?',
    content: `• La chaîne d’approvisionnement est souvent un point faible\n• Les fournisseurs tiers ont parfois des accès étendus\n• Les systèmes de paiement sont critiques et souvent difficiles à isoler complètement`,
  },
  {
    title: 'Dans le contexte de votre entreprise, que feriez-vous ?',
    content: `• Évaluer les accès réseau donnés aux sous-traitants\n• Mettre en place une segmentation réseau rigoureuse\n• Mettre en œuvre une supervision active des flux POS\n• Former les fournisseurs aux bonnes pratiques de sécurité`,
  },
]

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
