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
const categories = [
  {
    name: 'LANGUAGE',
    stacks: [
      { name: 'CSS3', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', description: 'CSS3는 웹 페이지의 스타일을 지정하는 데 사용됩니다.' },
      { name: 'HTML5', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg', description: 'HTML5는 웹 페이지 구조를 정의하는 표준입니다.' },
      { name: 'TemurinJDK 17', icon: 'https://adoptium.net/icons/icon-384x384.png', description: 'Temurin JDK 17은 자바 개발을 위한 오픈 소스 JDK입니다.' },
      { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', description: 'JavaScript는 웹 페이지에 동적 기능을 추가합니다.' },
      { name: 'Dart', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png', description: 'Dart는 Google에서 만든 프로그래밍 언어로, 주로 Flutter에서 사용됩니다.' },
    ]
  },
  {
    name: 'BACK-END PART',
    stacks: [
      { name: 'Spring', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg', description: 'Spring은 자바 기반의 엔터프라이즈 애플리케이션 개발을 위한 프레임워크입니다.' },
      { name: 'Spring Boot', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg', description: 'Spring Boot는 빠르고 간편한 자바 애플리케이션 개발을 위한 도구입니다.' },
      { name: 'Node.js', icon: 'https://nodejs.org/static/images/logo.svg', description: 'Node.js는 서버 측에서 JavaScript를 실행할 수 있게 해주는 런타임 환경입니다.' },
      { name: 'JSON Web Token', icon: 'https://jwt.io/img/pic_logo.svg', description: 'JWT는 JSON 포맷을 사용한 웹 토큰 인증 방식입니다.' },
    ]
  },
  {
    name: 'FRONT-END PART',
    stacks: [
      { name: 'Vue.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg', description: 'Vue.js는 사용자 인터페이스 개발을 위한 프론트엔드 프레임워크입니다.' },
      { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', description: 'React는 사용자 인터페이스를 구축하기 위한 라이브러리입니다.' },
      { name: 'Axios', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Axios_logo_%282021%29.png', description: 'Axios는 HTTP 요청을 쉽게 처리하기 위한 자바스크립트 라이브러리입니다.' },
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
