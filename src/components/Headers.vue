<template>
  <div id="app">
    <header class="navbar">
      <div class="logo">HyeoungSeok | Portfolio</div>
      <nav>
        <ul>
          <li><router-link to="/about-me">ABOUT ME</router-link></li>
          <li><router-link to="/education">EDUCATION</router-link></li>
          <li><router-link to="/skill">SKILL</router-link></li>
          <li><router-link to="/project">PROJECT</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
// 별도의 스크립트 설정이 필요 없으므로 빈 상태로 둡니다.
</script>

<style scoped>
/* 기본 스타일링 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 헤더 스타일 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}

.cta-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #218838;
}

/* 메인 섹션 스타일 */
.hero-section {
  height: 100vh;
  background-image: url('/path_to_your_image_here.jpg'); /* 이미지 경로 수정 */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
