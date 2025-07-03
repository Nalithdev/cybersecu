<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'MindMapView',
  setup() {
    const router = useRouter()
    const routes = router.getRoutes().filter((route) => route.name && route.name !== 'NotFound')

    const homeLink = computed(() => routes.find((route) => route.name === 'home'))

    return { homeLink }
  }
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
  </section>
  <section class="explanation">
    <h1>Analyse structurée des enjeux de cybersécurité dans le secteur industriel</h1>
    <p>
      La carte mentale représente une hiérarchisation des
      <strong>enjeux de cybersécurité</strong> affectant le secteur industriel. Elle repose sur un
      tronc commun (<em>Secteur de l’industrie</em>) divisé en trois axes d’analyse :
      <strong>économique</strong>, <strong>stratégique</strong> et <strong>humain</strong>.
    </p>
  </section>
  <br />
  <div class="tree">
    <iframe
      width="768"
      height="432"
      src="https://miro.com/app/live-embed/uXjVIjc2YJE=/?embedMode=view_only_without_ui&moveToViewport=-228,470,2043,1005&embedId=773898517515"
      frameborder="0"
      scrolling="no"
      allow="fullscreen; clipboard-read; clipboard-write"
      allowfullscreen
    ></iframe>
  </div>

  <section class="explanation">
    <h2>1. Secteur de l’industrie</h2>
    <p>
      Dans un contexte de transformation numérique (IoT, automatisation, cloud), le secteur
      industriel est exposé à des menaces croissantes. La cybersécurité devient alors un pilier de
      sa compétitivité, de sa résilience et de sa souveraineté.
    </p>

    <h2>2. Enjeux économiques</h2>
    <ul>
      <li>
        <strong>Protection des actifs et des données</strong> : garantir l’intégrité des
        informations critiques et des processus de production.
      </li>
      <li>
        <strong>Souveraineté numérique et géopolitique</strong> : assurer l’autonomie technologique
        face à des pressions internationales.
      </li>
      <li>
        <strong>Investissements en R&D et innovation</strong> : sécuriser les avancées scientifiques
        et technologiques pour éviter le pillage économique.
      </li>
    </ul>

    <h2>3. Enjeux stratégiques</h2>
    <ul>
      <li>
        <strong>Souveraineté numérique</strong> : maîtrise des technologies clés et indépendance
        stratégique.
      </li>
      <li>
        <strong>Cyberguerre et espionnage</strong> : anticipation des menaces issues d’acteurs
        étatiques ou cybercriminels.
      </li>
      <li>
        <strong>Protection des infrastructures critiques</strong> : sécurisation des systèmes
        essentiels à la stabilité nationale.
      </li>
    </ul>

    <h2>4. Enjeux humains</h2>
    <ul>
      <li>
        <strong>Formation et sensibilisation</strong> : montée en compétences des ressources
        humaines.
      </li>
      <li>
        <strong>Erreurs humaines</strong> : réduction des incidents dus à des comportements à
        risque.
      </li>
      <li>
        <strong>Confiance numérique</strong> : favoriser l’adhésion aux technologies par une
        perception positive de la sécurité.
      </li>
    </ul>

    <h2>Conclusion</h2>
    <p>
      La cybersécurité industrielle doit être abordée de manière globale, intégrant les aspects
      techniques, humains, économiques et stratégiques. Cette arborescence permet de visualiser les
      interdépendances entre ces enjeux et d’en faire une base pour l’action ou la réflexion.
    </p>
  </section>
</template>

<style scoped>
.tree ul {
  padding-top: 20px;
  position: relative;
}

.tree {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}

.explanation {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  line-height: 1.6;
  color: #ffffff;
}

.explanation h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.explanation h2 {
  font-size: 1.3rem;
  margin-top: 1.5rem;
}

.explanation ul {
  margin-left: 1rem;
  list-style-type: disc;
}
</style>
