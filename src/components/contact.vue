<template>
  <section class="contact-section">
    <h1>Contact Me</h1>
    <div class="contact-info">
      <div class="phone">
        <h2>Phone</h2>
        <p>010-5002-3861</p>
      </div>

      <div class="email">
        <h2>Email</h2>
        <a href="mailto:email@example.com">email@example.com</a>
      </div>

      <div class="social-links">
        <h2>Find me on</h2>
        <a href="https://github.com/ppudding3861" target="_blank" class="social-button">GitHub</a>
        <a href="https://velog.io/@ppuding/posts" target="_blank" class="social-button">Blog</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-section {
  text-align: center;
  background-color: #333333;
  padding: 80px;
  color: #fff;
  min-height: 80vh;
}

h1 {
  font-size: 48px;
  margin-bottom: 30px;
  color:rgb(156, 107, 212);
}

p {
  font-size: 24px;
  margin-bottom: 50px;
  color: #ccc;
}

.contact-info {
  margin-bottom: 50px;
}

.phone, .email, .social-links {
  margin-bottom: 30px;
}

.phone h2, .email h2, .social-links h2 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #fff;
}

.phone p, .email a {
  font-size: 24px;
  color: #218838;
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone p:hover, .email a:hover {
  color: #17a2b8;
}

.social-links a {
  display: inline-block;
  margin: 10px 20px;
  padding: 15px 30px;
  font-size: 24px;
  background-color: #218838;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.social-links a:hover {
  background-color: #155724;
  box-shadow: 0 6px 20px rgba(33, 136, 56, 0.3);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .contact-section {
    padding: 60px 30px;
  }

  h1 {
    font-size: 36px; /* 제목 크기를 줄임 */
    color:rgb(156, 107, 212);
  }

  .phone p, .email a, .social-links a {
    font-size: 20px; /* 텍스트 크기를 줄임 */
  }

  .social-links a {
    padding: 12px 25px; /* 버튼 크기를 줄임 */
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 40px 20px;
  }

  h1 {
    font-size: 28px; /* 더 작은 화면에서 제목 크기를 줄임 */
  }

  .phone p, .email a, .social-links a {
    font-size: 18px; /* 텍스트 크기를 더 줄임 */
  }

  .social-links a {
    padding: 10px 20px; /* 버튼 크기를 더 줄임 */
    font-size: 18px;
  }
}
</style>
