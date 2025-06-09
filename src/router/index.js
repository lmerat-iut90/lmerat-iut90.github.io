import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';      // Exemple de vue
import Projects from './views/Projects.vue'; // Exemple
import Contact from './views/Contact.vue';   // Exemple

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash', // Important pour GitHub Pages !
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/contact', component: Contact },
    ]
});
