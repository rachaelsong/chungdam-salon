"use client";

type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  return (
    <button type="button">
      {planName} 결제 ({amount.toLocaleString()}원)
    </button>
  );
}
