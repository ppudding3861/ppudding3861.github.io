<script setup="setup">
    import Headers from "@/components/Headers.vue";
    import AboutMe from "@/components/aboutMe.vue";
    import Skill from "@/components/skill.vue";
    import Project from "@/components/project.vue";
    import Contact from "@/components/contact.vue";
    import Intro from "@/components/Intro.vue";
</script>

<template>
    <div class="app-container">
        <header class="fixed-header">
            <Headers/>
        </header>
        <main class="content-container">
            <section id="Intro" class="page-section"><Intro/></section>
            <section id="about-me" class="page-section"><AboutMe/></section>
            <section id="skill" class="page-section"><Skill/></section>
            <section id="project" class="page-section"><Project/></section>
            <section id="contact" class="page-section"><Contact/></section>
        </main>
    </div>
</template>

<style scoped="scoped">
    /* body와 html 기본 여백 제거 */
    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        /* 가로 스크롤 방지 */
    }

    .app-container {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }

    .content-container {
        margin-top: 120px;
    }

    .page-section {
        min-height: 85vh;
        /* 각 섹션을 한 화면에 꽉 차게 만듦 */
        scroll-snap-align: start;
        /* 섹션이 스크롤될 때 시작점에 맞춤 */
        padding: 0;
        /* 위와 양 옆의 여백 제거 */
    }

    main {
        scroll-snap-type: y mandatory;
        /* 스크롤 스냅 활성화 */
        overflow-y: scroll;
        height: calc(100vh - 120px);
        /* 고정된 헤더 제외한 나머지 부분을 스크롤 영역으로 설정 */
    }
</style>