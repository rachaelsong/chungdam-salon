type PayButtonProps = {
  planName: string;
  amount: number;
};

export default function PayButton({ planName, amount }: PayButtonProps) {
  return (
    <button>
      {planName} / {amount.toLocaleString()}원 결제
    </button>
  );
}
