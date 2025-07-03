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

    <AttackDocumentation title="Cyberattaque NotPetya (2017)" :sections="notpetyaAttackSections" />
  </section>
</template>

<script lang="ts" setup>
import AttackDocumentation from '@/components/AttackDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const notpetyaAttackSections = [
  {
    title: 'Quelle est la vulnérabilité exploitée ?',
    content: `NotPetya exploitait les mêmes failles que WannaCry, notamment EternalBlue (CVE-2017-0144) et EternalRomance. Il utilisait aussi des identifiants Windows volés pour se propager latéralement via PSExec et WMI.`,
  },
  {
    title: 'Comment l’attaque s’est-elle déroulée ?',
    content: `1. Un logiciel ukrainien de comptabilité (MeDoc) a été compromis par les attaquants.\n2. Une mise à jour malveillante contenant NotPetya a été poussée aux utilisateurs.\n3. Le malware se propage ensuite en réseau local via SMBv1, PSExec et WMI.\n4. Contrairement à un ransomware classique, NotPetya chiffrait irrémédiablement le MFT du disque, rendant les systèmes inutilisables.`,
  },
  {
    title: 'Qui a été touché ?',
    content: `• Cibles principales : entreprises en Ukraine.\n• Propagation rapide dans le monde entier : Maersk, Merck, Rosneft, FedEx (TNT), Saint-Gobain, WPP, etc.\n• Environ 12 500 machines infectées en quelques heures.`,
  },
  {
    title: 'Quels ont été les impacts ?',
    content: `• Systèmes rendus inopérants de façon irréversible (pas de réelle possibilité de récupération)\n• Arrêt complet des activités pour certaines entreprises (Maersk a dû reconfigurer son infrastructure mondiale)\n• Dommages importants à la chaîne logistique mondiale\n• Perte de données, interruption de services critiques`,
  },
  {
    title: 'Quel coût estimé pour : petite, moyenne, grande entreprise ?',
    content: `• Petite : 100k – 500k € (matériel et données perdues, reprise lente)\n• Moyenne : 1M – 10M € (systèmes HS, reconfiguration, perte d’activité)\n• Grande : Maersk ≈ 300 millions $, FedEx ≈ 400 millions $, coût global estimé > 10 milliards $`,
  },
  {
    title: 'Comment s’en protéger ?',
    content: `• Appliquer les correctifs de sécurité (MS17-010 entre autres)\n• Désactiver SMBv1\n• Contrôler les logiciels tiers utilisés (supply chain security)\n• Surveillance réseau active (EDR, SIEM)\n• Limitation des droits d’administration (PSExec, WMI)`,
  },
  {
    title: 'Pourquoi est-ce difficile à éviter ?',
    content: `• La compromission est passée par un logiciel **de confiance** utilisé massivement en Ukraine\n• Utilise plusieurs vecteurs de propagation\n• Détruit les fichiers de manière permanente sans possibilité de payer une rançon\n• L’attaque était bien planifiée et visait la destruction plus que le gain financier`,
  },
  {
    title: 'Dans le contexte de votre entreprise, que feriez-vous ?',
    content: `• Évaluer les dépendances logicielles et leurs origines géographiques\n• Renforcer les contrôles de mises à jour tierces\n• Segmenter le réseau pour limiter la propagation latérale\n• Former le personnel IT à détecter les anomalies de propagation rapide\n• Prévoir un plan de reprise après sinistre avec restauration isolée des sauvegardes`,
  },
]
const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
