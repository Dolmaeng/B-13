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
            {/* 로고 이미지 추가 */}
            <img src="/images/logo.png" alt="작연시 로고" className={styles.logo} />
            
            <input
                type="text"
                placeholder="당신의 이름은?"
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
