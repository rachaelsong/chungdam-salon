import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">
        {children}

        {/* 사업자정보 Footer */}
        <footer className="mt-24 border-t border-white/10 py-8 text-sm text-white/70">
          <div className="mx-auto max-w-5xl px-4 space-y-1">
            <div>상호명: 피치피치팜</div>
            <div>대표자명: 최혜경</div>
            <div>사업자등록번호: 603-25-86377</div>
            <div>통신판매업 신고번호: 2025-서울영등포-1864</div>
            <div>사업장 주소: 서울특별시 영등포구 여의서로 43, 614동 A90호</div>
            <div>유선번호: 010-2628-5986</div>
          </div>
        </footer>\
        <div style={{ marginTop: 12 }}>
  <a href="/terms" style={{ marginRight: 12 }}>이용약관</a>
  <a href="/privacy" style={{ marginRight: 12 }}>개인정보처리방침</a>
  <a href="/refund">환불정책</a>
</div>


      </body>
    </html>
  );
}
