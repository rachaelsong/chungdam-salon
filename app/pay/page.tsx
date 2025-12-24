"use client";

import { useEffect } from "react";

export default function PayPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.portone.io/v2/browser-sdk.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const requestPay = async () => {
    // PortOne SDK 로드 대기
    // @ts-ignore
    if (!window.PortOne) {
      alert("결제 모듈 로딩 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    // @ts-ignore
    window.PortOne.requestPayment({
      storeId: "store-f78854d5-2e3f-4458-8998-97eac436ebce",
      paymentId: "test-payment-" + Date.now(),
      orderName: "청담 살롱 하이엔드 점성술 리포트 (심사용)",
      totalAmount: 1000, // 심사용 소액
      currency: "KRW",
      channelKey: "channel-key-6130cdbf-0645-4f43-8b88-b435c8d6f9ad",
      payMethod: "CARD",
      customer: {
        fullName: "심사테스트",
        phoneNumber: "01012345678",
        email: "test@test.com",
      },
      redirectUrl: "https://chungdamsalon.shop/pay/result",
    });
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>결제 테스트 페이지</h1>
      <p>KG이니시스 카드결제 심사용 페이지입니다.</p>

      <button
        onClick={requestPay}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        신용카드 결제하기
      </button>
    </main>
  );
}
