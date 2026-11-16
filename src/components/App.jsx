import { useEffect, useState } from "react";
import "../styles/App.css";

// 분리한 컴포넌트 불러오기
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import ProjectDetail from "./ProjectDetail";

function App() {
  /*
    비디오가 얼마나 줄어들었는지 저장한다.

    0 = 처음 크기
    1 = 최종 크기
  */
  const [scrollProgress, setScrollProgress] = useState(0);
  const [path, setPath] = useState(window.location.pathname);


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
    const handlePopState = () => setPath(window.location.pathname);

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

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectId = path.match(/^\/projects\/(ssemlog|broadcast-groupware|lms)$/)?.[1];

  if (projectId) {
    return <ProjectDetail projectId={projectId} onBack={() => navigate("/")} />;
  }

  return (
    <>
      {/* 상단 헤더 */}
      <Header compact={scrollProgress > 0.82} />

      {/* 비디오 영역 */}
      <Hero scrollProgress={scrollProgress} />

      {/* 프로젝트 영역 */}
      <Projects onNavigate={navigate} />

      {/* 스킬 영역 */}
      <Skills />

      
      <main className="content-inner">
      </main>
    </>
  );
}

export default App;
