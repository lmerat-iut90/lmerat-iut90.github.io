<template>
<div class="about">
    <h1>Présentation de l'entreprise</h1>
    <div class="title-logo">
        <h2>Zurflüh-Feller</h2>
        <div class="content-logo">
            <img src="@/assets/ZF-logo.png" alt="Logo ZF" class="img-logo" />
        </div>
    </div>

    <div>
        <h3>À propos</h3>
        <p>Zurflüh-Feller est une entreprise spécialisée dans la fabrication de composants pour volets roulants. Elle est implantée sur plusieurs sites, notamment à Autechaux-Roide et Noirefontaine dans le Doubs, ainsi qu’à Marseille avec sa filiale Profilmar, et en Allemagne avec Eckermann.

            L'entreprise évolue dans le secteur de la fermeture du bâtiment, en tant que leader européen des composants pour volets roulants. Elle conçoit, fabrique et commercialise une large gamme de produits destinés aux professionnels du neuf et de la rénovation.

            Zurflüh-Feller emploie environ 400 salariés et réalise un chiffre d’affaires annuel d’environ 65 millions d’euros, dont 20 % à l’export. Elle est reconnue pour son savoir-faire industriel, son innovation (avec plusieurs brevets déposés), et sa forte capacité de production.</p>
        <br>
        <h3>L'équipe</h3>
        <p>J'ai intégré l'équipe informatique de l'entreprise, composée de <b>Julien VAUX</b> (Chargé de développement SI et mon tuteur), <b>Christophe HERMOSILLA</b> (Responsable IT), ainsi que <b>Christian RUI</b> et <b>Axel TESSIER</b> (Techniciens informatiques). Sous la tutelle de Julien, j’ai pu développer mes compétences liées aux données de l’information. J’ai également eu l’opportunité de collaborer avec d’autres personnes en dehors de l’équipe informatique, comme <b>Tanguy LODS</b> (Contôleur de gestion) ou encore <b>Sylvain BORDES</b> (Directeur financier).</p>
        <br>
        <h3>L'organigramme</h3>
        <p>Voici l'organigramme général (figure 1), et ma place dans l'entreprise (figure 2).</p> <br>
        <div>
            <img src="@/assets/Orga.png" alt="Orga" class="img-orga">
            <p><em>Figure 1 : Organigramme général de Zurflüh-Feller</em></p>
        </div>
        <br>
        <div>
            <img src="@/assets/org-zoom.png" alt="Orga-zoom">
            <p><em>Figure 2 : Zoom sur l'organigramme</em></p>
        </div>

    </div>
</div>
</template>

<style scoped>
.about {
    padding: 100px 20px;
    background-color: #212F3D;
    text-align: center;
}
.about h1{
    font-size: 3em;
    color: #F4F6F7;
}
.about h2 {
    font-size: 2.5em;
    color: #F4F6F7;
}
.about p {
    font-size: 1.2em;
    max-width: 1000px;
    margin: auto;
    line-height: 1.6;
    color: #F4F6F7;
}
.about h3 {
    font-size: 2em;
    color: #F4F6F7;
}
.title-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* espace entre le texte et le logo */
    margin-bottom: 20px;
}

.content-logo {
    background-color: white;
    padding: 5px;
    border-radius: 8px;
}

.img-logo {
    width: 100px;
    height: auto;
}
.img-orga {
    width: 850px;
    height: auto;
}
</style>
<script setup>
</script>
