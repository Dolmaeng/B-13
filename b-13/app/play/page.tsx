// app/play/page.tsx
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PlayScene from '../../components/PlayScene';

const PlayPageContent = () => {
    const searchParams = useSearchParams();
    const playerName = searchParams.get('name') || 'Player';

    return <PlayScene playerName={playerName} />;
}

export default function PlayPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PlayPageContent />
        </Suspense>
    );
}
