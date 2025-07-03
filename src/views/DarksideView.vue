<template>
  <div class="presentation-container">
    <h1>🎯 Groupe DarkSide / BlackMatter – Présentation</h1>
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
        <li><strong>Nom d’origine :</strong> DarkSide</li>
        <li>
          <strong>Alias :</strong> BlackMatter (nom adopté après la disparition publique de
          DarkSide)
        </li>
        <li>
          <strong>Affiliations :</strong> Groupe RaaS (Ransomware-as-a-Service), liens possibles
          avec REvil
        </li>
        <li>
          <strong>Motivations :</strong> Financières, opérations bien structurées, volonté affichée
          d'éviter certains secteurs (hôpitaux, éducation, etc.)
        </li>
      </ul>
    </section>

    <section>
      <h2>📅 Timeline des attaques majeures & évolution</h2>
      <ul>
        <li><strong>Août 2020 :</strong> Apparition du groupe DarkSide</li>
        <li>
          <strong>Mai 2021 :</strong> Attaque de Colonial Pipeline (USA), causant des perturbations
          majeures dans la distribution de carburant
        </li>
        <li>
          <strong>Juin 2021 :</strong> DarkSide annonce cesser ses opérations suite aux pressions
          gouvernementales
        </li>
        <li><strong>Juillet 2021 :</strong> Réapparition sous le nom "BlackMatter"</li>
        <li>
          <strong>Novembre 2021 :</strong> BlackMatter annonce sa fermeture suite à l’infiltration
          de ses serveurs
        </li>
      </ul>
    </section>

    <section>
      <h2>🧬 Malwares, méthode d’intrusion, infrastructure</h2>
      <p><strong>Langages :</strong> C++, Go</p>
      <p><strong>Payloads :</strong> Chiffreur personnalisé, variantes 32 et 64 bits</p>
      <p>
        <strong>Méthodes :</strong> Accès via RDP, credentials volés, phishing, vulnérabilités non
        corrigées
      </p>
      <p><strong>Outils :</strong> Cobalt Strike, PowerShell, PSExec</p>
      <p>
        <strong>Infrastructure :</strong> Sites de fuite sur Tor, hébergeurs anonymes, serveurs
        relais
      </p>
    </section>

    <section>
      <h2>🌍 Secteurs, géographie, sélection des cibles</h2>
      <ul>
        <li>
          <strong>Secteurs visés :</strong> Énergie, industrie, finance, agriculture, collectivités
          locales
        </li>
        <li><strong>Zones :</strong> Majoritairement Amérique du Nord et Europe</li>
        <li>
          <strong>Exclusions :</strong> Pays de la CEI (ex-URSS), hôpitaux, ONG — selon leur
          politique "éthique"
        </li>
      </ul>
    </section>

    <section>
      <h2>🧾 Signatures techniques & comportements distinctifs</h2>
      <ul>
        <li>Déploiement rapide via scripts automatisés</li>
        <li>Message de rançon multilingue</li>
        <li>Exfiltration + chiffrement (double extorsion)</li>
        <li>Identifiants Active Directory ciblés pour propagation</li>
        <li>Horodatage des fichiers altéré pour brouiller les pistes</li>
      </ul>
    </section>

    <section>
      <h2>🧪 IOCs (indicateurs de compromission)</h2>
      <ul>
        <li><strong>Hash exemple :</strong> <code>fae1c91c4e124d41c95e014d7f1140e0...</code></li>
        <li><strong>Domaines .onion :</strong> darkside-onion[.]tor, blackmatter-onion[.]tor</li>
        <li><strong>IPs :</strong> Serveurs hébergés en Russie, VPS temporaires</li>
        <li><strong>Liens :</strong> Recherchables sur CISA, FBI Flash Reports, CERT-FR</li>
      </ul>
    </section>

    <section>
      <h2>🛡️ Comment se protéger ?</h2>
      <ul>
        <li><strong>Prévention :</strong> MFA partout, audits réguliers des accès externes</li>
        <li>
          <strong>Réduction d’attaque :</strong> Fermer RDP si non utilisé, segmentation réseau
        </li>
        <li><strong>Surveillance :</strong> SIEM, analyse des logs AD, détection de PSExec</li>
        <li><strong>Sauvegardes :</strong> Offline, immuables, testées régulièrement</li>
        <li>
          <strong>Patch management :</strong> Mise à jour rapide des vulnérabilités (VPN,
          hyperviseurs)
        </li>
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
