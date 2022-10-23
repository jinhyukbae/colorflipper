const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
 // 태그에 있는 id 속성을 사용하여 해당 태그에 접근하여 하고 싶은 작업을 할 때 쓰는 함수
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
// get random number between 0 - 3 colors 값에 0 green 3 #f15025를 랜덤으로 얻겠다
  const randomNumber = getRandomNumber();
 console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
// textcontent 텍스트를 추가하는 프로퍼티 innertext랑 다른 점은 textcontent는 여백 포함 모두 가져옴
});

function getRandomNumber() {
return Math.floor(Math.random() * colors.length);
}
// ex)  const num = Math.floor(Math.random() * (max - min + 1)) + min; math.floor math.random 조합하 두경계 사이
//조합하여 두경계 사이 임의의 정수를 반환
