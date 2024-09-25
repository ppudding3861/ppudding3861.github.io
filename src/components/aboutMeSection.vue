<template>
  <div class="app-container">
    <!-- AboutMe 컴포넌트에 toggleSlider 함수를 props로 전달 -->
    <AboutMe @toggle-slider="toggleSlider" />
    <div class="slider" :class="{ 'slider-active': isSliderActive }">
      <!-- toggleSlider를 MyStory에 전달 -->
      <MyStory :toggleSlider="toggleSlider" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AboutMe from '../components/aboutMe.vue';
import MyStory from '../components/myStory.vue';

const isSliderActive = ref(false);

// 슬라이더를 열고 닫는 함수
const toggleSlider = () => {
  isSliderActive.value = !isSliderActive.value;
};
</script>

<style scoped>
/* 슬라이더 스타일 */
.slider {
  position: fixed;
  top: 0;
  right: -50%; /* 처음에는 화면 밖에 위치 */
  width: 50%; /* 슬라이드가 화면의 절반까지만 차지 */
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.5s ease; /* 슬라이드 애니메이션 */
  z-index: 10;
}

/* 슬라이더가 활성화되면 화면의 절반까지만 이동 */
.slider-active {
  right: 0;
}
</style>
