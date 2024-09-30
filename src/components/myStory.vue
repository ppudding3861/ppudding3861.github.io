<template>
  <section class="my-story">
    <div class="container">
      <h1 class="title">자기 소개</h1>
      <ul class="story-text">
        <li>안녕하세요. <strong>백엔드 개발자 강형석</strong>입니다.</li>
        <li>자영업 경험을 통해 얻은 <strong>비즈니스적 사고방식</strong>과 방송국 조연출 업무를 통해 익힌 <strong>연출 및 편집 능력</strong>은 프로젝트 개발에 큰 이점을 제공할 것입니다.</li>
        <li><strong>디자인과 영상편집 툴</strong>을 다룰 수 있어, <strong>시각적 커뮤니케이션 능력</strong>을 겸비한 개발자로서 창의적인 솔루션을 제시할 수 있습니다.</li>
        <li>다양한 <strong>경험과 도전을 통해 성장</strong>해왔으며, <strong>끊임없이 변화하는 기술과 새로운 도전 기회</strong>가 넘치는 프로그래밍의 매력에 빠져 개발자의 길을 걷고 있습니다.</li>
        <li><strong>원활한 소통</strong>을 즐기며 <strong>팀워크를 최우선 가치</strong>로 여기고, <strong>비즈니스적 사고와 창의적 사고</strong>를 결합하여 성공적인 프로젝트를 이끌 자신이 있습니다.</li>
      </ul>
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
  text-align: left; /* 왼쪽 정렬 */
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 40px;
  list-style-type: disc; /* 리스트 형식 */
  padding-left: 20px; /* 리스트 안쪽 여백 */
}

.story-text li {
  margin-bottom: 15px; /* 리스트 아이템 간 간격 */
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

  .story-text li {
    margin-bottom: 10px;
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

  .story-text li {
    margin-bottom: 8px;
  }

  .close-button {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
