import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '@/components/aboutMe.vue';
import Education from '@/components/education.vue';
import Skill from '@/components/skill.vue';
import Project from '@/components/project.vue';
import Contact from '@/components/contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: "/about-me",
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '/education',
      name: 'Education',
      component: Education,
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill,
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }
  ]
});

export default router;
