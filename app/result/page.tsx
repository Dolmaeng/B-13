
// app/result/page.tsx
"use client"; // 이 지시어를 추가합니다

import { useRouter } from 'next/navigation';
import styles from '../../styles/Result.module.css';

const Result: React.FC = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.resultText}>
                클라라와 로베르트 슈만은 19세기 가장 유명한 음악가 부부이다. {'\n'}
                뛰어난 음악 재능을 가지고 있던 브람스는 로베르트 슈만의 눈에 들어 제자가 된다. {'\n'}
                이내 세 사람은 서로 음악적 영향을 주고받는 동료였을 뿐만 아니라 가족과 같은 관계까지 발전했다. {'\n'}
                하지만 브람스는 자신의 스승의 부인인 클라라 슈만을 사랑하게 된다. {'\n'}
                세 사람은 서로의 마음을 눈치챈 상태였지만, 그들의 의리와 우정은 생각보다 돈독했다. {'\n'}
                병마로 일찍 세상을 떠난 로베르트 슈만의 자리를 대신해 브람스가 평생을 독신으로 클라라에게 헌신하면서도 서로를 존중하는 태도를 잃지 않았다. {'\n'}
                세 사람은 각자의 삶 끝까지 서로를 의지하고 함께했다. {'\n'}

                </p>
                <div className={styles.qrSection}>
                    <p className={styles.relatedText}>관련 원고 읽어보기</p>
                    <img src="/images/qr-code.png" alt="QR 코드" className={styles.qrImage} />
                    <p className={styles.projectText}>[B-13] 줄 수 있는 게, 이 노래밖에 없다</p>
                </div>
                <button className={styles.homeButton} onClick={() => router.push('/')}>
                    홈으로 돌아가기
                </button>
            </div>
        </div>
    );
};

export default Result;
