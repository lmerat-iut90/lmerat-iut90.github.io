<template>
  <div class="skills">
      <h1>Savoir et savoir-faire</h1>
      <h2>1. Gérer des données de l'information</h2>
      <h3>1.1. Optimiser les modèles de données de l'entreprise</h3>
      <p>Lors de mon stage, j'ai été amené à intervenir sur plusieurs flux Talend afin d'améliorer leur fiabilité et optimiser les traitements. Cela a impliqué une analyse approfondie des modèles de données manipulés par les jobs, dans le but de rationaliser les schémas d'entrée et de sortie.
          J’ai notamment identifié des redondances dans les structures, supprimé des connexions inutilisées, et ajusté certains types de données pour améliorer les performances.</p>
      <div class="img"><br>
        <img src="@/assets/fail-sage.png" alt="Job fail sage">
        <p><em>Figure 3 : Job qui échoue systématiquement</em></p>
      </div> <br>
      <p>Comme illustré en figure 3, j’ai remarqué qu’un job échouait systématiquement lors de son exécution. Après analyse, j’ai identifié que l’échec provenait d’une requête SQL incomplète utilisée dans le traitement.
          J’ai donc retravaillé cette requête pour qu’elle couvre correctement tous les cas nécessaires.</p>
      <br><br>
      <div class="img">
        <img src="@/assets/fail-apiras.png" alt="Job fail apiras">
        <p><em>Figure 4 : Connexion avec Apiras qui échoue</em></p>
      </div><br>
      <p>En ce qui concerne la figure 4, j’ai observé que les connexions destinées à récupérer des données depuis la source Apiras échouaient de manière aléatoire. Ces interruptions sont dues à la localisation distante du service Apiras, basé à Eckermann en Allemagne. Pour fiabiliser les flux, j’ai donc examiné l’utilité de chaque connexion à Apiras.
          Lorsque certaines connexions n’étaient pas essentielles au traitement, je les ai supprimées afin de réduire les risques d’échec et d’améliorer la stabilité globale des jobs.</p>
      <br>

      <h3>1.2. Assurer la confidentialité des données (intégrité et sécurité)</h3>
      <p>Même si je n’ai pas directement travaillé sur des mécanismes de chiffrement ou d’anonymisation, j’ai contribué à garantir l’intégrité et la cohérence des données tout au long des traitements Talend. Dans le cadre de la fiabilisation des flux, j’ai mis en place plusieurs contrôles de qualité visant à éviter les erreurs d’insertion ou de traitement.</p>
      <br>
      <div class="img">
        <img src="@/assets/Isnull.png" alt="Gestion des valeurs nulles">
        <p><em>Figure 5 : Gestion des valeurs nulles</em></p>
      </div><br>
      <p>Parmi ces actions, j’ai intégré des vérifications spécifiques pour détecter et traiter les valeurs nulles, comme le montre la figure 5 ci-dessus. Grâce à l’utilisation de la fonction "ISNULL" dans SQL Server, j’ai pu m’assurer que les colonnes critiques ne contenaient pas de données manquantes pouvant provoquer des erreurs lors de leur traitement ou altérer la qualité des analyses.</p>
      <br><br>
      <div class="img">
        <img src="@/assets/Substring.png" alt="Gestion de taille de chaîne">
        <p><em>Figure 6 : Gestion de taille de chaînes de caractères</em></p>
      </div><br>
      <p>J’ai également dû faire face à un autre type de problème lié à la taille excessive de certaines chaînes de caractères. Ces chaînes dépassaient la taille maximale définie dans certaines colonnes des tables cibles, ce qui empêchait leur insertion. Pour y remédier, et avec l’accord de mon tuteur de stage, j’ai utilisé la fonction SUBSTRING de SQL Server afin de tronquer les données à une taille compatible, comme illustré en figure 6.
          Cette solution a permis de préserver les traitements sans compromettre la structure des données.</p>
      <br>
      <p>Par ailleurs, j’ai veillé à respecter les bonnes pratiques de sécurité imposées en interne, notamment en ce qui concerne la gestion des accès aux bases de données utilisées par les jobs Talend. Cela inclut l’utilisation d’identifiants sécurisés, la limitation des droits d’accès selon les besoins des traitements, et la vérification régulière des connexions utilisées.</p>
      <br>

      <h3>1.3. Organiser la restitution de données à travers la programmation et la visualisation</h3>
      <p>Dans le cadre de mes missions, j’ai également travaillé sur la restitution des données issues des traitements Talend. L’objectif était de produire des sorties claires, exploitables et réutilisables, afin de faciliter leur intégration dans d'autres systèmes métiers ou outils de reporting internes.

         <br> Pour cela, j’ai structuré les flux de sortie en utilisant des composants de transformation et de formatage adaptés. Cela m’a permis d’organiser les résultats de manière cohérente, tout en répondant aux besoins spécifiques des utilisateurs.</p>
      <br>
      <div class="img">
        <img src="@/assets/av.png" alt="Avant">
        <p><em>Figure 7 : Heures badgées et heures gammes</em></p>
      </div><br>
    <div class="img">
      <img src="@/assets/ap.png" alt="Attendu" class="img-ratio">
      <p><em>Figure 8 : Attendu de rendu avec ratio des heures de production</em></p>
    </div><br>
      <p>La figure 7 illustre l’état initial des résultats : les heures badgées et les heures gammes par atelier étaient affichées séparément, sans possibilité d’en déduire rapidement un indicateur de performance. Les attentes, comme montré en figure 8, portaient sur un affichage consolidé, avec calcul du ratio de productivité (heures badgées / heures gammes).
          Par la suite, j’ai modifié la requête SQL utilisée afin d’obtenir un rendu structuré par jour avec les totaux par jour et les ratios associés, facilitant ainsi l’analyse dans l’outil Tableau.</p>
    <br><br>
      <div class="img">
      <img src="@/assets/email-stock.png" alt="Stock produit chimique">
      <p><em>Figure 9 : Email du stock des produits chimique avec Excel</em></p>
    </div><br>
      <p>Comme le montre la figure 9, un email est envoyé automatiquement chaque mardi, contenant les données de stock sous forme de fichier Excel en pièce jointe. Pour cela, j’ai utilisé une requête SQL ciblant les produits concernés, puis Talend se chargeait de générer le fichier Excel et de l’envoyer par email aux destinataires concernés.
          Ce processus a permis de fiabiliser et d’automatiser la diffusion d’informations tout en respectant les formats attendus.</p><br>*

    <h3>1.4. Manipuler des données hétérogènes</h3>
      <p>Au cours de mon stage, j’ai travaillé sur des flux Talend traitant des données issues de sources très variées. Ces données provenaient notamment de bases de données relationnelles (SQL Server), d’exports Excel, ainsi que de systèmes externes comme des ERP ou des dispositifs de badgeuse.<br>
          Talend a permis d’unifier ces différentes sources de données à travers des processus de standardisation, de filtrage et de transformation. Ces étapes étaient essentielles pour assurer la compatibilité des données avec les systèmes cibles et pour garantir leur qualité.</p>
    <br>
      <div class="img">
      <img src="@/assets/organisation-flux.png" alt="Flux" class="img-flux">
      <p><em>Figure 10 : Organisation des flux de données</em></p>
    </div>
      <br>
    <p>La figure 10 illustre l’organisation générale des flux de données. On y voit que les sources — telles que les ERP ou les badgeuses — alimentent l’environnement Talend, qui se charge d’extraire, transformer et charger les données dans la base centrale de l’entreprise, appelée DatawareHouse. Ce DatawareHouse constitue le référentiel principal à partir duquel l’outil de visualisation Tableau vient interroger les données pour générer les tableaux de bord utilisés par les différents services.

        <br>Cette architecture m’a permis de mieux comprendre la chaîne complète de valorisation des données, depuis leur collecte brute jusqu’à leur restitution sous forme de rapports exploitables.

    </p>
    <br>

    <h2>2. Conduire un projet</h2>
    
    <h3>2.1. Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information</h3>
    <p>L’objectif principal de mon stage a été de fiabiliser les flux de données existants dans l’entreprise. Pour cela, il était essentiel d’identifier les processus critiques, de comprendre leur fonctionnement, d’analyser leurs points faibles, puis de proposer des pistes d’amélioration.<br>
        J’ai commencé par recenser et analyser les principaux jobs Talend utilisés en production. Cette analyse m’a permis de repérer ceux qui posaient le plus de problèmes, soit en raison de leur durée excessive, soit à cause d’erreurs systématiques. J’ai également étudié les dépendances entre les jobs, les bases de données et les systèmes métiers qu’ils alimentent.<br>
        Afin d’automatiser cette analyse, j’ai développé un script Python qui interroge une base de données de suivi d’exécution, puis exporte les résultats en CSV.</p>
    <br><div class="img">
        <img src="@/assets/F01_800.png" alt="Job d'une heure">
        <p><em>Figure 11 : Résultat du script Python pour tous les temps du job le plus long</em></p>
    </div>
      <br>
      <p>La figure 11 montre un exemple de sortie de ce script : ici, le job identifié est celui ayant la plus longue durée d’exécution (environ 1 heure). Ce type d'information m’a permis de cibler les flux à optimiser en priorité.</p>
      <br><br>
    <div class="img">
        <img src="@/assets/F02_900.png" alt="Job erreur">
        <p><em>Figure 12 : Résultat du script Python pour le job qui échoue systématiquement</em></p>
    </div>
      <br>
      <p>La figure 12 illustre un autre cas détecté : un job échouant systématiquement, déjà identifié précédemment en figure 3. C’est grâce au script Python, et avec l’aide de Tanguy, que nous avons constaté que les données liées à ce job ne s’affichaient plus depuis le mois de février.</p>
    <br><br>
      <div class="img">
        <img src="@/assets/Arbo_job.png" alt="Arborescence" class="img-arb">
        <p><em>Figure 13 : Arborescence des Jobs</em></p>
    </div><br>
      <p>Pour mieux comprendre les dépendances entre les traitements, j’ai aussi réalisé une arborescence des jobs (figure 13), sous forme d’un fichier Excel. Ce document recense quels jobs en appellent d’autres, ce qui est très utile pour identifier rapidement dans quel job maître se trouve un sous-job donné.
          Cela facilite le diagnostic des erreurs et la maintenance par les autres membres de l’équipe. Ici la figure 13 ne représente pas toute l'arborescence, pour permettre plus de lisibilité</p>
      <br><br>
    <div class="img">
        <img src="@/assets/Cartographie_table.png" alt="Cartographie" class="img_fail">
        <p><em>Figure 14 : Cartographie des relations des tables</em></p>
    </div><br>
      <p>Enfin, pour compléter cette analyse des processus, j’ai également réalisé une cartographie des tables utilisées (figure 14) dans un fichier Excel. Ce schéma met en évidence les relations entre les différentes tables, en indiquant clairement quelles tables sont alimentées par quels traitements.
          Cela m’a permis de mieux comprendre l’impact de chaque flux sur le système d’information global.</p>
      <br>

    <h3>2.2. Formaliser les besoins du client et de l'utilisateur</h3>
    <p>Un aspect important de mon stage a été la prise en compte des attentes des utilisateurs finaux, notamment les équipes métier, afin d'améliorer la fiabilité et la lisibilité des flux Talend. Pour cela, j’ai échangé régulièrement avec mon tuteur et les utilisateurs concernés afin de comprendre leurs besoins concrets, qu’il s’agisse de visibilité sur les traitements, de réactivité en cas d’erreur ou encore de simplification des vérifications manuelles.<br>
        L’un des cas les plus significatifs concerne le suivi quotidien du chargement des données dans le DataWarehouse. Jusqu’alors, cette vérification était effectuée manuellement chaque matin par mon tuteur, ce qui était à la fois chronophage et source potentielle d’erreurs d’inattention.</p>
    <br>
      <div class="img">
      <img src="@/assets/email-dwh.png" alt="DWH">
      <p><em>Figure  15 : Email du chargement des données journalier</em></p>
    </div> <br>
      <p>Pour répondre à ce besoin, j’ai conçu un job Talend capable d’exécuter automatiquement une requête SQL Server pour vérifier si les jobs maîtres se sont bien exécutés, et s’il y a eu des erreurs dans l’un des traitements. Les résultats de cette vérification sont ensuite formatés dans un email envoyé automatiquement chaque matin aux personnes concernées (Julien et moi).<br>
          La figure 15 présente un exemple de cet email automatique. Ce flux a été le plus complexe que j’ai eu à développer durant mon stage, mais également le plus formateur. Il m’a permis de me familiariser en profondeur avec Talend (gestion de flux conditionnels, composants de traitement, envoi d’emails, etc.) tout en apportant une réelle valeur ajoutée à l’équipe : le processus est désormais automatisé, plus fiable, et plus rapide.</p>
      <br>

    <h3>2.3. Définir et mettre en œuvre une démarche de suivi de projet</h3>
    <p>Des comptes rendus réguliers étaient partagés avec mon tuteur et l’équipe, notamment via des récapitulatifs hebdomadaires ou des réunions ponctuelles en cas de problème bloquant.
      <br>
        L’un de ces problèmes est illustré dans la figure ci-dessous :</p><br>
    <div class="img">
        <img src="@/assets/F01_105.png" alt="Job millieu">
        <p><em>Figure 16 : Visualisation du chevauchement des jobs</em></p>
    </div><br>
      <p>La figure 16 met en évidence un phénomène de chevauchement des traitements, à l’origine de ralentissements importants. Le job F01_800_Ventilation, l’un des plus longs à s’exécuter (environ 1h), est appelé par le job maître F01_105_Import_Ventilation. Le problème identifié est que, durant son exécution, un autre job démarre en parallèle alors que Talend ne peut gérer qu’un seul traitement par instance à la fois. Cela provoque un allongement du temps de traitement de ce second job, jusqu’à une heure de plus que la normale.
          <br>
          Pour résoudre ce problème, Julien et moi avons pris rendez-vous avec Tanguy afin de lui présenter la situation. Ensemble, nous avons décidé de réorganiser l’ordre d’exécution des jobs : le job concerné sera désormais déplacé en fin de traitement, après l’exécution des jobs prioritaires, afin de garantir une meilleure fluidité globale du flux Talend.
          <br>
          Cette démarche de suivi m’a permis de mieux comprendre la gestion des ressources dans un ETL en production, ainsi que l’importance de la coordination entre les traitements dans un environnement contraint.</p>

    
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
    text-align: justify;
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
.img-flux {
    width: 650px;
    height: auto;
}

.img_fail{
    width: 1250px;
    height: auto;
}
.img-arb {
    width: 1000px;
    height: auto;
}
.img-ratio {
    width: 500px;
    height: auto;
}
.img p {
    text-align: center;
}
</style>
<script setup>
</script>