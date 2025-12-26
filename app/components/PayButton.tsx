"use client";

import React from "react";

export default function PayButton() {
  return (
    <button
      type="button"
      onClick={() => alert("PayButton OK (다음 단계: PortOne 결제창 연결)")}
      style={{
        padding: "12px 16px",
        borderRadius: 10,
        border: "1px solid #111",
        fontWeight: 700,
      }}
    >
      신용카드 결제하기
    </button>
  );
}

