<template>
  <section class="intro-section">
    <div class="intro-content">
      <h1>Hyeoung Seok</h1>
      <p>
        PORTFOLIO
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.intro-section {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
}

.intro-content {
  text-align: center;
}

h1 {
  font-size: 200px;
  margin-bottom: 30px;
  font-weight: 700;
}

p {
  font-size: 100px;
  margin-bottom: 100px;
  color: rgb(156, 107, 212);;
}

.enter-button {
  display: inline-block;
  padding: 15px 30px;
  background-color: #218838;
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 18px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.enter-button:hover {
  background-color: #1e7e34;
  box-shadow: 0 4px 15px rgba(33, 136, 56, 0.3);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  h1 {
    font-size: 120px; /* 제목 크기를 줄임 */
  }

  p {
    font-size: 60px; /* 텍스트 크기를 줄임 */
    margin-bottom: 50px; /* 여백을 줄임 */
  }

  .enter-button {
    padding: 12px 25px; /* 버튼 크기를 줄임 */
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 80px; /* 작은 화면에서 제목 크기를 더 줄임 */
  }

  p {
    font-size: 40px; /* 텍스트 크기를 더 줄임 */
    margin-bottom: 30px; /* 여백을 더 줄임 */
    color:rgb(156, 107, 212);
  }

  .enter-button {
    padding: 10px 20px; /* 버튼 크기를 더 줄임 */
    font-size: 14px;
  }
}
</style>
