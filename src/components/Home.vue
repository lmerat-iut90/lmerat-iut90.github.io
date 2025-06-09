<!-- components/Home.vue -->
<template>
    <div class="home">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Bonjour ! Je m'appelle Leslie MERAT, je suis actuellement en deuxième année de BUT informatique à l'IUT Nord Franche-Comté. Passionnée par le développement logiciel et des technologies web, je me spécialise dans la conception d’applications robustes, performantes et adaptées aux besoins des utilisateurs.</p>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 60px;
    background: linear-gradient(to bottom right, #00bcd4, #0097a7);
    color: white;
    text-align: center;
}
.home h1 {
    font-size: 3em;
    margin-bottom: 20px;
}
.home p {
    font-size: 1.2em;
    max-width: 600px;
}
</style>