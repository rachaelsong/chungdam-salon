import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}

        <footer style={{ padding: "24px 16px", fontSize: 14, opacity: 0.8 }}>
          <div style={{ maxWidth: 960, margin: "0 auto", lineHeight: 1.6 }}>
            <div>상호명: 피치피치팜</div>
            <div>대표자명: 최혜경</div>
            <div>사업자등록번호: 603-25-86377</div>
            <div>통신판매업 신고번호: 2025-서울영등포-1864</div>
            <div>사업장 주소: 서울특별시 영등포구 여의서로 43, 614동 A90호</div>
            <div>유선번호: 010-2628-5986</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

