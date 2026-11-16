import { useRef, useState, useEffect } from "react";
import "../styles/Projects.css";

function Projects({ onNavigate }) {

  /*
    프로젝트 정보를 배열로 관리한다.

    왜 배열을 사용하나?
    → 프로젝트 카드마다 HTML을 반복 작성하지 않아도 된다.
    → 나중에 프로젝트를 추가할 때 데이터만 추가하면 된다.
  */
  const projects = [
    {
      id: 1,
      title: "Ssemlog",
      description: "소비관리를 위한 어플",
      image: "/images/sideproject.png",
      skills: ["Spring Boot", "MyBatis"],
      features: [
        "소비 내역 등록·수정·삭제와 영수증 이미지·PDF 첨부",
        "월별 목표액 대비 지출 현황과 초과 금액 요약",
        "이메일·카카오 로그인 및 JWT 토큰 기반 인증",
      ],
      link: "/projects/ssemlog",
      github: "https://github.com/Side-projectTeam/sseumlog-backend",
    },
    {
      id: 2,
      title: "Broadcast Groupware",
      description: "방송국 내부 업무 효율화를 위한 그룹웨어",
      image: "/images/finalproject.png",
      skills: ["Spring Boot", "MyBatis", "WebSocket"],
      features: [
        "캘린더와 시설·장비 예약을 한 화면에서 관리",
        "근태·게시판·전자결재를 역할별 권한으로 제공",
        "WebSocket 기반 실시간 사내 채팅",
      ],
      link: "/projects/broadcast-groupware",
      github: "https://github.com/kjojk91/Broadcast-Groupware",

    },
    {
      id: 3,
      title: "LMS",
      description: "학생과 강사를 위한 학습 관리 시스템",
      image: "/images/semiproject.png",
      skills: ["Java", "JSP", "MyBatis"],
      features: [
        "강의 개설과 수강 신청을 역할별로 관리",
        "출결·시험·성적을 통합 관리",
        "게시판·자료실·Q&A와 학사 일정 캘린더 제공",
      ],
      link: "/projects/lms",
      github: "https://github.com/semi-lms/lms",
    },
  ];

  /*
    프로젝트 슬라이더 HTML 요소를 참조한다.

    useRef를 이용하면
    슬라이더의 가로 스크롤을 직접 조작할 수 있다.
  */
  const projectSlider = useRef(null);

  /*
  화살표 표시 여부를 저장한다.

  false → 화살표 숨김
  true  → 화살표 표시
*/
const [showArrows, setShowArrows] = useState(false);


/*
  화면 크기와 프로젝트 개수에 따라
  화살표 표시 여부를 자동으로 판단한다.
*/
useEffect(() => {

  // 프로젝트 슬라이더 HTML 요소 가져오기
  const slider = projectSlider.current;

  // 슬라이더가 없으면 실행하지 않는다.
  if (!slider) return;


  /*
    프로젝트 카드가 화면보다 많은지 확인하는 함수
  */
  const checkOverflow = () => {

    /*
      scrollWidth
      → 슬라이더의 전체 콘텐츠 너비
        (화면 밖에 숨겨진 부분 포함)

      clientWidth
      → 현재 화면에 보이는 슬라이더 너비

      예시)
      전체 콘텐츠 너비 = 1500px
      보이는 영역 너비 = 1400px

      1500 > 1400이므로
      화살표를 표시한다.
    */
    const isOverflow =
      slider.scrollWidth > slider.clientWidth + 1;

    // 결과에 따라 화살표 표시 여부 변경
    setShowArrows(isOverflow);
  };


  // 컴포넌트가 표시되면 바로 확인
  checkOverflow();


  /*
    ResizeObserver

    슬라이더 크기가 변경되었는지 감지한다.

    실행 예시)
    PC에서 모바일로 창 크기를 줄이면
    슬라이더 너비가 달라지므로
    화살표 표시 여부를 다시 확인한다.
  */
  const resizeObserver = new ResizeObserver(checkOverflow);

  // 슬라이더 크기 감시 시작
  resizeObserver.observe(slider);


  /*
    컴포넌트가 제거되면 감시 종료

    불필요하게 계속 감시하는 것을 방지한다.
  */
  return () => {
    resizeObserver.disconnect();
  };

}, [projects.length]);

  /*
    프로젝트 카드 한 장씩 이동

    direction:
    -1 → 왼쪽
     1 → 오른쪽
  */
  const slideProject = (direction) => {
    const slider = projectSlider.current;

    if (!slider) return;

    // 첫 번째 카드의 HTML 요소를 가져온다.
    const card = slider.querySelector(".project-card");

    if (!card) return;

    // 카드의 실제 너비를 가져온다.
    const cardWidth = card.getBoundingClientRect().width;

    // CSS에 설정된 카드 사이 간격을 가져온다.
    const gap = parseFloat(
      window.getComputedStyle(slider).columnGap
    ) || 0;

    // 카드 한 장의 너비 + 카드 간격만큼 이동한다.
    slider.scrollBy({
      left: (cardWidth + gap) * direction,
      behavior: "smooth",
    });
  };

  const slideLeft = () => {
    slideProject(-1);
  };

  const slideRight = () => {
    slideProject(1);
  };

  return (
    <section className="project-section" id="project" data-reveal>

      {/* 프로젝트 영역 제목 */}
      <h1 className="project-main-title" data-text="PROJECTS">
        PROJECTS
      </h1>

      {/* 슬라이더 전체 영역 */}
      <div className="project-slider-wrap">

        {/* 왼쪽 화살표 */}
        {showArrows && (
          <button
            type="button"
            className="slider-button left"
            onClick={slideLeft}
            aria-label="이전 프로젝트"
          >
            <span className="arrow-left"></span>
          </button>
        )}

        {/* 프로젝트 카드 목록 */}
        <div
          className="project-slider"
          ref={projectSlider}
        >

          {/*
            map()으로 프로젝트 배열을 순회한다.

            프로젝트 하나당 카드 하나가 생성된다.
          */}
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
            >

              {/* 프로젝트 대표 이미지 */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} 대표 이미지`}
                />
              </div>

              {/* 카드 내부 설명 */}
              <div className="project-content">

                {/*
                  프로젝트 제목과 GitHub 아이콘을
                  한 줄에 나란히 배치한다.
                */}
                <div className="project-heading">

                  {/* 프로젝트 제목 */}
                  <h3>{project.title}</h3>

                  {/* GitHub 저장소 이동 */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                    aria-label={`${project.title} GitHub 저장소`}
                    title="GitHub 저장소"
                  >

                    {/*
                      GitHub 아이콘

                      SVG이므로 별도 라이브러리 설치 없이
                      사용할 수 있다.
                    */}
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.12c-3.1.67-3.76-1.32-3.76-1.32-.5-1.27-1.23-1.61-1.23-1.61-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.49 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.53.22 2.66.11 2.94.71.77 1.14 1.76 1.14 2.97 0 4.26-2.61 5.2-5.1 5.48.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
                    </svg>

                  </a>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* 기술 스택 태그 */}
                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <p>핵심 기능</p>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* 프로젝트 상세페이지 */}
                <a
                  href={project.link}
                  className="project-link"
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(event) => {
                    if (project.link.startsWith("/projects/")) {
                      event.preventDefault();
                      onNavigate(project.link);
                    }
                  }}
                >
                  더 알아보기
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* 오른쪽 화살표 */}
          {showArrows && (
            <button
              type="button"
              className="slider-button right"
              onClick={slideRight}
              aria-label="다음 프로젝트"
            >
              <span className="arrow-right"></span>
            </button>
          )}

      </div>
    </section>
  );
}

export default Projects;
