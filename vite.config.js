import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base:
    process.env.NODE_ENV === "production"
    ? "/" // 루트 경로에 배포
    : "/",
  build: {
    outDir:"docs", // 빌드 결과물을 docs 폴더에 저장
  },
  server: {
    port: 8000,
    https: false,
  },
  define: {
    'global': 'window', // 브라우저 환경에서 global을 window로 정의
  },
});
