//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

let staticChooseNumber;

//폭탄 섞기
const boxShuffle = () => {
  if(!shuffleFlag) {
    msg.innerHTML = "섞였습니다. 게임하세요.";
    shuffleFlag = true;
    num.sort(() => Math.random() - 0.5);
    console.log(num);

    // 새 게임으로 초기화
    cnt = 0;            // 박스 선택 개수 기록 초기화
    selNum.length = 0;  // 박스 선택 순서 기록 배열 초기화
    for(let i = 1; i <= 9; i++){  // 이미지 초기화
      const chooseImage = document.querySelector(`#box${i}`);
      chooseImage.innerHTML = "";
    }
  }
  else {
    msg.innerHTML = "이미 섞었으니 게임이나 하십시오.";
  }
};

const show = (chooseNumber) => {
  if(selNum.indexOf(chooseNumber) != -1) return;
  const chooseImage = document.querySelector(`#box${chooseNumber}`);
  console.log(chooseImage);
  console.log(msg);
  if(shuffleFlag){
    selNum.push(chooseNumber);

    console.log(selNum);
  
    if(num[chooseNumber-1]) {
      msg.innerHTML = "게임 실패ㅋㅋ";
      shuffleFlag = false;
      chooseImage.innerHTML = `<img src="./images/boom.png">`;
    }
    else {
      if(++cnt >= 8) {
        msg.innerHTML = `★ 게임 성공 ★`;
        for(let i = 1; i <= 9; i++){
          document.querySelector(`#box${i}`).innerHTML = `<img src="./images/hart.png">`;
        }
        shuffleFlag = false;
      }
      else msg.innerHTML = `오ㅋㅋ ${cnt}번째 성공. ${8 - cnt}번만 더 맞추면 게임 성공!!`;
      chooseImage.innerHTML = `<img src="./images/hart.png">`;
    }
  }
  else {
    msg.innerHTML = "셔플하세요.";
  }  
};


/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
  //define DOM Object
  const msg = document.querySelector("#msg");
});