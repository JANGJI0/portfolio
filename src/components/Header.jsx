import { useEffect, useState } from "react";
import "../styles/Header.css";

function Header({ compact }) {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sections = ["project", "skills"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const moveTo = (id) => {
    if (id === "main") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
  };

  return (
    <header className={`header ${compact ? "header-compact" : ""}`}>
    {/* 실제 헤더 내용이 들어가는 영역 */}
      <div className="header-inner">

      {/* 왼쪽 로고 영역 */}
      <button type="button" className="logo" onClick={() => moveTo("main")}>
        MAIN
      </button>

      {/* 오른쪽 메뉴 영역 */}
      <nav className="nav">
        <button
          type="button"
          className={activeSection === "project" ? "active" : ""}
          onClick={() => moveTo("project")}
        >
          프로젝트
        </button>
        <button
          type="button"
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => moveTo("skills")}
        >
          스킬
        </button>
      </nav>

      </div>
    </header>
  );
}

export default Header;
