import "../styles/ProjectDetail.css";
import Header from "./Header";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;
const detailNavItems = [
  { id: "demo", label: "시연영상" },
  { id: "contributions", label: "주요 기여" },
  { id: "solution", label: "문제 해결" },
  { id: "stack", label: "기술 스택" },
];

const projectDetails = {
  ssemlog: {
    title: "Ssemlog", type: "SIDE PROJECT", period: "진행 중", image: assetPath("images/sideproject.png"),
    summary: "소비 기록과 월별 목표를 함께 관리하며 나만의 소비 흐름을 돌아볼 수 있는 서비스",
    overview: ["소비 내역, 월별 예산, 로그인 정보가 분리되면 사용자의 소비 상태를 안전하게 연결해 보여주기 어렵습니다.", "소비 기록·예산·분석 API와 파일 첨부 저장 흐름을 연결해 월별 소비 상태를 한눈에 확인하도록 구성했습니다."],
    solutionCards: [
      ["문제", "소비 내역, 월별 예산, 로그인 정보가 분리되면 사용자의 소비 상태를 안전하게 연결해 보여주기 어렵습니다."],
      ["해결", "소비 기록·예산·분석 API와 파일 첨부 저장 흐름을 연결해 월별 소비 상태를 한눈에 확인하도록 구성했습니다."],
      ["문제", "이메일과 카카오 로그인 사용자의 인증 상태를 안전하게 유지하고, 재인증·로그아웃 시 토큰을 일관되게 관리해야 했습니다."],
      ["해결", "JWT 기반 Stateless 인증에 리프레시 토큰 저장·회전·로그아웃 흐름을 적용하고, 카카오 사용자의 프로필 재인증과 계정 연결을 구현했습니다."],
    ],
    features: [["소비 기록 관리", "소비 내역 등록·수정·삭제와 영수증 이미지·PDF 첨부를 지원합니다."], ["월별 소비 목표", "월별 목표액과 실제 지출을 비교하고 소비 상태를 요약합니다."], ["안전한 인증", "이메일·카카오 로그인과 JWT 기반 인증 흐름을 제공합니다."]],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JPA", "PostgreSQL", "JWT", "OAuth2", "Supabase Storage"],
    caseStudy: {
      problem: "소비 내역, 월별 예산, 인증 흐름이 분리되어 있어 사용자의 소비 상태를 안전하게 연결해 보여줄 백엔드 API가 필요했습니다.",
      role: "백엔드 API 설계 · 구현",
      contributions: ["리프레시 토큰 저장·회전·로그아웃 흐름과 단위 테스트 구현", "카카오 연동 사용자의 프로필 재인증과 계정 연결 흐름 구현", "월별 예산 계획·소비 분석 API, DB 마이그레이션과 테스트 추가"],
      outcome: "JWT 기반 Stateless 인증, 월별 예산·소비 분석, 파일 첨부 소비 기록을 API로 연결하고 Swagger 문서로 검증 가능한 구조를 만들었습니다.",
    },
    resources: [["GitHub", "https://github.com/Side-projectTeam/sseumlog-backend"]],
  },
  "broadcast-groupware": {
    title: "Broadcast Groupware", type: "FINAL PROJECT", period: "2025.08.01 — 2025.09.10", image: assetPath("images/finalproject.png"),
    video: "https://drive.google.com/file/d/18Fea2qlCaUQ42ipuhO4cR2Zbb7ynFV4I/preview",
    summary: "방송국 구성원의 일정, 시설 예약, 근태, 전자결재와 소통을 한곳에서 관리하는 사내 그룹웨어",
    overview: ["일정·시설 예약·근태·게시판·전자결재 업무가 흩어져 있어, 방송국 구성원이 업무 현황을 확인하고 다음 작업으로 이어가기 어려웠습니다.", "관리자와 직원의 역할별 접근 권한을 분리하고, 전체·팀·개인 일정과 회의실·편집실·차량 예약, 근태·결재 업무를 한 서비스로 연결했습니다."],
    solutionCards: [
      ["문제", "일정·시설 예약·근태·게시판·전자결재 업무가 흩어져 있어, 방송국 구성원이 업무 현황을 확인하고 다음 작업으로 이어가기 어려웠습니다."],
      ["해결", "관리자와 직원의 역할별 접근 권한을 분리하고, 전체·팀·개인 일정과 회의실·편집실·차량 예약, 근태·결재 업무를 한 서비스로 연결했습니다."],
      ["문제", "여러 사용자가 동시에 채팅할 때 메시지 순서, 읽음 상태, 수신자별 알림을 일관되게 처리해야 했습니다."],
      ["해결", "WebSocket STOMP 연결에 HTTP 세션 정보를 전달하고, 방별 토픽·읽음 이벤트·수신자별 알림 채널을 분리해 실시간 소통 흐름을 구성했습니다."],
    ],
    features: [["일정 · 시설 예약", "전체·팀·개인 일정을 확인하고 회의실, 편집실, 차량 예약을 관리합니다. 예약 시간 충돌도 확인합니다."], ["근태 · 전자결재", "출근·퇴근·외근을 기록하고 일반 문서, 방송 편성, 휴가 문서의 결재 진행 상태를 관리합니다."], ["실시간 사내 소통", "WebSocket(STOMP) 기반 개인·그룹 채팅, 읽음 처리와 메시지 알림으로 빠른 협업을 지원합니다."]],
    stack: ["Java 21", "Spring Boot", "Spring Security", "JSP", "JSTL", "jQuery", "MySQL", "JPA", "MyBatis", "WebSocket"],
    caseStudy: {
      problem: "일정, 시설 예약, 근태, 공지와 소통이 여러 업무 흐름으로 나뉘어 있어 방송국 구성원이 한곳에서 처리할 업무 시스템이 필요했습니다.",
      role: "4인 팀 · 로그인, 채팅, 메인 화면 담당",
      contributions: ["Spring Security와 세션 기반 로그인 및 역할별 접근 제어 구현", "사원번호·생년월일 검증 후 임시 비밀번호를 이메일로 발송하는 비밀번호 찾기 기능 구현", "WebSocket(STOMP) 기반 개인·그룹 채팅, 읽음 처리와 수신자별 메시지 알림 구현", "근태·휴가·결재·예약·공지·방송 편성 현황을 모아 보여주는 메인 화면 API 구성"],
      outcome: "역할 기반 업무 화면과 실시간 소통 기능을 결합해 예약·근태·결재·공지로 이어지는 내부 업무 흐름을 한 서비스에서 처리하도록 구현했습니다.",
    },
    resources: [["GitHub", "https://github.com/kjojk91/Broadcast-Groupware"], ["ERD", "https://www.erdcloud.com/d/885HpyDu2DsreRWr8"], ["WBS", "https://docs.google.com/spreadsheets/d/1nq_2JE1Glr-NHnPQepheWDQer0huWSuSwJrtRJHRLis/edit?gid=458429680#gid=458429680"], ["요구사항 정의서", "https://docs.google.com/spreadsheets/d/1NVzBaICrkpvecXyAXfLW_jw8Wl_FaJOsl7uvMSYpYas/edit?gid=2120964424#gid=2120964424"]],
  },
  lms: {
    title: "Academy LMS", type: "SEMI PROJECT", period: "2025.06.01 — 2025.06.23", image: assetPath("images/semiproject.png"),
    video: "https://drive.google.com/file/d/1bXyyAeNW3Sewl07TG7X1L5YBOTYRstxF/preview",
    summary: "학생, 강사, 관리자의 역할에 맞춰 학원 운영 업무를 통합 관리하는 학습 관리 시스템",
    overview: ["국비지원 코딩 학원에서는 강의 개설·수강 신청, 출결, 시험·성적, 공지와 자료 관리가 역할과 기능별로 나뉘어 있어 운영 흐름을 한눈에 파악하기 어려웠습니다.", "관리자·강사·학생의 역할별 권한을 분리하고, Controller → Model → JSP 흐름으로 화면별 데이터를 연결했습니다. 또한 팀원 간 공통 세션 값·Model 속성 이름·JSP 화면 경로를 맞춰 강의·출결·시험·성적·학사 일정·커뮤니티 업무를 하나의 흐름으로 통합했습니다."],
    features: [["강의 · 수강 관리", "강의 개설과 수강 신청을 역할별로 관리합니다."], ["학습 과정 관리", "출결, 시험 출제와 성적을 통합 관리합니다."], ["학습 커뮤니티", "공지사항, 게시판, 자료실, Q&A와 학사 일정 캘린더를 제공합니다."]],
    stack: ["Java 17", "Spring Boot", "JSP", "JSTL", "MySQL", "MyBatis", "Maven"],
    caseStudy: {
      problem: "강의 개설과 수강 신청부터 출결, 시험·성적, 자료 관리와 학사 일정까지 학원 운영 업무가 역할별로 분산되어 있었습니다. 또한 별도 REST API가 없는 서버 렌더링 구조에서 여러 백엔드 담당자가 같은 세션·Model·JSP 화면을 수정해, 데이터 전달 형식과 화면 이동 규칙을 맞추는 협업 기준이 필요했습니다.",
      role: "5인 팀 · 로그인, 메인 화면, 공지사항, Q&A, 자료실 담당",
      contributions: ["관리자·강사·학생 역할을 구분한 로그인과 세션 유지 흐름 구현", "공지사항과 Q&A의 역할별 작성·수정·조회 권한, 비공개 글 접근 규칙 구현", "자료실 다중 파일 업로드와 상세 화면 파일 미리보기 기능 구현", "팀원과 공통 세션 값·Model 속성 이름·JSP 화면 경로를 맞춰 기능 간 전달 형식이 달라지는 문제를 조율"],
      outcome: "REST API를 별도로 두지 않고 Controller → Model → JSP 흐름으로 화면을 연결했습니다. 공통 데이터 전달 규칙을 맞춘 뒤 강의·출결·시험·성적·커뮤니티 기능을 역할별로 연결해 학원 운영에 필요한 핵심 업무를 한 시스템에서 관리하도록 구현했습니다.",
    },
    resources: [["GitHub", "https://github.com/semi-lms/lms"], ["ERD", "https://www.erdcloud.com/d/fdwgCR6GtbCXgoeng"], ["WBS", "https://docs.google.com/spreadsheets/d/1x4-Z6MfCncdQYWmEXit5f6KEuZxHFs63fnbnR6QBTXg/edit?gid=0#gid=0"], ["요구사항 정의서", "https://docs.google.com/spreadsheets/d/1CjzcDt925So0HT_PfsIxjKj2kNaZ3f8T/edit?gid=865476805#gid=865476805"]],
  },
};

