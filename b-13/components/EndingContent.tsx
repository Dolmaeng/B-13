// components/EndingContent.tsx
import Link from 'next/link';
import styles from '../styles/components/EndingContent.module.css';

const EndingContent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div
                className={styles.endingBackground}
                style={{ backgroundImage: 'url(/images/ending-background.jpg)' }}
            >
                <h2>End of the Game</h2>
                <p>This is the story of what happened after your journey.</p>
                <Link href="/">
                    <button className={styles.replayButton}>Replay</button>
                </Link>
                <a href="https://more-details.com" target="_blank" className={styles.link}>
                    More details
                </a>
            </div>
        </div>
    );
};

export default EndingContent;
