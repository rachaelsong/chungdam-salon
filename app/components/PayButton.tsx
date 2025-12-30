"use client";

import React from "react";

type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  const handleClick = async () => {
    // TODO: 여기에서 실제 결제 로직(이니시스/토스 등) 호출
    console.log("결제 요청:", { planName, amount });
  };

  return (
    <button type="button" className="cs-btn cs-btn-full" onClick={handleClick}>
      {planName} 결제하기 · {amount.toLocaleString()}원
    </button>
  );
}
