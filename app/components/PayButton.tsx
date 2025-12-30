"use client";

type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  const onClick = () => {
    alert(`${planName} / ${amount.toLocaleString()}원 결제 로직 연결 필요`);
  };

  return (
    <button type="button" onClick={onClick}>
      {planName} 결제 ({amount.toLocaleString()}원)
    </button>
  );
}
