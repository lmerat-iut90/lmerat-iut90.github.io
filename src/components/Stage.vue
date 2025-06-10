<template>
  <div class="skills">
      <h1>Savoir et savoir-faire</h1>
      <h2>Compétence 4 : Gérer des données de l'information</h2>
      <h3>AC 1 : Optimiser les modèles de données de l'entreprise</h3>
      <p>Tu peux parler ici des actions que tu as menées pour améliorer ou adapter les modèles de données utilisés dans les flux Talend. Par exemple :
          Lors de mon stage, j'ai participé à la fiabilisation de plusieurs flux Talend en analysant les structures de données manipulées. J'ai proposé des améliorations sur les schémas d'entrée/sortie pour réduire la redondance et optimiser les performances des traitements, notamment en rationalisant certains types de données et en nettoyant les structures inutilisées. (connexions en trop enlevé)</p>
      <div>
        <img src="@/assets/fail-sage.png" alt="Job fail sage">
        <p><em>Figure 4 : Job qui echoue systématiquement</em></p>
      </div>
      <div>
        <img src="@/assets/fail-apiras.png" alt="Job fail apiras">
        <p><em>Figure 5 : Connexion avec Apiras qui échoue</em></p>
      </div>
      <h3>AC 2 : Assurer la confidentialité des données (intégrité et sécurité)</h3>
      <p>Même si tu ne traitais peut-être pas directement de chiffrement ou d’anonymisation, tu peux mentionner les pratiques mises en place pour garantir que les données restent cohérentes, non corrompues, et bien gérées :

          Dans le cadre de la fiabilisation des flux, j'ai veillé à l'intégrité des données en mettant en place des contrôles de cohérence et de qualité (ex : vérification des valeurs nulles, gestion des doublons). J'ai aussi contribué à la gestion sécurisée des accès aux bases de données utilisées par les jobs Talend, en respectant les bonnes pratiques internes de sécurité.

      </p>
      <div>
        <img src="@/assets/Isnull.png" alt="Gestion des valeurs nulles">
        <p><em>Figure 6 : Gestion des valeurs nulles</em></p>
      </div>
      <div>
        <img src="@/assets/Substring.png" alt="Gestion de taille de chaîne">
        <p><em>Figure 7 : Gestion de taille de chaînes de caractères</em></p>
      </div>
    
      <h3>AC 3 : Organiser la restitution de données à travers la programmation et la visualisation</h3>
      <p>Tu peux parler de la manière dont les résultats des traitements sont exploités ou mis à disposition, même si ce n'est pas sous forme de graphiques.

          J'ai organisé la restitution des données traitées via la création de flux de sortie cohérents et réutilisables dans Talend. J'ai utilisé les composants de transformation et de formatage pour structurer les résultats de façon exploitable, facilitant leur intégration dans d'autres systèmes métiers ou outils de reporting internes. (avant/après tableau pour ratio, email avec et sans excel, cartographie)</p>
      
    <h3>AC 4 : Manipuler des données hétérogènes</h3>
      <p>Ici, tu peux mettre en valeur le fait que Talend manipule des données provenant de sources variées (fichiers plats, bases de données, API, etc.).
          J'ai travaillé sur des flux manipulant des données issues de sources hétérogènes telles que des bases de données relationnelles (PostgreSQL, Oracle), des fichiers CSV, et des exports Excel. J'ai utilisé Talend pour standardiser, filtrer et transformer ces données, en assurant leur compatibilité avec les systèmes cibles. (csv + bases de données sql server + DBeaver)</p>
    <div>
      <img src="@/assets/organisation-flux.png" alt="Flux">
      <p><em>Figure : Organisation des flux de données</em></p>
    </div>
    <div>
      <img src="@/assets/DBeaver.png" alt="DBeaver">
      <p><em>Figure : Interface du logiciel DBeaver</em></p>
    </div>
  </div>
</template>

<style scoped>
.skills {
    padding: 100px 20px;
    background-color: #212F3D;
    text-align: center;
}
.skills p {
    font-size: 1.2em;
    color: #F4F6F7;
    max-width: 1000px;
    margin: auto;
    line-height: 1.6;
}
.skills h1{
    font-size: 3em;
    color: #F4F6F7;
}
.skills h2 {
    font-size: 2.5em;
    color: #F4F6F7;
}
.skills h3 {
    font-size: 2em;
    color: #F4F6F7;
}

</style>
