/* 배열 선언 */
let arr = [];
let arr2 = new Array();
 

/* 배열 추가 삭제 :뒤에서 */
arr.push("🍕");
arr.push("🍗🍖");
arr.push("🥩");
console.log(arr);
arr.pop();
console.log(arr);
 
/* 배열 추가 삭제 :앞에서 */
arr.unshift("😋");
arr.unshift("😋");
console.log(arr);
arr.shift();
console.log(arr);
  

/* 배열 순회1 - for */
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

/* 배열 순회2 - for of */
for(let item of arr) console.log(item);

 
/* 배열의 length 속성*/
console.log(arr.length);
arr.length = 1;         // 배열.length property값을 수정하면 배열의 크기를 강제로 줄인다.
console.log(arr.length);
console.log(arr);

// ★★★★★
//배열 비우기
arr.length = 0;   // JS 특유의 문법. Length를 0으로 조정함으로 배열을 비움.
 

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;
let ss = String(arr);
console.log(ss);

 
/* 문자열 split하면 배열반환*/
let ssarr = ss.split(",");
console.log(ssarr);
 
// ★★★★★
/* 배열 정렬 */
let num = [1,3,5,2,4];
num.sort( (a, b) => { return a - b });
console.log(num);

// ★★★★★
/* 배열 섞기*/
num.sort( () => Math.random() - 0.5 );
console.log(num);
 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

// ★★★★★
/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union = [...setA, ...setB];
console.log(setA);
console.log(setB);
console.log(union);

//교집합
//let intersection = setA.filter( (item) => { setB.includes(item) }); 얘가 Error인 이유 서술. 중괄호여부, 중괄호-return 관계 서술.
let intersection = setA.filter( (item) => setB.includes(item) );
// setA에 필터를 걸어 새 배열을 생성한다. 조건은 setB의 포함요소(조건: item)
console.log(intersection);

let setA2 = setA.map( (item) => item * 2 );
// 

//차집합
//let difference = setA.filter( (item) => { !setB.includes(item) });
let difference = setA.filter( (item) => !setB.includes(item));
console.log(difference);

//진짜 합집합
union = [...difference, ...setB];
console.log(union);
