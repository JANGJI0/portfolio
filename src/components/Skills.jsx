
import "../styles/Skills.css";

/*
  스킬 데이터

  category : 왼쪽 카드에 표시할 카테고리 이름
  skills   : 오른쪽에 표시할 기술 목록
  icon     : 기술 아이콘 이미지 경로
*/
const skillCategories = [
  {
    category: "Language",
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "MyBatis",
        icon: "/icons/MyBatis.png",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "Oracle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "Infra / DevOps",
    skills: [
      {
        name: "AWS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
    ],
  },
  {
    category: "Collaboration",
    skills: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      {
        name: "Notion",
        icon: "https://cdn.simpleicons.org/notion/000000",
      },
      {
        name: "Swagger",
        icon: "https://cdn.simpleicons.org/swagger/85EA2D",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      },
    ],
  },
];

/* =========================
   스킬 컴포넌트
   ========================= */


function Skills() {
  return (
    <section className="skills-section" id="skills" data-reveal>

      {/* 스킬 영역 제목 */}
      <h1 className="skills-main-title" data-text="SKILLS">
        SKILLS
        </h1>

      {/* 5개 카테고리를 가로로 배치 */}
      <div className="skills-list">

        {skillCategories.map((group) => (

          // 카테고리 하나와 해당 기술 아이콘들
          <div
            className="skills-group"
            key={group.category}
          >

            {/* 위쪽 카테고리 카드 */}
            <div className="skills-category">
              {group.category}
            </div>

            {/* 아래쪽 기술 아이콘: 2열 배치 */}
            <div className="skills-icons">

              {group.skills.map((skill) => (

                <div
                  className="skills-item"
                  key={skill.name}
                >

                  {/* 기술 아이콘 */}
                  <div className="skills-icon">

                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                      />
                    ) : (
                      <span>{skill.name}</span>
                    )}

                  </div>

                  {/* 아이콘 아래 기술 이름 */}
                  <span className="skills-name">
                    {skill.name}
                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Skills;

