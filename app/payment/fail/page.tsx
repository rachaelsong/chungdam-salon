export default function PaymentFailPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 16px" }}>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>결제가 실패했습니다 ❌</h1>
      <p style={{ marginTop: 12, opacity: 0.85 }}>
        카드/한도/인증 문제로 결제가 완료되지 않았을 수 있습니다.
      </p>
      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ textDecoration: "underline" }}>메인으로 돌아가기</a>
      </div>
    </main>
  );
}
