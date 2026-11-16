import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about" data-reveal>
      <h1 className="about-main-title" data-text="ABOUT">ABOUT</h1>
      <div className="about-quote">
        <h2>“ 헤맨 땅이 내 땅이다 ”</h2>
        <p>직접 헤매고 익힌 길은 결국 나만의 자산이 된다.</p>
      </div>
      <p className="about-description">
        남들보다 조금 느릴 수는 있지만, 그만큼 꼼꼼하게 살핍니다.
        다른 분야에서 쌓은 다양한 경험을 바탕으로 문제를 이해하고,
        성실하게 한 걸음씩 밟아가며 배움을 나의 지식으로 만들어왔습니다.
        서비스의 구조와 흐름을 이해하는 백엔드 개발자로 성장하고 있습니다.
      </p>
    </section>
  );
}

export default About;
