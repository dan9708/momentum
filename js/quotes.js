const quotes = [
  {
    quote: '때론 기회를 놓치는 것이 기회일 수 있다.',
    author:'- 영화 <벤자민 버튼의 시간은 거꾸로 간다> -'
  },
  {
    quote:'영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라!',
    author:'- 제임스턴 -'
  },
  {
    quote:'만족할 줄 아는 사람은 진정한 부자이고, 탐요스러운 사람은 진실로 가난한 사람이다.',
    author:'- 솔론 -'
  },
  {
    quote:'미래를 계획하는 일도 필요하지만 가장 중요한것은 오늘을 후회없이 사는 겁니다.',
    author:' - <비밀편지> 박근호 -'
  },
  {
    quote:'인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.',
    author:'- 벤 스타인 -'
  },
  {
    quote:'“지금이 최악”이라고 말 할 힘이 있다면 아직은 최악이 아니다.',
    author:'- 윌리엄 셰익스피어 -'
  },
  {
    quote:'인생은 자전거를 타는 것과 같다. 계속 페달을 밟는 한 넘어질 염려는 없다.',
    author:'- 클라우드 페퍼 -'
  },
  {
    quote:'당신을 가로막는 장애때문에 포기할 것인가, 반대로 그 장애를 넘어서기 위해 노력할 것인가는 당신의 선택할 문제이다.',
    author:'- 책<멈추지마 다시 꿈부터 써봐> 김수영 -'
  },
  {
    quote:'나 자신에게 더욱 집중하라. 언제나 나를 1순위에 두어라. 다른 이의 삶에 한 눈팔며 살기엔 내 인생이 너무 소중하다.',
    author:'- 익명 -'
  },
  {
    quote:'남의 말에 흔들리지 않는 자신감을 가진 당당한 여자가 되어라.',
    author:'- 힐러리 클린턴 -'
  }
]

const quote = document.querySelector('.quote span:first-child')
const author = document.querySelector('.quote span:last-child')

const todaysQuote= quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
