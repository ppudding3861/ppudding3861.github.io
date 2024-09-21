import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'; // Pinia Persist 플러그인 추가

import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

const pinia = createPinia(); // Pinia 인스턴스 생성
pinia.use(piniaPluginPersistedstate); // 플러그인 등록

app.use(pinia); // Pinia 사용
app.use(router); // 라우터 사용

app.mount("#app"); // 애플리케이션 마운트
