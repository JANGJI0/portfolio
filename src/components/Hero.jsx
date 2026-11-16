import "../styles/Hero.css";

function Hero({ scrollProgress }) {
  return (
    <div className="hero-scroll-area">

      {/*
        스크롤 중 비디오가 고정되는 영역
      */}
      <div className="hero-sticky">

        <div
          className="hero"
          style={{
            /*
              기존 비디오 축소 애니메이션 유지

              0 → 좌우 여백 없음
              1 → 좌우 각각 130px
            */
            "--hero-progress": scrollProgress,
          }}
        >
          <div className="hero-placeholder">
            <span>VIDEO AREA</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;
