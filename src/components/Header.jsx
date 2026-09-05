function Header() {
  return (
    <header className="header">
    {/* 실제 헤더 내용이 들어가는 영역 */}
      <div className="header-inner">

      {/* 왼쪽 로고 영역 */}
      <div className="logo">
        JANGJI0
      </div>

      {/* 오른쪽 메뉴 영역 */}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>

      </div>
    </header>
  );
}

export default Header;