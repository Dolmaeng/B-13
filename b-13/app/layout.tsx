// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: '작곡가 연애 시뮬레이션!',
    description: '유명 작곡가들과 두근두근 데이트!!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </head>
                <Analytics />
            <body>{children}</body>
        </html>
    );
}
