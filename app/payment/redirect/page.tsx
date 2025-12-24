export default function PaymentRedirectPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 16px" }}>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>결제 진행 중...</h1>
      <p style={{ marginTop: 12, opacity: 0.85 }}>
        결제창 처리가 완료되면 자동으로 이동합니다. 창을 닫지 말아주세요.
      </p>
      <p style={{ marginTop: 16, opacity: 0.7 }}>
        만약 화면이 멈춘다면, 결제 완료/실패 안내를 확인 후 다시 시도해주세요.
      </p>
    </main>
  );
}

