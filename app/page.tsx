"use client";

import { useState } from 'react'; //상태 관리 훅
import { useRouter } from 'next/navigation'; //페이지 이동 관리 훅
import styles from '../styles/components/Intro.module.css'; //스타일 CSS 모듈

// Home 컴포넌트 정의 (Next.js의 기본 페이지 컴포넌트)
export default function Home() {

    //플레이어 이름 저장 상태 변수 선언
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
