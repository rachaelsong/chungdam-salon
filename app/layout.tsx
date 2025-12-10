// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "청담 살롱 하이엔드 점성술 리포트",
  description: "관계·커리어에 바로 적용되는 하이엔드 점성술 PDF 리포트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

