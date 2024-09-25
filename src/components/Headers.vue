<template>
  <header class="navbar">
    <div class="logo">HyeoungSeok | Portfolio</div>
    <button class="nav-toggle" @click="toggleNav">☰</button> <!-- 햄버거 메뉴 버튼 -->
    <nav :class="{ 'active': isNavOpen }">
      <ul>
        <li><a @click="scrollToSection('Intro')">INTRO</a></li>
        <li><a @click="scrollToSection('about-me')">ABOUT ME</a></li>
        <li><a @click="scrollToSection('skill')">SKILL</a></li>
        <li><a @click="scrollToSection('project')">PROJECT</a></li>
        <li><a @click="scrollToSection('contact')">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    isNavOpen.value = false; // 링크 클릭 시 네비게이션 닫기
  }
}
</script>

<style scoped>
/* 공통 스타일 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 헤더 스타일 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #333333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  height: 130px;
  position: relative;
}

.logo {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
}

/* 햄버거 메뉴 버튼 스타일 */
.nav-toggle {
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

/* 네비게이션 스타일 */
nav {
  display: flex;
}

nav ul {
  display: flex;
  gap: 25px;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  font-size: 18px;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 30px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
}

nav ul li a:hover {
  background-color: #218838;
  color: white;
  box-shadow: 0 4px 15px rgba(33, 136, 56, 0.3);
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .nav-toggle {
    display: block; /* 햄버거 메뉴 버튼 표시 */
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333333;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-top: 1px solid #444;
  }

  nav.active {
    display: flex; /* 햄버거 메뉴가 열리면 표시 */
  }

  nav ul {
    flex-direction: column;
    gap: 15px;
  }

  nav ul li a {
    font-size: 16px;
    padding: 8px 15px;
    text-align: center;
  }

  .logo {
    margin-bottom: 10px;
  }
}
</style>
