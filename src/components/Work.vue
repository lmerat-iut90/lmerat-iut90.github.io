<template>
  <div class="projects">
      <h1>Présentation de ma mission</h1>
      <h2>Fiabilisation des flux Talend</h2>
      <p>Talend est un logiciel de gestion de données qui repose sur un processus ETL (Extract, Transform, Load). Ce processus permet de transformer des données brutes en informations exploitables pour la Business Intelligence.

À mon arrivée dans l'entreprise, le traitement complet des données durait environ 2h30. Une fois ce traitement terminé, les données transformées étaient récupérées par le logiciel Tableau, qui les utilisait pour produire des visualisations : graphiques, tableaux, et autres représentations visuelles.

Un des problèmes majeurs identifiés concernait l’irrégularité des temps d’exécution : certains processus, normalement exécutés en 5 minutes, pouvaient exceptionnellement prendre jusqu’à 1 heure, sans raison apparente.

Cette instabilité avait un impact direct sur la qualité des restitutions dans Tableau : lorsque les flux prenaient trop de temps, le logiciel risquait de ne pas récupérer l’ensemble des données nécessaires à la génération des tableaux de bord, compromettant ainsi la fiabilité des analyses produites.

Mon objectif principal était donc de fiabiliser et optimiser les flux Talend afin de réduire ces irrégularités, limiter les erreurs d’exécution, et améliorer globalement les performances, notamment en raccourcissant les durées de traitement.</p><br><br>
      <div class="liens-info">
        <a href=" https://fr.wikipedia.org/wiki/Extract-transform-load" target="_blank" rel="noopener noreferrer">
            Définition d'un ETL (Extract-Transform-Load)
        </a><br>
        <a href="https://axysweb.com/le-lexique-pour-comprendre-et-utiliser-le-studio-talend/#:~:text=Un%20job%20Talend%20est%20la,processus%20de%20flux%20de%20donn%C3%A9es." target="_blank" rel="noopener noreferrer">
            Définition d'un Job Talend
        </a>
      </div>




  </div>
</template>

<style scoped>
.projects {
    padding: 100px 20px;
    background-color: #F4F6F7;
    text-align: center;
}
h1,h2,p {
    color: #1F618D;
}
.projects h1{
    font-size: 3em;
}
.projects h2 {
    font-size: 2.5em;
}
.projects p {
    font-size: 1.2em;
    max-width: 1000px;
    margin: auto;
    line-height: 1.6;
    text-align: justify;
}

.liens-info a {
    display: inline-block;
    margin: 10px 0;
    color: #1abc9c;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.liens-info a:hover {
    text-decoration: underline;
    color: #E87722;
}
</style>
<script setup>
</script>