'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// KG이니시스 타입 선언
declare global {
  interface Window {
    INIStdPay: any;
  }
}

const packages = {
  light: {
    name: '라이트 리포트',
    price: 29900,
    features: [
      '개인 차트 기반 기본 성향 요약',
      '현재 1년 간 주요 흐름 요약',
      '연애 / 관계 패턴 핵심 포인트',
      'PDF 약 8~10p 내외'
    ]
  },
  standard: {
    name: '스탠다드 리포트',
    price: 49900,
    features: [
      '라이트 리포트 전 내용 포함',
      '연애/결혼 & 커리어 축 심층 분석',
      '현재 고민 2개까지 집중 분석',
      '월별 키 타이밍 · 주의 구간 정리',
      'PDF 약 14~18p 내외'
    ]
  },
  premium: {
    name: '프리미엄 리포트',
    price: 79900,
    features: [
      '스탠다드 전 내용 포함',
      '관계 / 커리어 중 한 축 깊게 확장',
      '당신만의 사용설명서 추가',
      '맞춤 문장 템플릿 포함',
      'PDF 약 18~22p 내외'
    ]
  }
};

// KG이니시스 설정
const INICIS_CONFIG = {
  mid: 'MOI5322258',
  signKey: 'ckZFdE9SWWpIN0lnUHlZMU9lUzh6UT09',
  channelKey: 'channel-key-6130cdbf-0645-4f43-8b88-b435c8d6f9ad'
};

export default function Payment() {
  const router = useRouter();
  const { package: packageType = 'standard' } = router.query;
  
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const selectedPackage = packages[packageType as keyof typeof packages] || packages.standard;

  // KG이니시스 스크립트 로드
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://stdpay.inicis.com/stdjs/INIStdPay.js';
    script.charset = 'UTF-8';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 전화번호 포맷팅
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setBuyerPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 전화번호 검증
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!phoneRegex.test(buyerPhone)) {
      alert('올바른 휴대폰 번호를 입력해주세요.');
      return;
    }

    if (!isScriptLoaded || !window.INIStdPay) {
      alert('결제 시스템을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // 주문번호 생성
    const orderNumber = 'ORDER' + new Date().getTime();

    // KG이니시스 결제 요청
    requestPayment(orderNumber);
  };

  const requestPayment = (orderNumber: string) => {
    const currentUrl = window.location.origin;

    window.INIStdPay.pay({
      PayMethod: 'Card',
      MID: INICIS_CONFIG.mid,
      Moid: orderNumber,
      Amt: selectedPackage.price,
      GoodsName: selectedPackage.name,
      BuyerName: buyerName,
      BuyerEmail: buyerEmail,
      BuyerTel: buyerPhone.replace(/-/g, ''),
      ReturnUrl: currentUrl + '/payment-result',
      ResultYN: 'Y',
      Currency: 'WON',
      Charset: 'UTF-8',
      CardQuota: '00:03',
      acceptmethod: 'below1000',
      useescrow: 'N',
      onSuccess: function() {
        router.push(`/payment-success?orderNumber=${orderNumber}`);
      },
      onError: function(error: any) {
        alert('결제 중 오류가 발생했습니다: ' + error.message);
        router.push(`/payment-fail?reason=${encodeURIComponent(error.message)}`);
      }
    });
  };

  return (
    <>
      <Head>
        <title>결제하기 - 청담 살롱</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] p-5">
        <div className="max-w-[500px] mx-auto my-10 bg-white rounded-[20px] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-10 text-center">
            <h1 className="text-[28px] mb-2.5 font-semibold">청담 살롱</h1>
            <p className="text-sm opacity-90">하이엔드 점성술 리포트 결제</p>
          </div>

          {/* Content */}
          <div className="p-10">
            {/* Package Info */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 mb-8 border-2 border-[#e9ecef]">
              <div className="text-2xl font-bold text-[#667eea] mb-4">
                {selectedPackage.name}
              </div>
              <div className="text-4xl font-extrabold text-[#212529] mb-5">
                {selectedPackage.price.toLocaleString()}원{' '}
                <span className="text-lg font-normal text-[#6c757d]">/ 1회</span>
              </div>
              <ul className="mt-5 list-none">
                {selectedPackage.features.map((feature, index) => (
                  <li
                    key={index}
                    className="py-2 pl-6 relative text-[#495057] text-sm before:content-['✓'] before:absolute before:left-0 before:text-[#667eea] before:font-bold"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-[#212529] text-sm">
                  이름 <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="홍길동"
                  required
                  className="w-full p-3.5 border-2 border-[#e9ecef] rounded-lg text-[15px] transition-all focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-[#212529] text-sm">
                  이메일 <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full p-3.5 border-2 border-[#e9ecef] rounded-lg text-[15px] transition-all focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-[#212529] text-sm">
                  휴대폰 번호 <span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="tel"
                  value={buyerPhone}
                  onChange={handlePhoneChange}
                  placeholder="010-1234-5678"
                  required
                  className="w-full p-3.5 border-2 border-[#e9ecef] rounded-lg text-[15px] transition-all focus:outline-none focus:border-[#667eea] focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
                />
              </div>

              {/* Payment Info */}
              <div className="bg-[#fff3cd] border border-[#ffc107] rounded-lg p-4 mb-6 text-[13px] text-[#856404]">
                <strong className="block mb-2">⚠️ 카드사 안내</strong>
                점성술 서비스 특성상{' '}
                <strong>현대카드, 삼성카드는 사용이 불가</strong>합니다.
                <div className="bg-[#f8d7da] border border-[#f5c2c7] rounded-lg p-3 mt-4 text-xs text-[#842029]">
                  <strong>사용 가능:</strong> BC카드, 신한카드, 국민카드, 하나카드, 롯데카드 등
                  <br />
                  <strong>사용 불가:</strong> 현대카드, 삼성카드
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-[18px] bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white border-none rounded-[10px] text-lg font-bold cursor-pointer transition-all shadow-[0_4px_15px_rgba(102,126,234,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(102,126,234,0.5)] active:translate-y-0"
              >
                결제하기
              </button>
            </form>

            <a
              href="/"
              className="block text-center mt-5 text-[#6c757d] no-underline text-sm transition-colors hover:text-[#667eea]"
            >
              ← 메인으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
