<template>
    <nav class="navbar">
        <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">Entreprise</a></li>
            <li><a href="#projects">Mission</a></li>
            <li><a href="#skills">Savoir-faire</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: #1F618D;
    padding: 15px 0;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
}
.navbar ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.navbar a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
}
.navbar a:hover {
    color: darkgray;
}
</style>
