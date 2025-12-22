export default function TermsPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>이용약관</h1>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>제1조 (목적)</h2>
      <p>
        본 약관은 피치피치팜(이하 “회사”)이 제공하는 개인 맞춤형 디지털 콘텐츠 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>제2조 (서비스 내용)</h2>
      <p>
        회사는 이용자가 결제 후 제공하는 정보에 기반하여 개인 맞춤형 디지털 리포트(PDF)를 제작·제공합니다. 본 서비스는 실물 배송이 없는 디지털 콘텐츠입니다.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>제3조 (서비스 제공 시점)</h2>
      <p>서비스는 결제 완료 및 정보 입력 완료 후, 영업일 기준 3~5일 이내 이메일을 통해 제공됩니다.</p>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>제4조 (환불 및 취소)</h2>
      <ol>
        <li>본 서비스는 개인 맞춤 제작되는 디지털 콘텐츠 특성상, 제작이 시작된 이후에는 환불이 불가합니다.</li>
        <li>단, 제작 착수 전 결제 취소 요청 시 전액 환불이 가능합니다.</li>
        <li>리포트 전달 완료 후에는 어떠한 사유로도 환불이 불가합니다.</li>
      </ol>

      <h2 style={{ fontSize: 18, marginTop: 24 }}>제5조 (면책)</h2>
      <p>
        본 서비스는 정보 제공 및 자기 이해 목적의 콘텐츠로, 법적·의료적·재정적 판단의 근거로 사용될 수 없습니다.
      </p>
    </main>
  );
}

