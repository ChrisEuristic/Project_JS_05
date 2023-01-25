# 부산대학교 K-Digital 2기
### Project_JS_05
* 폭탄 찾기 게임
  + Git URL : https://chriseuristic.github.io/Project_JS_05/
  + Firebase URL : https://boom-game-dc008.web.app

<br>

***

<br>

### 문자열 슬라이싱

```javascript
let w = s.substr(5, 10);  // =MID 함수와 동일.
w = s.substring(5, 10);   // 5번째부터 10번째까지 문자 return;
w = s.slice(-4);          // -4 위치로부터 마지막까지 return;
w = s.slice(4);           // 4 위치로부터 마지막까지 return;
```

<br>

### 배열 기본 메소드

```javascript
let arr = [];           // 배열 선언 방식1
let arr2 = new Array(); // 배열 선언 방식2 (1, 2번 모두 동일한 결과)

arr.push("Pizza");      // arr[0] 슬롯 추가 및 "Pizza" 대입. (Stack 방식)
arr.push("Chicken");    // arr[1] 슬롯 추가 및 "Chicken" 대입. (Stack 방식)
arr.pop();              // arr[1] 슬롯 삭제. (Stack 방식)
arr.unshift("Melon");   // arr[0]~[n-1] 슬롯을 한칸씩 뒤로 밀고 [0] 슬롯 추가, "Melon" 대입.
arr.shift();            // arr[0] 슬롯 삭제 및 한칸씩 앞으로 당김.

arr.length = 1;         // 배열.length 프로퍼티를 직접 수정할 경우 해당 배열 크기를 강제로 조절. 0 대입시 비워버림.

let ss = String(arr);   // 배열 arr을 문자열로 반환하여 ss에 대입.
```

<br>

### 배열 정렬

```javascript
let num = [1,3,5,2,4];
num.sort( (a,b) => { return a - b });     // sort 메소드의 파라미터는 콜백함수로. return 값이 양수면 오름차순, 음수면 내림차순.
num.sort( (a,b) => Math.random() - 0.5 ); // 무작위 정렬.
```

<br>

### 집합

```javascript
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];
let union = [...setA, ...setB];   // [...arr1, ...arr2] 방식은 2개 이상의 배열을 결합한다.
console.log(setA);    // 1,2,3,4,5
console.log(setB);    // 4,5,6,7,8
console.log(union);   // 1,2,3,4,5,4,5,6,7,8

// 교집합
let intersection = setA.filter( (item) => setB.includes(item) );  // .filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환.
// setA에 필터를 걸어 새 배열을 생성한다. 조건은 setB의 포함요소(조건: item)
console.log(intersection);  // 4,5

// 차집합
let difference = setA.filter( (item) => !setB.includes(item) );
console.log(difference);    // 1,2,3

// 합집합 (A와 B의 차집합 + 집합B)
union = [...difference, ...setB];
console.log(union);         // 1,2,3,4,5,6,7,8
```
