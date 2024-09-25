import { createRouter, createWebHistory } from 'vue-router';
import AboutMe from '@/components/aboutMe.vue';
import Skill from '@/components/skill.vue';
import Project from '@/components/project.vue';
import Contact from '@/components/contact.vue';
import Intro from '@/components/Intro.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/intro', // '/' 경로를 '/intro'로 리다이렉트
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe,
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
