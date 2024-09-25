<template>
  <section class="about-me-section">
    <div class="about-me-allcontainer">
      <div class="left-container">
        <img src="@/asset/image/all.jpg" alt="Background Image" class="container-image"/>
      </div>
      <div class="right-container">
        <div class="about-me-container">
          <img src="@/asset/image/firemon.jpg" alt="Profile Image" class="profile-image" />
          <div class="about-me-content">
            <h1>A Fresh Start<br>for New Possibilities.</h1>
            <p>
              안녕하세요. 백엔드 개발자를 꿈꾸는 강형석입니다.
              <br/><br/>
              “유연함과 추진력: 변화에 빠르게 적응하고, 목표를 향해 끊임없이 나아간다.”
              <br/><br/>
              다양한 경험을 통해 유연한 사고를 기르고, 빠른 판단력과 추진력으로 문제를 해결하는 능력을 갖추었습니다. 사용자 경험을 최우선으로 생각하며, 앞으로도 더 나은 결과를 위해 끊임없이 성장하고 배우고자 합니다.
            </p>
            <div class="social-links">
              <a href="https://github.com/ppudding3861" target="_blank" class="social-button">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-me-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  background-color: #333333;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}

.about-me-allcontainer {
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.left-container {
  width: 50%;
  position: relative;
}

.right-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
}

.container-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-me-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  color:rgb(156, 107, 212);
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #fff;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-button {
  display: inline-block;
  padding: 12px 25px;
  font-size: 18px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.social-button:hover {
  background-color: #555;
  color: #fff;
}

/* 반응형 스타일 */
@media (max-width: 768px) {
  .about-me-section {
    height: auto; /* 모바일에서 높이 자동 조절 */
    padding: 40px 20px;
  }

  .about-me-allcontainer {
    flex-direction: column; /* 세로 레이아웃으로 변경 */
    height: auto;
  }

  .left-container {
    width: 100%; /* 전체 너비 사용 */
    height: 200px; /* 고정된 높이로 설정 */
  }

  .right-container {
    width: 100%;
    padding: 0;
    margin-top: 20px; /* 이미지와 내용 사이에 여백 추가 */
  }

  .container-image {
    position: relative;
    height: 100%;
  }

  h1 {
    font-size: 36px; /* 타이틀 크기 줄임 */
    text-align: center; /* 중앙 정렬 */
  }

  p {
    font-size: 16px;
    line-height: 1.4;
    text-align: center; /* 본문 중앙 정렬 */
  }

  .profile-image {
    width: 120px;
    height: 120px;
    margin: 0 auto 20px; /* 이미지 가운데 정렬 */
  }

  .social-links {
    justify-content: center; /* 버튼 중앙 정렬 */
    gap: 10px; /* 간격 축소 */
  }

  .social-button {
    padding: 10px 20px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 100px;
    height: 100px;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 14px;
  }

  .social-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>
