"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface PayButtonProps {
  planName: string;
  amount: number;
}

export default function PayButton({ planName, amount }: PayButtonProps) {
  const router = useRouter();

  const packageMap: { [key: string]: string } = {
    라이트: "light",
    스탠다드: "standard",
    프리미엄: "premium",
  };

  const handleClick = () => {
    const packageType = packageMap[planName];
    if (packageType) {
      router.push(`/payment?package=${packageType}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        width: "100%",
        padding: "12px 16px",
        borderRadius: 10,
        border: "1px solid #111",
        fontWeight: 700,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        cursor: "pointer",
      }}
    >
      {planName} 결제하기
    </button>
  );
}
