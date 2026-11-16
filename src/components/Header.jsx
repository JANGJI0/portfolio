import { useEffect, useState } from "react";
import "../styles/Header.css";

const defaultNavItems = [
  { id: "project", label: "프로젝트" },
  { id: "skills", label: "스킬" },
  { id: "about", label: "소개" },
];

function Header({ compact, detail = false, navItems = defaultNavItems, onSectionNavigate }) {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    if (detail) {
      const updateDetailSection = () => {
        const markerY = window.scrollY + 96;
        let visibleSection = "";

        navItems.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section && markerY >= section.offsetTop) visibleSection = id;
        });

        setActiveSection(visibleSection);
      };

      window.addEventListener("scroll", updateDetailSection, { passive: true });
      updateDetailSection();

      return () => window.removeEventListener("scroll", updateDetailSection);
    }

    const updateActiveSection = () => {
      const project = document.getElementById("project");
      const skills = document.getElementById("skills");
      const maximumScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const viewportCenterY = window.scrollY + window.innerHeight / 2;

      // 소개는 페이지의 마지막 위치에서만 활성화한다.
      if (maximumScrollY > 0 && window.scrollY >= maximumScrollY) {
        setActiveSection("about");
        return;
      }

      if (skills && viewportCenterY >= skills.offsetTop) {
        setActiveSection("skills");
        return;
      }

      if (project && viewportCenterY >= project.offsetTop) {
        setActiveSection("project");
        return;
      }

      setActiveSection("main");
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [detail, navItems]);

  const moveTo = (id) => {
    const target = id === "main" ? null : document.getElementById(id);

    if (target) {
      const headerOffset = 96;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      const maximumScrollY = document.documentElement.scrollHeight - window.innerHeight;
      const bottomBuffer = !detail && id === "skills" ? 80 : 0;
      const scrollTarget = Math.min(targetTop, Math.max(0, maximumScrollY - bottomBuffer));

      window.scrollTo({ top: scrollTarget, behavior: "smooth" });
    } else if (onSectionNavigate) {
      onSectionNavigate(id);
    } else if (id === "main") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      return;
    }

    setActiveSection(id);
  };

  return (
    <header className={`header ${compact ? "header-compact" : ""} ${detail ? "header-detail" : ""}`}>
    {/* 실제 헤더 내용이 들어가는 영역 */}
      <div className="header-inner">

      {/* 왼쪽 로고 영역 */}
      <button type="button" className="logo" onClick={() => moveTo("main")}>
        MAIN
      </button>

      {/* 오른쪽 메뉴 영역 */}
      <nav className="nav">
        {navItems.map(({ id, label }) => (
          <button
            type="button"
            className={activeSection === id ? "active" : ""}
            onClick={() => moveTo(id)}
            key={id}
          >
            {label}
          </button>
        ))}
      </nav>

      </div>
    </header>
  );
}

export default Header;
