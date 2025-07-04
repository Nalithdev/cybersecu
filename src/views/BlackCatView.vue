<template>
  <div class="presentation-container">
    <h1>🎯 Groupe BlackCat / ALPHV – Présentation</h1>
    <div class="card-parent">
      <div class="back-link">
        <router-link v-if="homeLink" :to="homeLink.path">
          {{ homeLink.name }}
        </router-link>
      </div>
    </div>

    <section>
      <h2>🔹 Nom d’origine, affiliation, motivations</h2>
      <ul>
        <li><strong>Nom d’origine :</strong> ALPHV (AlphaV)</li>
        <li><strong>Alias :</strong> BlackCat (nom tiré du binaire <code>blackcat.exe</code>)</li>
        <li><strong>Affiliations :</strong> RaaS, anciens liens avec REvil et DarkSide</li>
        <li>
          <strong>Motivations :</strong> Financières, organisation structurée, parfois semi-étatique
        </li>
      </ul>
    </section>

    <section>
      <h2>📅 Timeline des attaques majeures & évolution</h2>
      <ul>
        <li><strong>Fév. 2022 :</strong> Attaque de SwissPort</li>
        <li><strong>2022 :</strong> Attaques sur universités, santé, énergie</li>
        <li><strong>Déc. 2022 :</strong> Site public de fuite avec moteur de recherche</li>
        <li><strong>Juin 2023 :</strong> Triple extorsion (chiffrement + vol + DDoS)</li>
        <li><strong>Avril 2024 :</strong> Pause ou dissimulation d’activité</li>
        <li><strong>2024–2025 :</strong> Reprise via affiliés malgré pression</li>
      </ul>
    </section>
    <img :src="image" alt="Blackcat">

    <section>
      <h2>🧬 Malwares, méthode d’intrusion, infrastructure</h2>
      <p><strong>Langage :</strong> Rust</p>
      <p>
        <strong>Payloads :</strong> <code>blackcat.exe</code>, PowerShell, Cobalt Strike, Mimikatz,
        AnyDesk
      </p>
      <p>
        <strong>Méthodes :</strong> Vulnérabilités (VPN/RDP), phishing ciblé, identifiants volés
      </p>
      <p><strong>Infrastructure :</strong> Tor, VPS, stockage sur Mega.nz ou FTP anonymes</p>
    </section>

    <section>
      <h2>🌍 Secteurs, géographie, sélection des cibles</h2>
      <ul>
        <li><strong>Secteurs :</strong> Santé, éducation, services publics, tech, logistique</li>
        <li><strong>Zones :</strong> USA, Europe (incl. France), évite pays CEI</li>
        <li><strong>Cibles :</strong> Selon criticité (SCADA, hôpitaux) et capacité à payer</li>
      </ul>
    </section>

    <section>
      <h2>🧾 Signatures techniques & comportements distinctifs</h2>
      <ul>
        <li>Chiffreur Rust multithreadé avec options personnalisées</li>
        <li>Déploiement via GPO (Active Directory)</li>
        <li>Option “kill ESXi” (cible les environnements virtualisés)</li>
        <li>Message personnalisé avec clé publique unique</li>
        <li>Extorsion seule possible sans chiffrement</li>
      </ul>
    </section>

    <section>
      <h2>🧪 IOCs (indicateurs de compromission)</h2>
      <ul>
        <li><strong>Fichier :</strong> <code>blackcat.exe</code></li>
        <li><strong>Hash exemple :</strong> <code>3e83e0f0f1a0d9818a93f3d18c8f2f69...</code></li>
        <li>
          <strong>Domaines :</strong> <code>megalocker[.]onion</code>,
          <code>blackcat-support[.]onion</code>
        </li>
        <li><strong>IPs :</strong> VPS anonymes temporaires</li>
        <li><strong>Sources :</strong> CERT-FR, CISA, VirusTotal</li>
      </ul>
    </section>

    <section>
      <h2>🛡️ Comment se protéger ?</h2>
      <ul>
        <li><strong>Réseau :</strong> Désactiver SMBv1, filtrer RDP, restreindre GPO</li>
        <li><strong>Surveillance :</strong> SIEM, EDR, YARA, surveiller Tor/Mega</li>
        <li><strong>Sauvegardes :</strong> Quotidiennes, hors ligne et testées</li>
        <li><strong>Vulnérabilités :</strong> MàJ régulière des équipements réseau</li>
        <li><strong>Humain :</strong> Anti-phishing, MFA obligatoire</li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
const image = './blackcat.png'
</script>

<style scoped>
.presentation-container {
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  max-width: 1500px;
  margin: auto;
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

h1 {
  font-size: 2em;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.2em;
  margin-top: 20px;
}

ul {
  padding-left: 20px;
  margin-top: 8px;
}

li {
  margin-bottom: 6px;
}

code {
  padding: 2px 4px;
  border-radius: 4px;
  font-family: monospace;
}
</style>
