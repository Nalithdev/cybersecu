<template>
  <section class="attackdoc">
    <h1>Groupe Lapsus$ – Présentation détaillée</h1>
    <div class="card-parent">
      <div class="back-link">
        <router-link v-if="homeLink" :to="homeLink.path">
          {{ homeLink.name }}
        </router-link>
      </div>
    </div>
    <section>
      <h2>Nom d’origine, affiliation, motivations</h2>
      <ul>
        <li><strong>Nom d’origine :</strong> Lapsus$</li>
        <li><strong>Alias :</strong> Lapsus Dollar</li>
        <li>
          <strong>Affiliations :</strong> Groupe indépendant, connu pour ses opérations audacieuses
          et son mode opératoire atypique.
        </li>
        <li><strong>Motivations :</strong> Financières et de notoriété publique.</li>
      </ul>
    </section>

    <section>
      <h2>Timeline des attaques majeures & évolution du groupe</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Événement clé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Décembre 2021</td>
            <td>Première attaque médiatisée contre le Ministère de la Santé du Brésil.</td>
          </tr>
          <tr>
            <td>Janvier 2022</td>
            <td>Compromission d’Okta via un ingénieur de support tiers.</td>
          </tr>
          <tr>
            <td>Février 2022</td>
            <td>Exfiltration massive chez Nvidia avec menaces liées aux GPU Lite Hash Rate.</td>
          </tr>
          <tr>
            <td>Mars 2022</td>
            <td>Attaques sur Samsung, Mercado Libre, Ubisoft, T-Mobile, Microsoft, Globant.</td>
          </tr>
          <tr>
            <td>Septembre 2022</td>
            <td>Intrusions chez Uber et Rockstar Games avec divulgation de codes sources.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Malwares utilisés, méthode d’intrusion, infrastructure</h2>
      <ul>
        <li>
          Prédominance d’attaques par accès initial via phishing et compromission d’identifiants.
        </li>
        <li>Usage de scripts personnalisés, accès RDP compromis, parfois ransomwares associés.</li>
        <li>Ingénierie sociale et exploitation d’accès tiers.</li>
        <li>Infrastructure basée sur serveurs anonymisés et messageries cryptées.</li>
      </ul>
    </section>

    <section>
      <h2>Secteurs ciblés, géographie, sélection des cibles</h2>
      <ul>
        <li>Secteurs : Technologie, jeux vidéo, télécom, gouvernement, e-commerce.</li>
        <li>Zones : États-Unis, Brésil, Europe, Amérique Latine, Corée du Sud.</li>
        <li>Cibles : Grandes organisations avec données sensibles et codes propriétaires.</li>
      </ul>
    </section>

    <section>
      <h2>Signatures techniques et comportements distinctifs</h2>
      <ul>
        <li>Publication rapide des données exfiltrées pour pression.</li>
        <li>Prise de contrôle via accès à comptes internes, peu de ransomware déployé.</li>
        <li>Usage de réseaux sociaux et forums publics pour diffuser les preuves.</li>
        <li>Extorsion par menace de fuite plus que chiffrement systématique.</li>
      </ul>
    </section>

    <section>
      <h2>IOCs connus (indicateurs de compromission)</h2>
      <ul>
        <li>Archives de codes sources, captures d’écran consoles admin.</li>
        <li>Domaines liés aux plateformes de fuite du dark web.</li>
        <li>IPs et comptes liés aux services cloud (Azure DevOps, Slack, etc.).</li>
      </ul>
      <p>Pour une liste actualisée, consulter CERT-FR, CISA, et bases d’IOC publiques.</p>
    </section>

    <section>
      <h2>Comment se protéger de Lapsus$ ?</h2>
      <ul>
        <li>Implémenter MFA partout, y compris pour fournisseurs et tiers.</li>
        <li>Surveillance via SIEM et EDR pour accès inhabituels.</li>
        <li>Formation anti-phishing régulière des employés.</li>
        <li>Audit et restriction des accès tiers.</li>
        <li>Procédures de réaction rapide en cas d’intrusion.</li>
        <li>Sauvegardes régulières, hors ligne et testées.</li>
      </ul>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

const homeLink = computed(() => routes.find((route) => route.name === 'home'))
</script>

<style scoped>
.attackdoc {
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.attackdoc h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.attackdoc section {
  margin-bottom: 1.5rem;
}

.attackdoc h2 {
  border-bottom: 2px solid #444;
  padding-bottom: 4px;
  margin-bottom: 0.75rem;
}

.attackdoc ul {
  list-style-type: disc;
  padding-left: 20px;
  line-height: 1.5;
}

.attackdoc table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.attackdoc th,
.attackdoc td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  vertical-align: top;
}

.attackdoc th {
  font-weight: bold;
}

.attackdoc p {
  margin-top: 0;
}
</style>
