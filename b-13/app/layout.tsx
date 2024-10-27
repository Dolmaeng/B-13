// app/layout.tsx

import '../styles/globals.css';

export const metadata = {
    title: 'Composer Dating Sim',
    description: 'A dating simulation game with composers',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
