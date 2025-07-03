<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CyberAttackPage',
  setup() {
    const router = useRouter()
    const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

    const homeLink = computed(() => routes.find((route) => route.name === 'home'))

    return {
      homeLink,
    }
  },
})
</script>

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

    <section class="attack-info">
      <div style="display: flex; justify-content: space-between">
        <h2>Cyberattaque de Malakoff Humanis</h2>
        <img src="../assets/Malakoffpng.png" alt="Malakoff" class="logo" />
      </div>
      <table class="info-table">
        <tr>
          <th>Cible</th>
          <td>Viamedis, filiale du groupe Malakoff Humanis</td>
        </tr>
        <tr>
          <th>Date de l'attaque</th>
          <td>05/12/2024</td>
        </tr>
        <tr>
          <th>Type d'attaque</th>
          <td>Phishing</td>
        </tr>
        <tr>
          <th>Impact</th>
          <td>
            Vol de données personnelles de
            <span class="important_data"> 20 millions d'assurés</span>
          </td>
        </tr>
      </table>

      <section class="summary">
        <h3>Synthèse</h3>
        <p>
          Début 2024, une cyberattaque a visé Viamedis, un prestataire de tiers payant utilisé par
          Malakoff Humanis et 83 autres mutuelles. L’attaque, menée par phishing, a permis l’accès à
          des données personnelles (nom, prénom, date de naissance, numéro de sécurité sociale,
          informations de contrat) de millions d’assurés. Aucune donnée bancaire, médicale,
          d’adresse, de téléphone ou d’email n’a été compromise. Jusqu’à 20 millions de personnes
          pourraient être concernées, en incluant une attaque similaire chez Almerys. Viamedis a
          déconnecté ses systèmes et alerté la CNIL et l’ANSSI. L'incident augmente les risques de
          phishing ou d’usurpation d’identité. Les assurés doivent rester vigilants.
        </p>
      </section>

      <h2></h2>
    </section>
  </section>
</template>

<style scoped></style>
