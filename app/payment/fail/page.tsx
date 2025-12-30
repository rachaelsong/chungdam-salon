import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PaymentFail() {
  const router = useRouter();
  const { reason } = router.query;
  const [errorReason, setErrorReason] = useState('알 수 없는 오류가 발생했습니다.');

  useEffect(() => {
    if (reason) {
      setErrorReason(decodeURIComponent(reason as string));
    }
  }, [reason]);

  return (
    <>
      <Head>
        <title>결제 실패 - 청담 살롱</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center p-5">
        <div className="max-w-[500px] bg-white rounded-[20px] shadow-2xl overflow-hidden text-center">
          {/* Fail Icon */}
          <div className="bg-gradient-to-br from-[#dc3545] to-[#c82333] p-12">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 mx-auto stroke-white fill-none stroke-[4] [stroke-linecap:round] [stroke-linejoin:round]"
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
              <line x1="35" y1="35" x2="65" y2="65" stroke="white" strokeWidth="5" />
              <line x1="65" y1="35" x2="35" y2="65" stroke="white" strokeWidth="5" />
            </svg>
          </div>

          {/* Content */}
          <div className="p-10">
            <h1 className="text-[28px] text-[#212529] mb-4 font-bold">
              결제에 실패했습니다
            </h1>
            <p className="text-[#6c757d] text-[15px] leading-relaxed mb-8">
              결제 처리 중 문제가 발생했습니다.
              <br />
              아래 내용을 확인하신 후 다시 시도해 주세요.
            </p>

            {/* Error Box */}
            <div className="bg-[#f8d7da] border border-[#f5c2c7] rounded-xl p-5 mb-8 text-left">
              <div className="text-[#842029] font-semibold text-sm mb-2.5">
                실패 사유
              </div>
              <div className="text-[#842029] text-sm leading-relaxed">
                {errorReason}
              </div>
            </div>

            {/* Common Reasons */}
            <div className="bg-[#fff3cd] border border-[#ffc107] rounded-[10px] p-5 mb-6 text-left">
              <h3 className="text-[#856404] text-base mb-4 font-semibold">
                💡 자주 발생하는 원인
              </h3>
              <ul className="text-[#856404] text-sm leading-relaxed pl-5 list-disc">
                <li className="mb-2">
                  <strong className="text-[#dc3545]">현대카드, 삼성카드 사용</strong> - 점성술
                  서비스는 해당 카드사에서 결제가 불가합니다
                </li>
                <li className="mb-2">
                  <strong className="text-[#dc3545]">카드 한도 초과</strong> - 일일/월간
                  결제 한도를 확인해 주세요
                </li>
                <li className="mb-2">
                  <strong className="text-[#dc3545]">비밀번호 오류</strong> - 카드
                  비밀번호를 정확히 입력했는지 확인해 주세요
                </li>
                <li className="mb-2">
                  <strong className="text-[#dc3545]">해외 결제 차단</strong> - 카드사에
                  해외 결제가 차단되어 있을 수 있습니다
                </li>
                <li className="mb-2">
                  <strong className="text-[#dc3545]">결제 취소</strong> - 결제 창을
                  중간에 닫으셨나요?
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => router.back()}
                className="flex-1 py-4 px-5 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-[10px] font-semibold transition-all shadow-[0_4px_15px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(102,126,234,0.5)] cursor-pointer text-[15px]"
              >
                다시 시도하기
              </button>
              <a
                href="/"
                className="flex-1 py-4 px-5 bg-white text-[#667eea] border-2 border-[#667eea] rounded-[10px] font-semibold no-underline hover:bg-[#f8f9fa] text-[15px] flex items-center justify-center"
              >
                메인으로
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-[#e9ecef] text-[#6c757d] text-[13px]">
              <strong>문제가 계속될 경우</strong>
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
              <br />
              <br />
              <small>
                또는 다른 카드로 시도해 보시거나, 카카오톡으로 직접 문의 주시면
                <br />
                계좌이체 등 다른 결제 방법을 안내해 드리겠습니다.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
