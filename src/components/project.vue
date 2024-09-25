<template>
  <section class="projects-section">
    <h1>Projects</h1>
    <div class="projects-container">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" alt="project image" />
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.techStack" :key="tech">{{ tech }}</span>
          </div>
          <div class="links">
            <a :href="project.websiteUrl" target="_blank" class="link-button">사이트</a>
            <a :href="project.githubUrl" target="_blank" class="link-button">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import proj1Image from '@/asset/image/proj1.png';
import proj2Image from '@/asset/image/proj2.png';

const projects = [
  {
    id: 1,
    title: 'Leafresh',
    description: 'Leafresh 프로젝트는 식물 애호가들을 위한 플랫폼으로, 식물을 키우는 사람들 간의 지식 공유와 자신이 키운 식물을 판매할 수 있는 기능을 제공합니다. 사용자들은 자신이 키운 식물의 상태나 경험을 공유하고, 다른 사용자들의 조언을 받을 수 있으며, 키운 식물을 판매하거나 구매할 수 있는 온라인 마켓플레이스도 제공합니다.',
    image: proj2Image,
    techStack: ['Vue.js', 'JavaScript', 'TemurinJDK-17','CSS','flutter','SpringBoot','MySql','Docker','jenkins','Vercel'],
    websiteUrl: 'https://leafresh-frontend-nine.vercel.app',
    githubUrl: 'https://github.com/Leafresh-2024',
  },
  {
    id: 2,
    title: 'Flux',
    description: '최신 웹 기술을 활용하여 온라인 경매 웹 애플리케이션을 개발하는 것을 목표로 합니다. 사용자가 직접 만든 상품을 직관적이고 원활하게 경매로 판매하고 참여할 수 있는 웹 애플리케이션을 제공하는 것입니다.',
    image: proj1Image,
    techStack: ['Vue.js', 'JavaScript', 'TemurinJDK-17','CSS','SpringBoot','MySql','Docker','jenkins','Vercel'],
    websiteUrl: 'https://flux-front-server.vercel.app',
    githubUrl: 'https://github.com/Flux2024',
  },
];
</script>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 85vh;
  background-color: #333333;
  text-align: center;
  padding-top: 50px;
}

h1 {
  padding-bottom: 50px;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 900;
  color: #9c6bd4;
  letter-spacing: 2px; /* 타이틀을 더 넓게 보이도록 */
  text-transform: uppercase; /* 타이틀을 대문자로 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* 타이틀에 그림자 효과 추가 */
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
}

.project-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 400px;
  height: 550px; /* 카드 크기 확대 */
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.project-details {
  padding: 20px;
  text-align: left; /* 설명글을 왼쪽 정렬 */
}

h3 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
  letter-spacing: 1px;
}

p {
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  
  /* 설명글 길이 제한을 위한 속성들 */
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 최대 4줄로 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 넘어가면 ... 표시 */
}

.tech-stack {
  display: flex;
  flex-wrap: wrap; /* 줄바꿈을 위해 wrap 추가 */
  gap: 10px;
}

.tech-stack span {
  background-color: #218838;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}


.links {
  margin-top: 15px;
  display: flex;
}

.link-button {
  background-color: #6c63ff;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.link-button:hover {
  background-color: #5555ff;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-card {
    width: 90%;
    height: auto;
  }

  .project-card img {
    height: 200px;
  }

  h1 {
    font-size: 28px;
    color: rgb(156, 107, 212);
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  .tech-stack span {
    font-size: 12px;
    padding: 4px 8px;
  }
}

@media (max-width: 500px) {
  .project-card {
    width: 100%;
  }

  .project-card img {
    height: 180px;
  }
}
</style>
