"use client";

import PayButton from "./components/PayButton";

export default function Home() {
  return (
    <div className="cs-page">
      {/* 헤더 */}
      <header className="cs-header">
        <div className="cs-container cs-header-inner">
          <div className="cs-logo">청담 살롱</div>
          <nav className="cs-nav">
            <a href="#packages">패키지</a>
            <a href="#process">진행 과정</a>
            <a href="#faq">FAQ</a>
            <a href="#cta">문의하기</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 */}
        <section className="cs-hero" id="top">
          <div className="cs-hero-overlay" />
          <div className="cs-container cs-hero-grid">
            <div className="cs-hero-text">
              <p className="cs-pill">하이엔드 1:1 점성술 PDF 리포트</p>
              <h1>
                청담 살롱에서만 돌던
                <br />
                <span>"관계 · 커리어" 리포트</span>가
                <br />
                이제 당신에게도 열립니다.
              </h1>
              <p className="cs-hero-sub">
                한 번의 별자리 해석이 아니라,
                <br />
                실제 연애·결혼·이직 고민에 바로 적용되는
                <strong> 고급 상담 리포트</strong>입니다.
              </p>
              <div className="cs-hero-actions">
                <a href="#packages" className="cs-btn cs-btn-primary">
                  패키지 및 가격 보기
                </a>
                <a href="#cta" className="cs-btn cs-btn-outline">
                  상담/의뢰 방법 보기
                </a>
              </div>
              <div className="cs-hero-meta">
                <span>· 실제 고객 고민 기반 커스텀 리포트</span>
                <span>· 연애/관계 + 커리어 방향성까지 한 번에</span>
              </div>
            </div>

            <aside className="cs-hero-card">
              <div className="cs-hero-card-inner">
                <h2>청담 살롱 리포트 샘플</h2>
                <p>
                  • 실제 관계 패턴과 갈등 포인트를
                  <br />
                  &nbsp;&nbsp;점성술 언어로 정리
                  <br />
                  • "어떻게 말하고 행동해야 하는지"
                  <br />
                  &nbsp;&nbsp;구체적인 가이드
                  <br />
                  • 2026년 주요 타이밍 및
                  <br />
                  &nbsp;&nbsp;주의해야 할 포인트 정리
                </p>
                <div className="cs-hero-tag">
                  PDF 12~18p 분량 · 개인 맞춤 리포트
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* 왜 청담 살롱인가 */}
        <section className="cs-section cs-why">
          <div className="cs-container">
            <h2 className="cs-section-title">왜, 청담 살롱 리포트여야 할까요?</h2>
            <p className="cs-section-sub">
              단순한 별자리 운세가 아니라{" "}
              <strong>"지금 내 상황에 바로 꽂히는 상담 요약본"</strong>을 목표로 합니다.
            </p>
            <div className="cs-grid-3">
              <div className="cs-card">
                <h3>01. 현실에 바로 적용되는 리포트</h3>
                <p>
                  "언제 좋은 인연 온다"가 아니라,
                  <br />
                  <strong>내가 관계에서 반복하는 패턴</strong>과
                  <br />
                  "그래서 어떻게 행동해야 하는지"에 집중합니다.
                </p>
              </div>
              <div className="cs-card">
                <h3>02. 관계 · 커리어를 함께 본 구조</h3>
                <p>
                  연애와 일은 따로 놀지 않습니다.
                  <br />
                  내 차트에서 <strong>관계와 커리어 축</strong>이
                  <br />
                  어떻게 연결되는지 함께 읽어드립니다.
                </p>
              </div>
              <div className="cs-card">
                <h3>03. 청담 스타일의 감도 높은 편집</h3>
                <p>
                  내용뿐 아니라{" "}
                  <strong>PDF 자체가 하나의 오브제</strong>처럼 남도록
                  <br />
                  레이아웃·컬러·카피까지 신경 쓴 리포트입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 패키지 섹션 */}
        <section className="cs-section cs-packages" id="packages">
          <div className="cs-container">
            <h2 className="cs-section-title">패키지 & 가격</h2>
            <p className="cs-section-sub">
              크몽/자체몰 오픈 기념, <strong>한정 기간 프로모션가</strong>로 제공됩니다.
            </p>

            <div className="cs-packages-grid">
              {/* 라이트 */}
              <div className="cs-package-card">
                <div className="cs-package-header">
                  <span className="cs-package-label">Light</span>
                  <h3>라이트 리포트</h3>
                  <p className="cs-price">
                    29,900<span className="cs-price-unit">원</span>
                  </p>
                </div>
                <ul className="cs-package-list">
                  <li>개인 차트 기반 기본 성향 요약</li>
                  <li>현재 1년 간 주요 흐름 요약</li>
                  <li>연애 / 관계 패턴 핵심 포인트</li>
                  <li>PDF 약 8~10p 내외</li>
                </ul>
                <div className="cs-package-footer">
                  <p className="cs-package-note">
                    "먼저 나에 대한 전체적인 그림을 보고 싶을 때"
                  </p>
                  <PayButton planName="라이트" amount={29900} />
                </div>
              </div>

              {/* 스탠다드 */}
              <div className="cs-package-card cs-package-featured">
                <div className="cs-package-header">
                  <span className="cs-package-label">Most Picked</span>
                  <h3>스탠다드 리포트</h3>
                  <p className="cs-price">
                    49,900<span className="cs-price-unit">원</span>
                  </p>
                </div>
                <ul className="cs-package-list">
                  <li>라이트 리포트 전 내용 포함</li>
                  <li>연애/결혼 & 커리어 축 심층 분석</li>
                  <li>현재 고민 2개까지 집중 분석</li>
                  <li>월별 키 타이밍 · 주의 구간 정리 (12개월)</li>
                  <li>PDF 약 14~18p 내외</li>
                </ul>
                <div className="cs-package-footer">
                  <p className="cs-package-note">
                    "관계 & 커리어를 함께 정리하고 싶은 분께 추천"
                  </p>
                  <PayButton planName="스탠다드" amount={49900} />
                </div>
              </div>

              {/* 프리미엄 */}
              <div className="cs-package-card">
                <div className="cs-package-header">
                  <span className="cs-package-label">Premium</span>
                  <h3>프리미엄 리포트</h3>
                  <p className="cs-price">
                    79,900<span className="cs-price-unit">원</span>
                  </p>
                </div>
                <ul className="cs-package-list">
                  <li>스탠다드 전 내용 포함</li>
                  <li>관계 / 커리어 중 한 축을 더 깊게 확장 분석</li>
                  <li>"당신만의 사용설명서" 형식 추가 섹션</li>
                  <li>맞춤 문장 템플릿(연락·대화 가이드) 일부 포함</li>
                  <li>PDF 약 18~22p 내외</li>
                </ul>
                <div className="cs-package-footer">
                  <p className="cs-package-note">
                    "중요한 타이밍을 앞두고 깊이 있게 정리하고 싶을 때"
                  </p>
                  <PayButton planName="프리미엄" amount={79900} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs-section cs-cta" id="cta">
          <div className="cs-container cs-cta-inner">
            <div>
              <h2>지금, 나에게 가장 필요한 한 문장을 찾고 있다면</h2>
              <p>
                청담 살롱 리포트는 "그냥 재미로 보는 운세"가 아니라,
                <br />
                <strong>내가 지금 어디에 서 있는지, 어디까지 갈 수 있는지</strong>를
                조용히 정리해 주는
                <br />
                하이엔드 PDF 리포트입니다.
              </p>
              <p className="cs-cta-sub">
                아래 채널 중 편한 곳으로 패키지명과 간단한 고민을 남겨주세요.
              </p>

              <div className="cs-cta-buttons">
                <a
                  href="https://open.kakao.com/o/gDdomP6h"
                  target="_blank"
                  rel="noreferrer"
                  className="cs-btn cs-btn-primary"
                >
                  카카오톡 오픈채팅 문의
                </a>

                <a href="mailto:youvean1210@gmail.com" className="cs-btn cs-btn-outline">
                  이메일로 의뢰하기
                </a>
              </div>

              <p className="cs-cta-note">
                * 결제는 상단 패키지 섹션에서 신용카드로 진행 가능합니다.
                <br />
                * 결제 후 진행 방식은 1:1로 안내드려요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
Fix PayButton props and import
