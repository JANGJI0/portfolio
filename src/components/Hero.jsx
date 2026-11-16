import { useEffect, useState } from "react";
import "../styles/Hero.css";

const projects = [
  {
    title: "Ssemlog",
    description: "소비 내역을 기록하고, 월별 예산을 설정해 실제 지출과 비교하는 소비 관리 서비스입니다. 나만의 소비 흐름을 만나보세요.",
    screens: [
      "ssemlog-login.png",
      "ssemlog-home.png",
      "ssemlog-expense-detail.png",
      "ssemlog-expense.png",
      "ssemlog-budget.png",
    ],
    path: "/projects/ssemlog",
  },
  { title: "Broadcast Groupware", description: "일정, 시설 예약, 근태, 전자결재와 소통을 한곳에서 관리하는 사내 그룹웨어를 만나보세요.", image: `${import.meta.env.BASE_URL}images/finalproject.png`, path: "/projects/broadcast-groupware" },
  { title: "Academy\nLMS", description: "학생, 강사, 관리자의 역할에 맞춰 학원 운영 업무를 통합 관리하는 학습 관리 시스템을 만나보세요.", image: `${import.meta.env.BASE_URL}images/semiproject.png`, path: "/projects/lms" },
];

const appPath = (path) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;

function Hero({ scrollProgress, onNavigate }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [slideCycle, setSlideCycle] = useState(0);
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveProjectIndex((currentIndex) => (currentIndex + 1) % projects.length);
      setSlideCycle((currentCycle) => currentCycle + 1);
    }, 10000);

    return () => window.clearTimeout(timeoutId);
  }, [slideCycle]);

  const selectProject = (index) => {
    setActiveProjectIndex(index);
    setSlideCycle((currentCycle) => currentCycle + 1);
  };

  return (
    <div className="hero-scroll-area">
      <div className="hero-sticky">
        <section className="hero" aria-label="주요 프로젝트 소개" style={{ "--hero-progress": scrollProgress }}>
          <div className="hero-project" key={activeProject.title}>
            <div className="hero-project-copy">
              <h1>{activeProject.title}</h1>
              <p className="hero-project-description">{activeProject.description}</p>
              <a className="hero-project-link" href={appPath(activeProject.path)} onClick={(event) => { event.preventDefault(); onNavigate(activeProject.path); }}>
                더 알아보기
              </a>
            </div>
            <div className={`hero-project-visual ${activeProject.title === "Ssemlog" ? "hero-project-visual-ssemlog" : ""}`} aria-hidden="true">
              {activeProject.screens ? (
                <div className="hero-ssemlog-row">
                  {activeProject.screens.map((screen, index) => (
                    <img className={`hero-ssemlog-screen hero-ssemlog-screen-${index + 1}`} key={screen} src={`${import.meta.env.BASE_URL}images/${screen}`} alt="" />
                  ))}
                </div>
              ) : (
                <img src={activeProject.image} alt="" />
              )}
            </div>
            <div className="hero-project-indicator" aria-label="프로젝트 슬라이드 진행 상태">
              <div className="hero-project-selector">
                {projects.map((project, index) => (
                  <button
                    aria-label={`${project.title.replace("\n", " ")} 보기`}
                    aria-pressed={index === activeProjectIndex}
                    className={index === activeProjectIndex ? "is-active" : ""}
                    key={project.title}
                    onClick={() => selectProject(index)}
                    type="button"
                  />
                ))}
              </div>
              <div className="hero-project-progress" aria-hidden="true">
                <span key={`${activeProject.title}-${slideCycle}`} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
