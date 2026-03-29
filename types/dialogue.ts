/**
 * Resolved line — what the UI consumes (every line has explicit bg + sprite after resolve).
 */
export interface Dialogue {
    character: string;
    text: string;
    isPlayer?: boolean;
    options?: string[];
    nextScenes?: Record<number, number>;
    background: string;
    characterImage: string;
    textStyle?: string;
}

/**
 * 저작용 한 줄. background / characterImage를 빼면 직전 줄(같은 씬 또는 이전 씬 마지막) 값이 이어집니다.
 * 화자(캐릭터)가 바뀌는 줄에서는 반드시 characterImage를 다시 지정하세요. 생략하면 이전 화자 스프라이트가 남습니다.
 */
export type RawDialogueLine = {
    character: string;
    text: string;
    isPlayer?: boolean;
    options?: string[];
    nextScenes?: Record<number, number>;
    background?: string;
    characterImage?: string;
    textStyle?: string;
};

export type RawScene = {
    lines: RawDialogueLine[];
};
