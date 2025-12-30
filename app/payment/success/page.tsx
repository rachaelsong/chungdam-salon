import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PaymentSuccess() {
  const router = useRouter();
  const { orderNumber } = router.query;
  const [paymentDate, setPaymentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const dateString =
      now.getFullYear() +
      '년 ' +
      (now.getMonth() + 1) +
      '월 ' +
      now.getDate() +
      '일 ' +
      now.getHours().toString().padStart(2, '0') +
      ':' +
      now.getMinutes().toString().padStart(2, '0');
    setPaymentDate(dateString);
  }, []);

  return (
    <>
      <Head>
        <title>결제 완료 - 청담 살롱</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-5">
        <div className="max-w-[500px] bg-white rounded-[20px] shadow-2xl overflow-hidden text-center">
          {/* Success Icon */}
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-12">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 mx-auto stroke-white fill-none stroke-[2] [stroke-linecap:round] [stroke-linejoin:round] [animation:checkmark_0.8s_ease-in-out]"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="4"
                fill="none"
                opacity="0.3"
              />
              <polyline
                points="25,50 45,70 75,30"
                stroke="white"
                strokeWidth="5"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="p-10">
            <h1 className="text-[28px] text-[#212529] mb-4 font-bold">
              결제가 완료되었습니다! 🎉
            </h1>
            <p className="text-[#6c757d] text-[15px] leading-relaxed mb-8">
              청담 살롱 리포트를 선택해 주셔서 감사합니다.
              <br />
              입력하신 이메일로 결제 확인 메일이 발송됩니다.
            </p>

            {/* Info Box */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 mb-8 text-left">
              <div className="flex justify-between py-3 border-b border-[#e9ecef]">
                <span className="text-[#6c757d] text-sm">주문번호</span>
                <span className="text-[#212529] font-semibold text-sm">
                  {orderNumber || '-'}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-[#e9ecef]">
                <span className="text-[#6c757d] text-sm">결제일시</span>
                <span className="text-[#212529] font-semibold text-sm">
                  {paymentDate || '-'}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[#6c757d] text-sm">결제상태</span>
                <span className="text-[#28a745] font-semibold text-sm">완료</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-[#d1ecf1] border border-[#bee5eb] rounded-[10px] p-5 mb-6 text-left">
              <h3 className="text-[#0c5460] text-base mb-4 font-semibold">
                📝 다음 단계
              </h3>
              <ol className="text-[#0c5460] text-sm leading-relaxed pl-5 list-decimal">
                <li className="mb-2">
                  <strong>정보 전달:</strong> 카카오톡 또는 이메일로 출생 정보를 보내주세요
                </li>
                <li className="mb-2">
                  <strong>상담 내용:</strong> 현재 가장 중요한 고민(최대 2개)을 알려주세요
                </li>
                <li className="mb-2">
                  <strong>리포트 제작:</strong> 5~7일 내에 PDF 리포트가 완성됩니다
                </li>
                <li className="mb-2">
                  <strong>전달:</strong> 이메일로 완성된 리포트를 받아보세요
                </li>
              </ol>
            </div>

            <a
              href="/"
              className="inline-block py-4 px-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white no-underline rounded-[10px] font-semibold transition-all shadow-[0_4px_15px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(102,126,234,0.5)]"
            >
              메인으로 돌아가기
            </a>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-[#e9ecef] text-[#6c757d] text-[13px]">
              <strong>문의하기</strong>
              <br />
              카카오톡:{' '}
              <a
                href="https://open.kakao.com/o/gDdomP6h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#667eea] no-underline"
              >
                오픈채팅 바로가기
              </a>
              <br />
              이메일:{' '}
              <a
                href="mailto:youvean1210@gmail.com"
                className="text-[#667eea] no-underline"
              >
                youvean1210@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes checkmark {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </>
  );
}
