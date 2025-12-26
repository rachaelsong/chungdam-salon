"use client";

import { requestPayment } from "@portone/browser-sdk";

type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  const onPay = async () => {
    try {
      const storeId = process.env.NEXT_PUBLIC_PORTONE_STORE_ID;
      const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY;

      if (!storeId) throw new Error("NEXT_PUBLIC_PORTONE_STORE_ID가 없습니다.");
      if (!channelKey) throw new Error("NEXT_PUBLIC_PORTONE_CHANNEL_KEY가 없습니다.");

      const paymentId = `chungdam_${Date.now()}`;

      await requestPayment({
        storeId,
        channelKey,
        paymentId,
        orderName: `청담 살롱 하이엔드 점성술 리포트 - ${planName}`,
        totalAmount: amount,
        currency: "KRW",
        payMethod: "CARD",
        redirectUrl: `${window.location.origin}/payment/redirect`,
      });
    } catch (e: any) {
      console.error(e);
      alert(e?.message ?? "결제 호출 중 오류가 발생했습니다.");
    }
  };

  return (
    <button
      onClick={onPay}
      style={{
        width: "100%",
        padding: "14px 16px",
        borderRadius: 14,
        fontWeight: 800,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(140,96,255,0.9)",
        cursor: "pointer",
      }}
    >
      신용카드로 결제하기
    </button>
  );
}

