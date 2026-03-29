'use client';

import { useVisualNovelPlaythrough } from '../hooks/useVisualNovelPlaythrough';
import styles from '../styles/components/PlayScene.module.css';

interface PlaySceneProps {
    playerName: string;
}

const PlayScene: React.FC<PlaySceneProps> = ({ playerName }) => {
    const {
        background,
        fadeClass,
        displayedText,
        currentDialogue,
        characterImageSrc,
        isChoice,
        handleNext,
        handlePrevious,
        handleOptionSelect,
        goHome,
        playerName: name,
    } = useVisualNovelPlaythrough(playerName);

    return (
        <div className={styles.container}>
            <div className={`${styles.background} ${fadeClass}`} style={{ backgroundImage: `url(${background})` }} />
            <button type="button" className={styles.restartButton} onClick={goHome}>
                <img src="/images/restart-icon.svg" alt="다시하기" />
            </button>
            {characterImageSrc && (
                <div className={styles.characterImage}>
                    <img src={characterImageSrc} alt={currentDialogue.character} />
                </div>
            )}
            {isChoice ? (
                <div className={styles.choiceContainer}>
                    {currentDialogue.options?.map((option, index) => (
                        <button key={option} type="button" className={styles.choiceButton} onClick={() => handleOptionSelect(index)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <div className={styles.dialogueBox}>
                    <div className={styles.dialogueContent}>
                        <div className={styles.characterName}>{currentDialogue.character === '나' ? name : currentDialogue.character}</div>
                        <div className={styles.dialogueTextContainer}>
                            <div className={`${styles.dialogueText} ${currentDialogue.textStyle ? styles[currentDialogue.textStyle] : ''}`}>{displayedText}</div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <button type="button" className={styles.button} onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>
                            이전
                        </button>
                        <button type="button" className={styles.button} onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                            다음
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayScene;
