type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  // TODO: 기존 결제 로직이 있으면 여기/아래에 유지
  return (
    <button type="button">
      {planName} 결제 ({amount.toLocaleString()}원)
    </button>
  );
}
