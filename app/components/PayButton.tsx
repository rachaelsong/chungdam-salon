"use client";

export type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  // TODO: 결제 페이지 이동/결제 로직은 다음 단계에서 연결
  const onClick = () => {
    // 임시: 빌드 에러 제거용
    alert(`${planName} / ${amount.toLocaleString()}원 결제 연결 예정`);
  };

  return (
    <button type="button" className="cs-btn cs-btn-full" onClick={onClick}>
      {planName} 결제하기 ({amount.toLocaleString()}원)
    </button>
  );
}
