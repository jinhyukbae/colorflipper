const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
let hexColor = '#';
for(let i = 0;i<6;i++){
  hexColor += hex[getRandomNumber()];
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// btn.addEventListener('click', function(){
//let hexColor = '#';
//for(let i = 0;i<6;i++){
//  hexColor += hex[3];}
// 클릭 하면 백그라운드 컬러가 #333333인 값이 나온다 let i = 0;i<6;i++ 6이라 숫자 6개
// hex[3]이라 333333 hexcolor 를 #으로 지정해서 #333333
// function getRandomNumber 지정
//return Math.floor(Math.random() * hex.length); 숫자를 랜덤으로 헥스의 길이 0~ f 까지 순환
// hex[getRandomNumber()]; 넣으면 0~f까지 숫자가 랜덤으로 순환
