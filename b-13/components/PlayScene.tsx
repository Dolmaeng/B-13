import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dialogueData, { Dialogue } from '../utils/dialogueData';
import styles from '../styles/components/PlayScene.module.css';

interface PlaySceneProps {
    playerName: string;
}

const PlayScene: React.FC<PlaySceneProps> = ({ playerName }) => {
    const [sceneIndex, setSceneIndex] = useState<number>(0);
    const [dialogueIndex, setDialogueIndex] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<string>("");
    const [background, setBackground] = useState<string>('/images/default-background.webp');
    const [fadeClass, setFadeClass] = useState<string>(''); // 페이드 효과 제어 클래스
    const [isChoiceSelected, setIsChoiceSelected] = useState<boolean>(false);
    const [currentBackground, setCurrentBackground] = useState<string>('');
    const router = useRouter();

    const currentScene = dialogueData[sceneIndex];
    const currentDialogue: Dialogue = currentScene[dialogueIndex];
    const characterImage = currentDialogue.characterImage || null;

    const replacePlayerName = (text: string) => {
        return text.replace('${playerName}', playerName);
    };

    // 씬이 바뀔 때만 배경을 업데이트하고 페이드 효과 적용
    useEffect(() => {
        setFadeClass(styles.fadeOut); // 페이드아웃 시작
        const timeoutId = setTimeout(() => {
            setBackground(currentScene[0].background || '/images/default-background.webp');
            setFadeClass(styles.fadeIn); // 새로운 배경으로 페이드인
        }, 500); // 페이드아웃 후 배경 전환 대기 시간

        return () => clearTimeout(timeoutId);
    }, [sceneIndex]);

    // 대사마다 배경 업데이트 (동일 씬 내에서만)
    useEffect(() => {
        if (currentDialogue.background && currentDialogue.background !== currentBackground) {
            setCurrentBackground(currentDialogue.background);
            setBackground(currentDialogue.background);
        }
    }, [currentDialogue, currentBackground]);

    // 대사 텍스트 타이핑 애니메이션
    useEffect(() => {
        const fullText = replacePlayerName(currentDialogue.text);
        setDisplayedText("");
        let index = 0;

        const intervalId = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 10);

        return () => clearInterval(intervalId);
    }, [currentDialogue, playerName]);

    const handleNext = () => {
        if (dialogueIndex === -1) return;
    
        if (dialogueIndex < currentScene.length - 1) {
            setDialogueIndex(dialogueIndex + 1);
        } else if (sceneIndex < dialogueData.length - 1) {
            setSceneIndex(sceneIndex + 1);
            setDialogueIndex(0);
            setIsChoiceSelected(false); // 새로운 씬으로 넘어갈 때 선택 상태 초기화
        } else {
            // 마지막 씬이 끝나면 결과 페이지로 이동
            router.push('/result');
        }
    };

    const handlePrevious = () => {
        if (sceneIndex === 0 && dialogueIndex === 0) {
            router.push('/');
        } else if (dialogueIndex > 0) {
            setDialogueIndex(dialogueIndex - 1);
        } else if (sceneIndex > 0) {
            setSceneIndex(sceneIndex - 1);
            setDialogueIndex(dialogueData[sceneIndex - 1].length - 1);
        }
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (isChoiceSelected) return; // 이미 선택한 경우 처리 방지

        if (currentDialogue.nextScenes && currentDialogue.nextScenes[optionIndex] !== undefined) {
            const nextSceneIndex = currentDialogue.nextScenes[optionIndex];

            if (nextSceneIndex >= 0 && nextSceneIndex < dialogueData.length) {
                setSceneIndex(nextSceneIndex);
                setDialogueIndex(0);
                setIsChoiceSelected(true); // 선택 완료 표시
                return;
            } else {
                console.error("Invalid scene index:", nextSceneIndex);
                alert("오류가 발생했습니다. 선택한 씬으로 이동할 수 없습니다.");
            }
        } else {
            handleNext();
        }
    };

    const isChoice = currentDialogue.character === '선택지' && currentDialogue.options;

    return (
        <div className={styles.container}>
            <div 
                className={`${styles.background} ${fadeClass}`}
                style={{ backgroundImage: `url(${background})` }} 
            />
            <button className={styles.restartButton} onClick={() => router.push('/')}>
                <img src="/images/restart-icon.svg" alt="다시하기" />
            </button>
            {/* 캐릭터 이미지가 항상 표시되도록 설정 */}
            {characterImage && (
                <div className={styles.characterImage}>
                    <img src={characterImage.replace('.jpeg', '.webp')} alt={currentDialogue.character} />
                </div>
            )}
            {isChoice ? (
                <div className={styles.choiceContainer}>
                    {currentDialogue.options?.map((option, index) => (
                        <button 
                            key={index} 
                            className={styles.choiceButton} 
                            onClick={() => handleOptionSelect(index)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <div className={styles.dialogueBox}>
                    <div className={styles.dialogueContent}>
                        <div className={styles.characterName}>
                            {currentDialogue.character}
                        </div>
                        <div className={styles.dialogueTextContainer}>
                            <div className={styles.dialogueText}>{displayedText}</div>
                        </div>
                    </div>
                    <div className={styles.controls}>
                        <button className={styles.button} onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>이전</button>
                        <button className={styles.button} onClick={(e) => { e.stopPropagation(); handleNext(); }}>다음</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayScene;
