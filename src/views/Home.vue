<template>
    <div class="home-container">
        <h1>Leslie MERAT</h1>
        <h2>Étudiante en BUT informatique</h2>

        <div class="content-wrapper">
            <div class="image-wrapper">
                <router-link to="/about">
                    <img alt="Info" src="../assets/Photo.jpg" class="profile-image clickable-image" />
                    <div class="image-text">À propos de moi</div>
                </router-link>
            </div>

            <div class="image-wrapper">
                <router-link to="/work">
                    <img alt="Projets" src="../assets/code.jpeg" class="profile-image2 clickable-image" />
                    <div class="image-text">Portfolio</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.content-wrapper {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

.profile-image {
    display: block;
    width: 350px;
    height: auto;
}
.image-wrapper {
    position: relative;
    display: inline-block;
}

.profile-image2 {
    display: block;
    width: 750px;
    height: auto;
}

.image-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    pointer-events: none;  /* pour que le clic passe à travers le texte */
}



.clickable-image {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.clickable-image:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}


h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

h2 {
    font-size: 1.5rem;
    color: #1F618D;
    font-weight: normal;
}

</style>