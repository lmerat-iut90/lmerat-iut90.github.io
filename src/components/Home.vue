
<template>
    <div class="home">
        <img src="@/assets/Photo.jpg" alt="Photo de Leslie MERAT" class="profile-img" />
        <h1>Bienvenue sur mon portfolio !</h1>
        <h2>Leslie MERAT</h2>
        <p>Bonjour ! Je m'appelle Leslie MERAT et je suis actuellement en deuxième année de BUT Informatique à l'IUT Nord Franche-Comté. À travers ce portfolio, je souhaite vous partager mon expérience en entreprise, acquise lors de mon stage de BUT2.</p>
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
    background: #F4F6F7;
    color: white;
    text-align: center;
}
.home h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: #1F618D;
}
.home h2 {
    font-size: 2.5em;
    color: #1F618D;
}
.home p {
    font-size: 1.2em;
    max-width: 600px;
    color: #1F618D;
}

.profile-img {
    position: absolute;
    top: 100px;
    left: 20px;
    width: 250px;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
}

</style>
