// app/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/components/Intro.module.css';

export default function Home() {
    const [playerName, setPlayerName] = useState<string>('');
    const router = useRouter();

    const startGame = () => {
        if (playerName) {
            router.push(`/play?name=${playerName}`);
        }
    };

    return (
        <div
            className={styles.container}
            style={{ backgroundImage: 'url(/images/background-practice.jpg)' }}
        >
            <h1 className={styles.title}>작.연.시.</h1>
            <input
                type="text"
                placeholder="이름을 입력해 주세요"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className={styles.nameInput}
            />
            <button onClick={startGame} className={styles.playButton}>
                시작하기
            </button>
        </div>
    );
}