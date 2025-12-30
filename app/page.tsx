// app/page.tsx
import React from "react";
import PayButton from "@/components/PayButton";

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
                  {/* 결제 버튼 */}
                  <PayButton planName="라이트" amount={29900} />
                </div>
              </div>

              {/* 스탠다드 (대표) */}
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
                  {/* 결제 버튼 */}
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
                  {/* 결제 버튼 */}
                  <PayButton planName="프리미엄" amount={79900} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 진행 절차 */}
        <section className="cs-section cs-process" id="process">
          <div className="cs-container">
            <h2 className="cs-section-title">서비스 진행 절차</h2>
            <p className="cs-section-sub">
              모든 과정은 온라인으로 진행되며, <strong>완성 리포트는 PDF 파일로 전달</strong>됩니다.
            </p>

            <ol className="cs-steps">
              <li>
                <h3>01. 의뢰 신청</h3>
                <p>
                  아래 문의 채널(카카오톡/이메일/크몽 등)로{" "}
                  <strong>원하는 패키지 + 간단한 고민</strong>을 남겨주세요.
                </p>
              </li>
              <li>
                <h3>02. 정보 전달 & 결제</h3>
                <p>
                  생년월일·출생 시간·출생 도시 등 기본 정보와
                  <br />
                  현재 가장 중요한 고민(최대 2개)을 정리해 주시면 됩니다.
                  <br />
                  결제는 페이지 상단 패키지 섹션에서 신용카드로 진행 가능합니다.
                </p>
              </li>
              <li>
                <h3>03. 리포트 제작</h3>
                <p>
                  차트 분석 및 리포트 작성에 <strong>평균 5~7일</strong> 정도 소요됩니다.
                  <br />
                  (대기 인원/스케줄에 따라 변동 가능)
                </p>
              </li>
              <li>
                <h3>04. PDF 전달</h3>
                <p>
                  완성된 리포트를 PDF로 전달드리며,
                  <br />
                  <strong>본인이 소장하고 반복해서 볼 수 있는 가이드북</strong>이 됩니다.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="cs-section cs-faq" id="faq">
          <div className="cs-container">
            <h2 className="cs-section-title">자주 묻는 질문</h2>

            <div className="cs-faq-list">
              <details>
                <summary>Q. 사주랑 뭐가 다른가요?</summary>
                <p>
                  동양 사주 대신, <strong>서양 점성술(서양식 차트)</strong>을 기반으로 합니다.
                  <br />
                  "무조건적인 운세"보다는{" "}
                  <strong>내 성향과 패턴을 이해하고 선택을 돕는 도구</strong>에 가깝습니다.
                </p>
              </details>
              <details>
                <summary>Q. 점집처럼 "정확히 맞나요"?</summary>
                <p>
                  청담 살롱 리포트는 "당신의 패턴을 예리하게 짚어주는 상담 요약본"에 더 가깝습니다.
                  <br />
                  <strong>절대적인 예언</strong>보다는{" "}
                  <strong>현실적인 방향성·행동 가이드</strong>에 초점을 둡니다.
                </p>
              </details>
              <details>
                <summary>Q. 출생 시간을 모르면 의뢰가 불가능한가요?</summary>
                <p>
                  출생 시간을 모를 경우, 해석 가능한 부분과 어려운 부분이 나뉩니다.
                  <br />
                  가능한 범위 내에서 진행은 가능하지만{" "}
                  <strong>정확도가 떨어질 수 있는 지점</strong>은 미리 안내드립니다.
                </p>
              </details>
              <details>
                <summary>Q. 커플/상대 차트도 같이 볼 수 있나요?</summary>
                <p>
                  현재 페이지의 패키지는 <strong>개인 리포트 기준</strong>입니다.
                  <br />
                  커플/시너스트리 리포트는 별도 옵션으로 준비 중이며,
                  <br />
                  문의 주시면 가능한 범위와 금액을 안내드릴게요.
                </p>
              </details>
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

      {/* 푸터 (기존 + 사업자정보 합쳐서 1개로만) */}
      <footer className="cs-footer" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="cs-container cs-footer-inner" style={{ display: "grid", gap: "12px" }}>
          <div className="cs-footer-left">
            <div className="cs-logo">청담 살롱</div>
            <p>High-end Astrology Report · Chungdam Salon</p>
          </div>

          <div className="cs-footer-right">
            <p>문의: youvean1210@gmail.com</p>
            <p>© {new Date().getFullYear()} Chungdam Salon. All rights reserved.</p>
          </div>

          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", lineHeight: "1.7" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 14px" }}>
              <div>상호명: 피치피치팜</div>
              <div>대표자명: 최혜경</div>
              <div>사업자등록번호: 603-25-86377</div>
              <div>통신판매업 신고번호: 2025-서울영등포-1864</div>
              <div style={{ gridColumn: "1 / -1" }}>
                사업장 주소: 서울특별시 영등포구 여의서로 43, 614동 A90호
              </div>
              <div>유선번호: 010-2628-5986</div>
              <div>이메일: youvean1210@gmail.com</div>
            </div>

            <div style={{ marginTop: "10px", fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>
              본 서비스는 무형 디지털 콘텐츠(PDF 리포트) 제공 서비스입니다. 결제 확인 후 최대 7영업일 이내 이메일로 발송됩니다.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
