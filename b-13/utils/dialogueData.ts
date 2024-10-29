// utils/dialogueData.ts

export interface Dialogue {
    character: string;
    text: string;
    isPlayer?: boolean; // 플레이어 캐릭터인지 여부를 표시하는 속성
    options?: string[];
    nextScenes?: { [key: number]: number };
    background?: string; // 씬마다 한 번만 설정하면 유지됨
    characterImage?: string;
}

const dialogueData: Dialogue[][] = [
    // Prologue Scene
    [
        { character: '슈만', text: '${playerName}! 여기 있었네!', characterImage: '/images/schman.png', background:'/images/background-practice.jpg' },
        { character: '나', text: '앗, 슈만 선배! 무슨 일이예요?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '', text: '(슈만 선배는 나의 오랜 친구이자……같이 오래 합을 맞춰온 작곡가 선배이다.)', characterImage: '' },
        { character: '슈만', text: '아, 놀라게 했네. 미안 미안!', characterImage: '/images/schman.png' },
        { character: '슈만', text: '이번에 들어온 신입생 중에, 실력이 좋은 친구가 들어와서 말이야. 꽤나 재미있는 곡을 썼더라고.', characterImage: '/images/schman.png' },
        { character: '슈만', text: '듣는 내내 네가 들으면 좋아하겠다는 생각을 했어.', characterImage: '/images/schman.png' },
        { character: '슈만', text: '너에게 꼭 소개해주고 싶은데, 주말에 시간 괜찮지?', characterImage: '/images/schman.png' },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
    ],
    // 첫번째 선택지 (옷 고르기) Scene
    [
        { character: '', text: '(…벌써 몇 번째 거울을 보는 건지 모르겠다. 겨우 처음 보는 신입생과의 약속 하나 때문에…아니, 어쩌면……)', characterImage: '', background:'/images/background-mirror.jpg' },
        { character: '', text: '(어떤 옷을 입을까?)', characterImage: '' },
        // { character: '선택지', text: '- 선택지1: 슈만이 좋아하겠지?? 하는 옷\n- 선택지2: 사람 소개받을 때 입을만한 예의 갖춘 옷', image: '' },
        { 
            character: '선택지', 
            text: '- 선택지1: 슈만이 좋아하겠지?? 하는 옷\n- 선택지2: 사람 소개받을 때 입을만한 예의 갖춘 옷', 
            characterImage: '', 
            options: ['슈만이 좋아하겠지?? 하는 옷', '사람 소개받을 때 입을만한 예의 갖춘 옷'] 
        },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },  
    ],
    // 상황 설정 Scene
    [
        { character: '', text: '(약속 장소에 도착하자, 언제나처럼 미리 나를 기다리고 있는 슈만 선배가 보인다.)', characterImage: '', background:'/images/background-school.jpg' },
        { character: '나', text: '선배! 일찍 도착했네요!', characterImage: '/images/clara.png', isPlayer: true },
        { character: '', text: '(반갑게 인사를 하자, 선배가 환하게 웃으며 손을 흔들어 보인다.)', characterImage: '' },
        { character: '나', text: '요새 많이 바쁘지 않아요? 잘나가는 천재 작곡가님이 인정한 신인이라니, 궁금한데요?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '슈만', text: '에이, 운이 좋았다니까! 부끄럽게 길거리에서 자꾸 그렇게 부를 거야?', characterImage: '/images/schman.png' },
        { character: '나', text: '연주자도 아니고 작곡가가 월드투어라니, 그게 얼마나 대단한 일인데요!', characterImage: '/images/clara.png', isPlayer: true },
        { character: '슈만', text: '하하…고마워.', characterImage: '/images/schman.png' },
        { character: '슈만', text: '…미안해. 우리 같이 작업했는데, 나만…', characterImage: '/images/schman.png' },
        { character: '나', text: '미안하다는 말 그만 하라고 했죠! 선배는 경력이 있으니 스폰서가 생기는 게 당연한 거죠.', characterImage: '/images/clara.png', isPlayer: true },
        { character: '나', text: '뭐, 덕분에 저도 같이 이름 좀 날려서 이번에 단독 공연도 잡혔고…', characterImage: '/images/clara.png', isPlayer: true },
        { character: '슈만', text: '……', characterImage: '/images/schman.png' },
        { character: '', text: '(잠시 어색한 정적이 흘렀다.)', characterImage: '' },
        { character: '나', text: '…공연, 보러 못 오겠죠?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '슈만', text: '…잘 모르겠어. 한동안은 바쁠 것 같아. 어쩌면…', characterImage: '/images/schman.png' },
        { character: '슈만', text: '에이, 걱정 마! 꼭 보러 올 테니까!', characterImage: '/images/schman.png' },
        { character: '나', text: '누, 누가 무슨 걱정을 한다는 거예요! 제 공연 티켓 한 장이라도 더 팔려고 물어본 거거든요?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '슈만', text: '하하, 난 네가 보고 싶을 것 같은데. 조금 섭섭하네.', characterImage: '/images/schman.png' },
        { character: '나', text: '(부끄러워하는 일러)', characterImage: '/images/clara.png', isPlayer: true },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
    ],
    // 두번째 선택지 Scene
    [
        { character: '', text: '(똑똑!)', characterImage: '', background:'/images/background-practice.jpg' },
        { character: '', text: '(노크 소리에 우리는 고개를 돌렸고, 앳된 얼굴의 훤칠한 남자애가 연습실 창 밖에 미소를 띄고 서 있었다.)', characterImage: '' },
        { character: '슈만', text: '저 애가 내가 말한 그 친구야! 들어와!', characterImage: '/images/schman.png' },
        { character: '브람스', text: '브람스입니다. ${playerName} 선배님, 맞으시죠? 슈만 선배님께 이야기 많이 들었어요.', characterImage: '/images/brahms.png' },
        { character: '나', text: '어? 제 얘기를 했어요?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '브람스', text: '네, 모든 이야기에 선배 이름이 등장하던 걸요? 일류 작곡가 커플이라니, 정말 부러워요.', characterImage: '/images/brahms.png' },
        { character: '나', text: '…커플?', characterImage: '/images/clara.png', isPlayer: true },
        // { character: '선택지', text: '- 선택지1: 별 생각 없이 부인하는 선택지\n- 선택지2: 수줍어하는 선택지', image: '' },
        { 
            character: '선택지', 
            text: '- 선택지1: 별 생각 없이 부인하는 선택지\n- 선택지2: 수줍어하는 선택지', 
            characterImage: '', 
            options: ['별 생각 없이 부인하는 선택지', '수줍어하는 선택지'] 
        },
        { character: '슈만', text: '그, 그런 거 아니야…', characterImage: '/images/schman.png' },
        { character: '브람스', text: '앗, 죄송해요. 사이가 좋아 보여서 제 멋대로 그렇게 생각해버렸네요… (다행이다…)', characterImage: '/images/brahms.png' },
        { character: '나', text: '응?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '브람스', text: '아, 아닙니다!', characterImage: '/images/brahms.png' },
        { character: '', text: '(이상하다? 분명 뒤에 무슨 말을 한 것 같았는데?)', characterImage: '' },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
    ],
    // 세번째 선택지 Scene
    [
        { character: '', text: '(우리는 음악에 대한 견해가 비슷해 빠르게 친해질 수 있었고, 서로의 음악에 대해 이야기를 나누기도 하며 그 어느 때보다 즐거운 시간을 보냈다.)', characterImage: '', background:'/images/background-brahms.jpg' },
        { character: '', text: '(하지만 어느덧 시간이 지나, 슈만 선배가 월드투어를 떠났다.)', characterImage: '' },
        { character: '브람스', text: '…선배, 요새 기운이 없네요.', characterImage: '' },
        { character: '나', text: '…', characterImage: '', isPlayer: true },
        { character: '브람스', text: '…좋아하시는 거죠? 슈만 선배.', characterImage: '' },
        { character: '나', text: '…', characterImage: '', isPlayer: true },
        { character: '브람스', text: '……제가 선배 좋아하는 것도, 알죠?', characterImage: '' },
        { character: '나', text: '……', characterImage: '', isPlayer: true },
        { character: '브람스', text: '대답…해줄 수 있어요?', characterImage: '' },
        // { character: '선택지', text: '- 선택지1: 나도 네 음악이 좋아\n- 선택지2: 슈만 선배가 내 공연에 와줄까?\n- 선택지3: (답장하지 않는다)', image: '' },
        { 
            character: '선택지', 
            text: '- 선택지1: 나도 네 음악이 좋아\n- 선택지2: 슈만 선배가 내 공연에 와줄까?\n- 선택지3: (답장하지 않는다)', 
            characterImage: '', 
            options: ['나도 네 음악이 좋아', '슈만 선배가 내 공연에 와줄까?', '(답장하지 않는다)'] 
        },
        { character: '브람스', text: '…그냥, 선배 옆에는 제가 있다는 것만 잊지 말아줘요. 그걸로 충분해요. 더 이상 선배가 힘들어하지 않았으면 좋겠어요.', characterImage: '' },
        { character: '나', text: '…', characterImage: '', isPlayer: true },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
    ],
    // 공연 직전 Scene
    [
        { character: '', text: '(어느덧 나의 단독 공연날이다.)', characterImage: '', background:'/images/background-concert.jpg' },
        { character: '브람스', text: '최선을 다해 준비했잖아요! 떨지 말고, 파이팅!', characterImage: '/images/brahms.png' },
        { character: '나', text: '누가 떤다고 그래?', characterImage: '/images/clara.png', isPlayer: true },
        { character: '나', text: '…고마워. 많이 도와줘서. 나 혼자였으면 이렇게까지 못했을 거야.', characterImage: '/images/clara.png', isPlayer: true },
        { character: '나', text: '이제 무대 올라가봐야 할 것 같아. 꽃다발은 준비해 뒀지? 안 예쁘면 안 받아줄 거야!', characterImage: '/images/clara.png', isPlayer: true },
        { character: '브람스', text: '네? 하하, 이제 선배 답네요!', characterImage: '/images/brahms.png' },
        { character: '', text: '(나는 브람스를 뒤로하고 서둘러 무대를 향했다.)', characterImage: '' },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
    ],
    // 최종 선택지 Scene
    [
        { character: '', text: '(귀를 찌르는 박수소리와 함께 무대에 올랐다.)', characterImage: '', background:'/images/background-concert.jpg' },
        { character: '', text: '(눈부신 조명 사이로 맨 앞줄에 앉아 환한 미소를 띄고 박수를 치고 있는 브람스의 얼굴이 보인다.)', characterImage: '' },
        // { character: '화면전환', text: '(화면전환)', characterImage: '' },
        { character: '', text: '(어떻게 시간이 흘러간 것인지 기억조차 나지 않는다. 정신을 차려보니 나는 내 곡의 마지막 음을 누르고 있는 중이었다.)', characterImage: '', background: '/images/background-perform.jpg' },
        { character: '', text: '(잠시의 정적. 그리고 이내 머릿속이 아득해지는 박수갈채가 쏟아지기 시작했다. 나, 잘 해냈구나! 그제서야 내 입가엔 웃음이 돌아왔다.)', characterImage: '' },
        { character: '', text: '(인사를 하려 피아노 의자에서 일어나 관객석을 바라보는 순간, 나는 한 곳에 시선이 멈출 수밖에 없었다.)', characterImage: '' },
        { character: '나', text: '…슈만…선배…?', characterImage: '/images/clara.png', isPlayer: true, background:'/images/background-schmanSit.jpg' },
        { character: '', text: '(…어떻게? ……그는 분명 지금…)', characterImage: '' },
        { character: '', text: '(동시에 머릿속을 스치는 과거 그가 했던 말. “걱정 마! 꼭 보러 올 테니까!”)', characterImage: '', background:'/images/background-schmanBlur.jpg' },
        { character: '', text: '(설마? 그래서? 하지만, 이렇게 연락도 없이?)', characterImage: '' },
        { character: '', text: '(나는 나조차도 알 수 없는 감정들이 밀려옴에 표정을 숨길 수가 없어 박수갈채가 쏟아지는 동안 한참이나 깊게 고개를 숙이고 나서야 마음을 추스르고 얼굴을 들 수 있었다.)', characterImage: '', background: '/images/background-pianoBlur.jpg' },
        { character: '', text: '(하지만 나는 여전히 브람스와 슈만 선배, 둘 중 어느 곳을 바라봐야 할 지 알 수 없었다.)', characterImage: '' },
        { character: '', text: '(몇 번의 커튼콜이 이어졌음에도 끊이지 않는 긴 박수에 사람들이 외치는 앵콜 요청이 들려오기 시작했다.)', characterImage: '' },
        { character: '', text: '(사실, 나의 공연에 앵콜 요청까지 들어올 줄은 예상치 못해 준비해둔 곡이 따로 없다.)', characterImage: '' },
        { character: '', text: '(예상보다 반응이 훨씬 뜨거워 당황했던 것도 잠시, ‘내가 치고 싶은 곡을 치자.’ 라는 결론에 다다랐다.)', characterImage: '', background:'/images/background-piano.jpg' },
        { character: '', text: '(내가 치고 싶은 곡… 지금 내 머릿속에 떠오르는 곡…나는…)', characterImage: '' },
        // { character: '선택지', text: '- 선택지1: 슈만의 곡을 연주한다\n- 선택지2: 브람스의 곡을 연주한다\n- 선택지3: 나의 미발표 곡을 연주한다', image: '' },
        { character: '선택지', text: '내가 어떤 곡을 연주할까?', characterImage: '', options: ['슈만의 곡을 연주한다', '브람스의 곡을 연주한다', '나의 미발표 곡을 연주한다'], nextScenes: { 0: 7, 1: 8, 2: 9 } },

    ],
    // 각 엔딩은 선택에 따라 추가적으로 구현
   // 엔딩1: 슈만의 곡을 연주
   [
    { character: '', text: '내 오랜 친구이자 동료… 그리고…사랑하는 슈만 선배가 나를 위해 작곡했던 곡을 연주했다.', characterImage: '', background:'/images/background-perform.jpg' },
    { character: '', text: '연주가 끝나자마자 슈만 선배는 무대로 뛰어올라와 환히 웃으며 내게 꽃다발을 건넸다.', characterImage: '', background:'/images/background-ending1.jpg' },
    { character: '나', text: '바쁠 텐데…어떻게 온거예요?', characterImage: '/images/clara.png', isPlayer: true },
    { character: '슈만', text: '내가 온다고 했잖아.', characterImage: '/images/schman.png' },
    { character: '', text: '나는 왠지 모를 눈물이 흐르는 것을 느끼며 슈만 선배에게 안겨버리고 말았다. 스타 작곡가의 무대 난입에 사람들이 잠시 술렁였지만, 이내 다시금 더 큰 박수갈채가 이어진다.', characterImage: '' },
    { character: '슈만', text: '축하해. 네 음악, 정말 좋았어. 그리고…네가 너무 보고싶었어.', characterImage: '/images/schman.png' },
    { character: '나', text: '오랜만에 겨우 만났는데…겨우 그게 전부예요?', characterImage: '/images/clara.png', isPlayer: true },
    { character: '슈만', text: '뭐? …하하, 그래. 나, 네가 좋아. 너와 함께 있고 싶어. 이제 혼자 두지 않을게. 약속해.', characterImage: '/images/schman.png' },
    { character: '', text: '(무대 위에서 슈만을 반기며 나를 축하해주는 브람스까지 셋의 쓰리샷)', characterImage: '' },
],

// 엔딩2: 브람스의 곡을 연주
[
    { character: '', text: '내가 힘들어할 때, 혼자 있지 않도록 언제든 곁을 지켜주며 도와준 브람스를 떠올리며 연습실에서 그를 처음 만났을 때 그가 들려주었던 곡을 연주했다.', characterImage: '', background:'/images/background-perform.jpg' },
    { character: '', text: '생각해보니 바보 같아… 너도 많이 힘들 텐데 어째서 이렇게까지 나에게…', characterImage: '' },
    { character: '', text: '연주가 끝나자 브람스가 무대로 뛰어올라와 환히 웃으며 내게 꽃다발을 건넨다.', characterImage: '', background:'/images/background-ending2.jpg' },
    { character: '나', text: '하하, 예쁜 걸로 준비하라고 했더니, 정말 큰 걸로도 준비했네.', characterImage: '/images/clara.png', isPlayer: true },
    { character: '브람스', text: '당연하죠. 선배한테 주는 건데.', characterImage: '/images/brahms.png' },
    { character: '나', text: '좋아, 합격! 받아 줄게! …그리고, 네 마음도.', characterImage: '/images/clara.png', isPlayer: true },
    { character: '브람스', text: '네? 박수소리가 너무 커서 잘 안 들리는데, 한 번만 더 말해줄 수 있어요?', characterImage: '/images/brahms.png' },
    { character: '나', text: '너, 일부러 그러는 거지?', characterImage: '/images/clara.png', isPlayer: true },
    { character: '브람스', text: '안아도 돼요?', characterImage: '/images/brahms.png' },
    { character: '', text: '나는 웃으며 말없이 브람스에게 안겼다. 슈만이 연주장을 빠져나가는 모습을 얼핏 본 것도 같다.', characterImage: '' },
    { character: '', text: '그래, 이걸로 된거다. 모두가 각자의 길에서 행복하길.', characterImage: '', background:'/images/background-schmanBack.jpg' },
],

// 엔딩3: 나의 미발표 곡을 연주
[
    { character: '', text: '아직 완성되진 않았지만, 최근 쓰고 있던 나의 곡을 연주했다.', characterImage: '', background:'/images/background-perform.jpg' },
    { character: '', text: '모두 나의 음악을 들어주러 온 소중한 관객들이다. 그에 보답이 될 지는 모르겠지만. 한 곡이라도 더…', characterImage: '' },
    { character: '', text: '작곡을 마친 부분까지 연주를 마치고 멋쩍게 자리에서 일어나자, 전보다 더 큰 박수소리와 함성이 터져나왔다.', characterImage: '' },
    { character: '', text: '슈만과 브람스가 주는 꽃다발을 받고 나서도 나는 얼떨떨한 상태로 여러 차례 인사를 해야만 했다.', characterImage: '' },
    { character: '', text: '“안녕하세요, B-13 엔터테인먼트입니다. 잠시 얘기 좀 나누실 수 있을까요?”', characterImage:'', background:'/images/background-ending3.jpg' },
    { character: '', text: '“아뇨, 이쪽으로 먼저 모시고 싶은데요!”', characterImage: '' },
    { character: '', text: '“명함만이라도 받아 주시겠습니까!”', characterImage: '' },
    { character: '', text: '오랜만에 깜짝 등장한 나의 옛 동료 슈만, 그동안 함께 고생해준 내 친구 브람스… 그 둘과의 회포를 풀기도 전에 스카우트 제안을 위한 인파가 형성되어버렸다.', characterImage: '' },
    { character: '', text: '나는, 이 순간 그 누구보다 행복하다.', characterImage: '' },
],
];

export default dialogueData;
