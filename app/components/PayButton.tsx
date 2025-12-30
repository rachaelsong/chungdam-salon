"use client";

export type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  return (
    <button type="button" className="cs-btn cs-btn-full">
      {planName} 결제하기 ({amount.toLocaleString()}원)
    </button>
  );
}
