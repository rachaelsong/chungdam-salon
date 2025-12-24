export default function PaymentSuccessPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 16px" }}>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>결제가 완료되었습니다 ✅</h1>
      <p style={{ marginTop: 12, opacity: 0.85 }}>
        주문 확인 후 리포트 제작/전달이 진행됩니다.
      </p>
      <div style={{ marginTop: 24 }}>
        <a href="/" style={{ textDecoration: "underline" }}>메인으로 돌아가기</a>
      </div>
    </main>
  );
}
