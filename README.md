# paintJS

painting border made by vanilla JS

바닐라 JS로 게임 만들기 Vanilla JS | #1 1 Styles part One
reset.css : css에 기본으로 설정된 값들을 초기화 하는것
https://meyerweb.com/eric/tools/css/reset/

canvas : HTML에 있는것 이름 그대로 그림그리는 것

바닐라 JS로 게임 만들기 Vanilla JS | #1 2 Styles part Two

색을 누를수 있는 버튼들을 만들어주고 fill, save 버튼을 만들어주고
브러쉬의 크기를 조절할 수 있는 range를 따로 만들어 줌
range는 input으로 만드는 것으로
<input type="Range" id="jsRange" min="0.1" max="5" value="2.5" step="0.1"/>
type을 range, min은 최소값이고, max는 최대값, value는 default일 경우 설정하는 값이고, step은 한번 조절할때마다 얼마나 조절되는지를 정하는것임

바닐라 JS로 게임 만들기 Vanilla JS | #2 3 Changing Color
Array.from(object) : object로부터 array를 만듬
array로 만들었으니 당연히 여기에 forEach를 쓸수 있음 forEach로 이벤트를 추가해줌

바닐라 JS로 게임 만들기 Vanilla JS | #2 4 Brush Size
range에 이벤트를 input으로 주고(html형식이 input이니까) 함수로 event.target.value에 있는 값을 ctx.lineWidth에 넣어준다. 끗

바닐라 JS로 게임 만들기 Vanilla JS | #2 5 Filling Mode
우선 버튼 fill을 클릭시 paint/fill로 나올수 있게끔 바꾼다. 어떤 모드인지를 정하기 위해 boolean값으로 filling을 만들어주고 false로 초기화
false일 시 true로 만들어 주면서 innerText를 바꿔준다.
그리고 화면을 채워야하니 filStyle과 fillRect를 사용할 것인데 fillStyle은 색상이고 Rect는 직접 채우는 함수이다.
fillStyle은 strokeStyle이랑 같게 만들어주고 색상 고르는거 선택시 같이 바뀌게끔 만들어준다.
canvas클릭 이벤트를 만들어주고 filling값이 true일 경우 fillRect()함수를 실행시키면 끗

바닐라 JS로 게임 만들기 Vanilla JS | #2 6 Saving the Image
save는 마우스 우클릭할때 contextmenu로 이루어지는데 이 이벤트를 preventDefault하고
save를 누를 경우 따로 이미지를 저장할 수 있게끔 한다.
canvas에는 toDataURL이라는 함수가 있는데 이걸 사용하면 데이터로 이어지는 url을 반환할 수 있다.
그리고 link를 만들어주기 위해서 html에 a를 만들어주고 a의 href는 image를 저장한 url을 넣어주고
link를 다운로드 할 수 있게끔 만들어준다. 그리고 자동으로 click되게끔 함수에 넣어주면
save버튼을 눌렀을때 자동으로 이미지를 저장하게 된다.
