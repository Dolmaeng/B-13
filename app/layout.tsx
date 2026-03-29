// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: '작곡가 연애 시뮬레이션!',
    description: '유명 작곡가들과 두근두근 데이트!!',
};

/** Vercel 등에서 정적 산출물만 잘못 매칭되는 경우 완화 (필요 없으면 제거 가능) */
export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