function ProjectDetail({ projectId, onSectionNavigate }) {
  const project = projectDetails[projectId];
  const usesDetailLayout = true;

  return (
    <>
      <Header compact detail={usesDetailLayout} navItems={usesDetailLayout ? detailNavItems : undefined} onSectionNavigate={onSectionNavigate} />
      <main className="project-detail">
      {usesDetailLayout ? (
        <>
          <section className="detail-hero detail-hero-lms">
            <h1 className="detail-main-title" data-text={project.title}>{project.title}</h1>
            <p className={`detail-summary ${projectId === "ssemlog" || projectId === "broadcast-groupware" ? "detail-summary-single-line" : ""}`}>{project.summary}</p>
            {project.resources.length > 0 && <div className="detail-actions">{project.resources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>}
          </section>
          <section className="detail-demo" id="demo" aria-label={`${project.title} 시연 영상`}>
            <h2 className="detail-main-title" data-text="시연영상">시연영상</h2>
            {project.video ? <div className="detail-video"><iframe src={project.video} title={`${project.title} 시연 영상`} allow="autoplay" allowFullScreen /></div> : <div className="detail-video detail-video-pending"><p>시연영상 준비 중입니다.</p></div>}
          </section>
        </>
      ) : project.video ? (
        <section className="detail-video" aria-label={`${project.title} 시연 영상`}>
          <iframe src={project.video} title={`${project.title} 시연 영상`} allow="autoplay" allowFullScreen />
        </section>
      ) : (
        <section className="detail-cover" aria-label={`${project.title} 대표 이미지`}>
          <img src={project.image} alt={`${project.title} 프로젝트 화면`} />
        </section>
      )}
      {!usesDetailLayout && (
        <section className="detail-hero">
          <p className="detail-kicker">{project.type} · {project.period}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          {project.resources.length > 0 && <div className="detail-actions">{project.resources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>}
        </section>
      )}
      {usesDetailLayout && (
        <section className="detail-contributions" id="contributions">
          <h2 className="detail-main-title">주요 기여</h2>
          <ul className="contribution-list">
            {project.caseStudy.contributions.map((contribution) => <li key={contribution}><p>{contribution}</p></li>)}
          </ul>
        </section>
      )}
      <section className="detail-grid" id={usesDetailLayout ? "solution" : undefined}>
        <div>{!usesDetailLayout && <p className="section-label">OVERVIEW</p>}<h2>{usesDetailLayout ? <>문제와<br />해결 방식</> : <>프로젝트를 통해<br />해결한 문제</>}</h2></div>
        {usesDetailLayout ? (
          <div className="detail-solution-cards">
            {(project.solutionCards || [["문제", project.overview[0]], ["해결", project.overview[1]]]).map(([label, description]) => <article key={`${label}-${description}`} className={`solution-card ${label === "문제" ? "solution-card-problem" : "solution-card-resolution"}`}><h3>{label}</h3><p>{description}</p></article>)}
          </div>
        ) : <div className="detail-copy">{project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
      </section>
      {!usesDetailLayout && <section className="detail-case-study">
        <p className="section-label">CASE STUDY</p>
        <div className="case-study-grid">
          <article><h3>문제</h3><p>{project.caseStudy.problem}</p></article>
          <article><h3>역할</h3><p>{project.caseStudy.role}</p></article>
          <article className="case-study-contributions"><h3>주요 기여</h3><ul>{project.caseStudy.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></article>
          <article><h3>구현 결과</h3><p>{project.caseStudy.outcome}</p></article>
        </div>
      </section>}
      <section className={`detail-features${usesDetailLayout ? " detail-features-detail" : ""}`}>
        {usesDetailLayout ? <h2 className="detail-main-title">주요 기능</h2> : <p className="section-label">KEY FEATURES</p>}
        <div className="feature-list">{project.features.map(([title, description], index) => <article key={title}>{!usesDetailLayout && <span>0{index + 1}</span>}<h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="detail-stack" id={usesDetailLayout ? "stack" : undefined}>
        {usesDetailLayout ? <h2 className="detail-main-title">기술 스택</h2> : <p className="section-label">TECH STACK</p>}
        <div className="stack-tags">{project.stack.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>
      </main>
    </>
  );
}

export default ProjectDetail;
