import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import dialogueData, { endingSceneIndexes, finalSongChoicePosition } from '../utils/dialogueData';
import type { Dialogue } from '../types/dialogue';
import styles from '../styles/components/PlayScene.module.css';
import { characterImageSrc, DEFAULT_BACKGROUND } from '../utils/gameAssets';

function collectPreloadUrls(current: Dialogue, next?: Dialogue): string[] {
    const urls = new Set<string>();
    if (current.background) urls.add(current.background);
    if (next?.background) urls.add(next.background);
    if (current.characterImage) urls.add(characterImageSrc(current.characterImage));
    if (next?.characterImage) urls.add(characterImageSrc(next.characterImage));
    return [...urls];
}

export function useVisualNovelPlaythrough(playerName: string) {
    const router = useRouter();
    const [sceneIndex, setSceneIndex] = useState(0);
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [background, setBackground] = useState(DEFAULT_BACKGROUND);
    const [fadeClass, setFadeClass] = useState('');
    const [currentBackground, setCurrentBackground] = useState('');

    const currentScene = dialogueData[sceneIndex];
    const currentDialogue = currentScene[dialogueIndex];

    const replacePlayerName = useCallback(
        (text: string) => text.replace(/\$\{playerName\}/g, playerName),
        [playerName],
    );

    useEffect(() => {
        setFadeClass(styles.fadeOut);
        const timeoutId = setTimeout(() => {
            setBackground(currentScene[0].background || DEFAULT_BACKGROUND);
            setFadeClass(styles.fadeIn);
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [sceneIndex, currentScene]);

    useEffect(() => {
        if (currentDialogue.background !== currentBackground) {
            setCurrentBackground(currentDialogue.background);
            setBackground(currentDialogue.background);
        }
    }, [currentDialogue, currentBackground]);

    useEffect(() => {
        const fullText = replacePlayerName(currentDialogue.text);
        setDisplayedText('');
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 30);
        return () => clearInterval(intervalId);
    }, [currentDialogue, replacePlayerName]);

    useEffect(() => {
        const nextLine = currentScene[dialogueIndex + 1];
        for (const url of collectPreloadUrls(currentDialogue, nextLine)) {
            const img = new Image();
            img.src = url;
        }
    }, [sceneIndex, dialogueIndex, currentDialogue, currentScene]);

    const handleNext = useCallback(() => {
        if (dialogueIndex === -1) return;

        if (dialogueIndex < currentScene.length - 1) {
            setDialogueIndex((i) => i + 1);
        } else if (sceneIndex < dialogueData.length - 1) {
            if (endingSceneIndexes.includes(sceneIndex)) {
                router.push('/result');
            } else {
                setSceneIndex((s) => s + 1);
                setDialogueIndex(0);
            }
        } else {
            router.push('/result');
        }
    }, [dialogueIndex, currentScene.length, sceneIndex, router]);

    const handlePrevious = useCallback(() => {
        if (sceneIndex === 0 && dialogueIndex === 0) {
            router.push('/');
        } else if (dialogueIndex > 0) {
            setDialogueIndex((i) => i - 1);
        } else if (sceneIndex > 0) {
            if (endingSceneIndexes.includes(sceneIndex) && dialogueIndex === 0) {
                setSceneIndex(finalSongChoicePosition.sceneIndex);
                setDialogueIndex(finalSongChoicePosition.dialogueIndex);
            } else {
                setSceneIndex((s) => s - 1);
                setDialogueIndex(dialogueData[sceneIndex - 1].length - 1);
            }
        }
    }, [sceneIndex, dialogueIndex, router]);

    const handleOptionSelect = useCallback(
        (optionIndex: number) => {
            const ns = currentDialogue.nextScenes;
            if (ns && ns[optionIndex] !== undefined) {
                const nextSceneIndex = ns[optionIndex];
                if (nextSceneIndex >= 0 && nextSceneIndex < dialogueData.length) {
                    setSceneIndex(nextSceneIndex);
                    setDialogueIndex(0);
                    return;
                }
                console.error('Invalid scene index:', nextSceneIndex);
                alert('오류가 발생했습니다. 선택한 씬으로 이동할 수 없습니다.');
            } else {
                handleNext();
            }
        },
        [currentDialogue, handleNext],
    );

    const isChoice = currentDialogue.character === '선택지' && Boolean(currentDialogue.options);

    const characterImageSrcResolved = useMemo(() => {
        const raw = currentDialogue.characterImage;
        return raw ? characterImageSrc(raw) : null;
    }, [currentDialogue.characterImage]);

    return {
        background,
        fadeClass,
        displayedText,
        currentDialogue,
        characterImageSrc: characterImageSrcResolved,
        isChoice,
        handleNext,
        handlePrevious,
        handleOptionSelect,
        goHome: () => router.push('/'),
        playerName,
    };
}
