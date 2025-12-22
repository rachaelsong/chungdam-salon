export default function RefundPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>환불정책</h1>

      <p>본 상품은 개인 맞춤형 디지털 콘텐츠(PDF)입니다.</p>

      <ul style={{ marginTop: 12 }}>
        <li>제작 착수 전: 전액 환불 가능</li>
        <li>제작 착수 후: 환불 불가</li>
        <li>리포트 전달 완료 후: 환불 불가</li>
      </ul>

      <p style={{ marginTop: 16 }}>
        자세한 내용은 <a href="/terms">이용약관</a>을 따릅니다.
      </p>
    </main>
  );
}

