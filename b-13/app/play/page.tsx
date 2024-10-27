// app/play/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import PlayScene from '../../components/PlayScene';

export default function PlayPage() {
    const searchParams = useSearchParams();
    const playerName = searchParams.get('name') || 'Player';

    return <PlayScene playerName={playerName} />;
}
