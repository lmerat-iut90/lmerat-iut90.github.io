<!-- App.vue -->
<template>
    <div id="app">
        <Navbar />
        <main>
            <section id="home"><Home /></section>
            <section id="about"><Entreprise /></section>
            <section id="projects"><Work /></section>
            <section id="skills"><Stage /></section>
        </main>
    </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Entreprise from './components/About.vue'
import Work from './components/Work.vue'
import Stage from './components/Stage.vue'

export default {
    components: { Navbar, Home, Entreprise, Work, Stage }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
}
section {
    scroll-margin-top: 80px;
}
</style>
