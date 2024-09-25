<template>
  <section id="Stacks" class="Stacks_container" style="background-color: #333333; width: 100%;">
    <h1>TECH STACK</h1>
    <h2>아이콘에 마우스를 올리면 오른쪽에 설명이 나타납니다</h2>

    <div v-for="category in categories" :key="category.name" class="stacks_wrap">
      <div class="subTitle">
        <span>{{ category.name }}</span>
      </div>
      <div class="stack_container">
        <ul>
          <li v-for="stack in category.stacks" :key="stack.name">
            <img :src="stack.icon" :alt="stack.name" />
            <div class="text-container">
              <p class="stack-name">{{ stack.name }}</p>
              <p class="stack-description">{{ stack.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import JPA from '@/asset/icon/jpa.png';
import Docker from '@/asset/icon/docker.png';
import Git from '@/asset/icon/Git-logo.png';
import Github from '@/asset/icon/github.png';
import Html from '@/asset/icon/html.png';
import Java from '@/asset/icon/java.png';
import Jenkins from '@/asset/icon/jenkins.png';
import JavaScript from '@/asset/icon/js.png';
import MySQL from '@/asset/icon/mysql.png';
import Spring from '@/asset/icon/spring-icon.png';
import Vue from '@/asset/icon/vue.png';
import Css from '@/asset/icon/css3.png';

const categories = [
  {
    name: 'BackEnd Part',
    stacks: [
      { name: 'Java', icon: Java, description: 'Java는 플랫폼에 독립적인 객체 지향 프로그래밍 언어입니다.' },
      { name: 'Spring', icon: Spring, description: 'Spring은 자바 기반의 애플리케이션 개발을 위한 프레임워크입니다.' },
      { name: 'MySQL', icon: MySQL, description: 'MySQL은 오픈 소스 관계형 데이터베이스 관리 시스템입니다.' },
      { name: 'JPA', icon: JPA, description: 'JPA는 자바 객체와 관계형 데이터베이스 간의 데이터를 매핑하는 표준 인터페이스입니다.' },
    ]
  },
  {
    name: 'FrontEnd Part',
    stacks: [
      { name: 'HTML', icon: Html, description: 'HTML5는 웹 페이지의 구조를 정의하는 표준 언어입니다.' },
      { name: 'CSS', icon: Css, description: 'CSS3는 웹 페이지의 스타일을 지정하는 언어입니다.' },
      { name: 'JavaScript', icon: JavaScript, description: 'JavaScript는 웹 페이지에 동적 기능을 추가하는 스크립팅 언어입니다.' },
      { name: 'Vue.js', icon: Vue, description: 'Vue.js는 사용자 인터페이스 개발을 위한 프론트엔드 프레임워크입니다.' },
    ]
  },
  {
    name: 'DevOps Part',
    stacks: [
      { name: 'Docker', icon: Docker, description: 'Docker는 컨테이너 기반의 가상화 플랫폼으로, 애플리케이션을 패키징하고 배포하는 데 사용됩니다.' },
      { name: 'Jenkins', icon: Jenkins, description: 'Jenkins는 지속적인 통합과 배포(CI/CD)를 위한 자동화 도구입니다.' },
      { name: 'Git', icon: Git, description: 'Git은 버전 관리를 위한 분산형 시스템으로, 소스 코드 관리를 효율적으로 할 수 있습니다.' },
      { name: 'GitHub', icon: Github, description: 'GitHub는 Git 저장소를 호스팅하는 서비스로, 협업을 지원하는 플랫폼입니다.' },
    ]
  },
];
</script>

<style scoped>
#Stacks {
  height: auto !important;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.Stacks_container {
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 25px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: visible;
  width: 100%;
}

.Stacks_container h1 {
  padding-top: 50px;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 900;
  color: rgb(156, 107, 212);
}

.Stacks_container h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.stacks_wrap {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.subTitle span {
  padding: 12px 35px;
  margin-left: 30px;
  text-align: center;
  font-weight: 300;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  border: 1px solid rgb(50, 50, 60);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  color: #fff;
}

.stack_container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
}

.stack_container ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
}

.stack_container ul li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 120px;
  height: 120px;
  background-color: #000000;
  border-radius: 30px;
  border: 1px solid rgb(30, 30, 35);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  transition: transform 300ms ease, width 300ms ease, height 300ms ease;
  cursor: pointer;
  padding: 25px;
  overflow: hidden;
}

.stack_container ul li img {
  width: 70px;
  padding: 20px;
}

.stack_container ul li .text-container {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 300ms ease, transform 300ms ease;
  transform: translateX(-20px);
}

.stack_container ul li .stack-name {
  font-weight: 700;
  color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.stack_container ul li .stack-description {
  font-size: 1rem;
  color: #fff;
}

.stack_container ul li:hover {
  width: 250px;
  height: 160px;
  transform: translateX(10px);
}

.stack_container ul li:hover .text-container {
  opacity: 1;
  transform: translateX(0);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .Stacks_container h1 {
    font-size: 2.5rem; /* 타이틀 크기 축소 */
  }

  .Stacks_container h2 {
    font-size: 1.2rem; /* 서브타이틀 크기 축소 */
  }

  .stack_container ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .stack_container ul li {
    width: 100px;
    height: 100px;
    padding: 15px;
  }

  .stack_container ul li img {
    width: 50px;
    padding: 15px;
  }

  .stack_container ul li:hover {
    width: 180px;
    height: 120px;
  }
}

@media (max-width: 500px) {
  .Stacks_container h1 {
    font-size: 2rem; /* 타이틀 크기 축소 */
  }

  .Stacks_container h2 {
    font-size: 1rem; /* 서브타이틀 크기 축소 */
  }

  .stack_container ul {
    grid-template-columns: 1fr;
  }

  .stack_container ul li {
    width: 90px;
    height: 90px;
    padding: 12px;
  }

  .stack_container ul li img {
    width: 40px;
    padding: 10px;
  }

  .stack_container ul li:hover {
    width: 150px;
    height: 110px;
  }
}
</style>
