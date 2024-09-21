<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Headers from "@/components/Headers.vue";
import DefaultSection from "@/components/defaultSection.vue";
</script>

<template>
  <div class="container">
    <div class="header">
      <Headers/>
    </div>
    <div class="aboutme">
      <DefaultSection/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 요소들을 세로로 나열 */
}

.header {

}

.aboutme {
  /* AboutMe 컴포넌트에 추가 스타일링 가능 */
}
</style>
