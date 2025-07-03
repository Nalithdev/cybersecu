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

    <AttackDocumentation title="Ransomware WannaCry (2017)" :sections="wannacryAttackSections" />
  </section>
</template>

<script lang="ts" setup>
import AttackDocumentation from '@/components/AttackDoc.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const wannacryAttackSections = [
  {
    title: 'Quelle est la vulnérabilité exploitée ?',
    content: `WannaCry exploitait la vulnérabilité CVE-2017-0144 (nommée EternalBlue), une faille dans le protocole SMBv1 de Windows. Cette faille avait été découverte par la NSA et divulguée par le groupe Shadow Brokers.`,
  },
  {
    title: 'Comment l’attaque s’est-elle déroulée ?',
    content: `1. Diffusion du ransomware via le réseau en exploitant SMBv1 (vers Windows non patchés).\n2. Une fois installé, le malware chiffrant tous les fichiers de la machine infectée.\n3. Affichage d’un message demandant une rançon en Bitcoin.\n4. Propagation automatique vers d'autres machines vulnérables du réseau.`,
  },
  {
    title: 'Qui a été touché ?',
    content: `Environ 230 000 ordinateurs dans plus de 150 pays.\nVictimes notables : le NHS (santé britannique), Renault, FedEx, Telefonica, des hôpitaux, banques et universités.`,
  },
  {
    title: 'Quels ont été les impacts ?',
    content: `• Paralysie de services hospitaliers (opérations annulées, systèmes hors ligne)\n• Arrêt temporaire d'usines ou de chaînes de production\n• Perte de données non récupérables\n• Coûts élevés pour restaurer les systèmes et renforcer la sécurité`,
  },
  {
    title: 'Quel coût estimé pour : petite, moyenne, grande entreprise ?',
    content: `• Petite : 10k – 50k € (restauration système, perte d'activité)\n• Moyenne : 100k – 500k € (dommages, sécurité)\n• Grande : NHS a perdu ≈ 92 millions £ ; coût mondial estimé entre 4 et 8 milliards $`,
  },
  {
    title: 'Comment s’en protéger ?',
    content: `• Appliquer les mises à jour de sécurité (MS17-010)\n• Désactiver SMBv1 sur les systèmes Windows\n• Sauvegardes régulières hors ligne\n• Utiliser des antivirus et solutions EDR fiables\n• Segmenter les réseaux pour limiter la propagation`,
  },
  {
    title: 'Pourquoi est-ce difficile à éviter ?',
    content: `• De nombreuses machines utilisaient encore des systèmes obsolètes non patchés (Windows XP, 7)\n• La propagation était très rapide en réseau local\n• Certaines entreprises n'avaient pas de politique de mise à jour efficace`,
  },
  {
    title: 'Dans le contexte de votre entreprise, que feriez-vous ?',
    content: `• Auditer les postes vulnérables au protocole SMBv1\n• Interdire SMBv1 sur tous les systèmes\n• Mettre en place des sauvegardes automatisées et testées\n• Éduquer les utilisateurs sur les ransomware et pièces jointes suspects\n• Mettre en place une supervision réseau avec alerte sur comportement anormal`,
  },
]

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>
