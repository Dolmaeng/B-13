import type { Dialogue, RawScene } from '../types/dialogue';
import { DEFAULT_BACKGROUND } from './gameAssets';

/**
 * Expands raw script: background and characterImage inherit from the previous line until overridden.
 * Background also continues across scene boundaries so branch targets do not need to repeat the last bg.
 */
export function resolveRawScenes(scenes: RawScene[], initialBackground: string = DEFAULT_BACKGROUND): Dialogue[][] {
    let carryBackground = initialBackground;
    return scenes.map((scene) => {
        let carryCharacterImage = '';
        return scene.lines.map((line) => {
            if (line.background !== undefined) carryBackground = line.background;
            if (line.characterImage !== undefined) carryCharacterImage = line.characterImage;
            return {
                character: line.character,
                text: line.text,
                ...(line.isPlayer !== undefined && { isPlayer: line.isPlayer }),
                ...(line.options !== undefined && { options: line.options }),
                ...(line.nextScenes !== undefined && { nextScenes: line.nextScenes }),
                background: carryBackground,
                characterImage: carryCharacterImage,
                ...(line.textStyle !== undefined && { textStyle: line.textStyle }),
            };
        });
    });
}

/** Every scene index that appears as a branch target in nextScenes (엔딩 씬들). */
export function collectEndingSceneIndexes(scenes: Dialogue[][]): number[] {
    const targets = new Set<number>();
    for (const scene of scenes) {
        for (const line of scene) {
            if (!line.nextScenes) continue;
            for (const idx of Object.values(line.nextScenes)) targets.add(idx);
        }
    }
    return [...targets].sort((a, b) => a - b);
}

/** 최종 곡 선택 한 줄의 위치 (nextScenes가 세 엔딩을 가리키는 대사). */
export function findFinalSongChoicePosition(scenes: Dialogue[][]): { sceneIndex: number; dialogueIndex: number } {
    const endings = new Set(collectEndingSceneIndexes(scenes));
    if (endings.size === 0) return { sceneIndex: 0, dialogueIndex: 0 };

    for (let si = 0; si < scenes.length; si++) {
        for (let di = 0; di < scenes[si].length; di++) {
            const ns = scenes[si][di].nextScenes;
            if (!ns) continue;
            const targets = new Set(Object.values(ns));
            if (targets.size === endings.size && [...endings].every((e) => targets.has(e))) {
                return { sceneIndex: si, dialogueIndex: di };
            }
        }
    }

    const lastStoryScene = Math.max(0, scenes.length - endings.size - 1);
    return {
        sceneIndex: lastStoryScene,
        dialogueIndex: Math.max(0, scenes[lastStoryScene].length - 1),
    };
}
