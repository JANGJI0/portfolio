import { useEffect, useState } from "react";
import "../styles/App.css";

// 분리한 컴포넌트 불러오기
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import ProjectDetail from "./ProjectDetail";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const toAppPath = (path) => `${basePath}${path}`;
const getRoutePath = () => window.location.pathname.replace(basePath, "") || "/";

function App() {
  /*
    비디오가 얼마나 줄어들었는지 저장한다.

    0 = 처음 크기
    1 = 최종 크기
  */
  const [scrollProgress, setScrollProgress] = useState(0);
  const [path, setPath] = useState(getRoutePath);
  const [pendingSection, setPendingSection] = useState(null);


  /*
    비디오 영역 크기를
    스크롤 위치에 따라 변경한다.
  */
  useEffect(() => {
    const handleScroll = () => {
      /*
        히어로 영역을 스크롤하는 동안
        변화가 완료되도록 설정한다.
      */
      const progress = Math.min(window.scrollY / 700, 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => setPath(getRoutePath());

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        // 화면 하단 30%를 제외해, 섹션이 실제로 올라올 때 등장 효과를 시작한다.
        rootMargin: "0px 0px -30%",
        threshold: 0.05,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);

  useEffect(() => {
    if (!pendingSection || path !== "/") return undefined;

    const animationFrameId = window.requestAnimationFrame(() => {
      if (pendingSection === "main") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.getElementById(pendingSection);

        if (target) {
          const headerOffset = 96;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

          window.scrollTo({ top: targetTop, behavior: "smooth" });
        }
      }

      setPendingSection(null);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [path, pendingSection]);

  const navigate = (nextPath, sectionId = null) => {
    window.history.pushState({}, "", toAppPath(nextPath));
    setPath(nextPath);
    setPendingSection(sectionId);

    if (!sectionId) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectId = path.match(/^\/projects\/(ssemlog|broadcast-groupware|lms)$/)?.[1];

  if (projectId) {
    return <ProjectDetail projectId={projectId} onSectionNavigate={(sectionId) => navigate("/", sectionId)} />;
  }

  return (
    <>
      {/* 상단 헤더 */}
      <Header compact={scrollProgress > 0.82} />

      {/* 비디오 영역 */}
      <Hero scrollProgress={scrollProgress} onNavigate={navigate} />

      {/* 프로젝트 영역 */}
      <Projects onNavigate={navigate} />

      {/* 스킬 영역 */}
      <Skills />

      {/* 소개 영역 */}
      <About />
    </>
  );
}

export default App;
