<template>
  <section class="my-story">
    <div class="container">
      <h1 class="title">MY STORY</h1>
      <p class="story-text">
        저는 자신에게 맞는 일을 찾는 과정에서 여러 도전을 해보았고, 그 과정에서 개발의 길을 선택하게 되었습니다. <br>온라인 플랫폼을 통해 다양한 판매와 운영을 경험하며, 백엔드 시스템의 중요성을 인식하게 되었고, 사용자 경험을 최적화하고 문제를 해결하는 방법을 깊이 있게 배워가게 되었습니다.<br> 이를 통해 저만의 기술적 자산을 쌓으며 지속적인 성장을 목표로 나아가고 있습니다.
      </p>
      <p class="story-text">
        하이미디어 학원에서 다양한 프로젝트에서 설계, API 개발, 서버 구축 등 다양한 기술적 문제를 해결하고 유연한 사고와 추진력을 발휘해 빠르게 변화하는 환경 속에서도 최적의 결과를 내기 위해 끊임없이 학습하고 도전하고 있습니다.<br>앞으로도 새로운 기술에 대한 탐구와 백엔드 개발의 역량 강화를 통해 성장해나가고자 합니다.
      </p>
      <button class="close-button" @click="toggleSlider">닫기</button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  toggleSlider: Function
});
</script>

<style scoped>
.my-story {
  background-color: #333;
  color: #fff;
  padding: 180px 20px;
  text-align: center;
  height: 85vh; /* 전체 화면을 채움 */
  overflow-y: auto; /* 스크롤 적용 */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  color: #ffd700;
  margin-bottom: 40px;
}

.story-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 40px;
}

.close-button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #555;
}

/* 반응형 스타일 추가 */
@media (max-width: 768px) {
  .my-story {
    padding: 150px 15px;
    height: 85vh; /* 모바일에서도 전체 화면 채우기 */
    overflow-y: auto; /* 스크롤 가능 */
  }

  .title {
    font-size: 2rem;
  }

  .story-text {
    font-size: 0.9rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .close-button {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .my-story {
    padding: 120px 10px;
    height: 85vh; /* 작은 화면에서도 스크롤 */
    overflow-y: auto; /* 스크롤 가능 */
  }

  .title {
    font-size: 1.5rem;
    padding-top: 10%;
  }

  .story-text {
    font-size: 0.8rem;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .close-button {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
