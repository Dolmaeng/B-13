// components/PlayScene.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dialogueData, { Dialogue } from '../utils/dialogueData';
import styles from '../styles/components/PlayScene.module.css';

interface PlaySceneProps {
    playerName: string;
}

const PlayScene: React.FC<PlaySceneProps> = ({ playerName }) => {
    const [sceneIndex, setSceneIndex] = useState<number>(0);
    const [dialogueIndex, setDialogueIndex] = useState<number>(0);
    const router = useRouter(); // useRouter 훅 사용

    const currentScene = dialogueData[sceneIndex];
    const currentDialogue: Dialogue = currentScene[dialogueIndex];

    // 플레이어 이름을 대사에 삽입하는 함수
    const replacePlayerName = (text: string) => {
        return text.replace('${playerName}', playerName);
    };

    const handleNext = () => {
        if (dialogueIndex < currentScene.length - 1) {
            setDialogueIndex(dialogueIndex + 1);
        } else if (sceneIndex < dialogueData.length - 1) {
            setSceneIndex(sceneIndex + 1);
            setDialogueIndex(0);
        }
    };

    const handlePrevious = () => {
        // 첫 번째 씬의 첫 번째 대사일 경우 홈으로 이동
        if (sceneIndex === 0 && dialogueIndex === 0) {
            router.push('/'); // 홈으로 이동
        } else if (dialogueIndex > 0) {
            setDialogueIndex(dialogueIndex - 1);
        } else if (sceneIndex > 0) {
            setSceneIndex(sceneIndex - 1);
            setDialogueIndex(dialogueData[sceneIndex - 1].length - 1);
        }
    };

    return (
        <div className={styles.container} style={{ backgroundImage: 'url(/images/background.jpeg)' }} onClick={handleNext}>
            <div className={styles.characterImage}>
                {currentDialogue.image && <img src={currentDialogue.image} alt={currentDialogue.character} />}
            </div>
            <div className={styles.dialogueBox}>
                <div className={styles.characterName}>{currentDialogue.character === '나' ? playerName : currentDialogue.character}</div>
                <div className={styles.dialogueText}>{replacePlayerName(currentDialogue.text)}</div>
                <div className={styles.controls}>
                    <button className={styles.button} onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>이전</button>
                    <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleNext(); }}>다음</button>
                </div>
            </div>
        </div>
    );
};

export default PlayScene;
