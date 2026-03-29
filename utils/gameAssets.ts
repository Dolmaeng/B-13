export const DEFAULT_BACKGROUND = '/images/default-background.webp';

/** Character layers historically used .jpeg; runtime prefers web where applicable. */
export function characterImageSrc(path: string): string {
    return path.replace(/\.jpeg$/i, '.webp');
}
