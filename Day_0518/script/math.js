/*
Math 객체
1) 속성 : PI(원주율), E(오일러 상수)
    Math.PI
2) 메소드
*/

// Math.PI 사용
console.log(`원주율: ${Math.PI}`);
console.log(`오일러 상수: ${Math.E}`);

// abs(n) : 절대값을 반환
console.log("==========abs() ")
console.log(Math.abs(-1));          // 1
console.log(Math.abs('-2'));        // 2
console.log(Math.abs(null));        // 0 ?
console.log(Math.abs(''));          // 0 ?
console.log(Math.abs(' '));         // 0 ?
console.log(Math.abs('Korea'));     // NaN
console.log(Math.abs([]));          // 0 ?
console.log(Math.abs([1, 2]));      // NaN
console.log(Math.abs());            // NaN
console.log(Math.abs(undefined));   // NaN

// 참고 : JS에서 거짓으로 처리되는 데이터 : 0, null, '' , undefined
// 참으로 처리되는 데이터 : 비어있지 않은 문자열, 배열 [], 
if (undefined) {
    console.log("참");
} else {
    console.log("거짓");
}

// ceil(n): 올림. 주어진 숫자보다 큰 가까운 정수
console.log("=========== ceil()")
console.log(Math.ceil(0.95))        // 1
console.log(Math.ceil(5.0001))      // 6
console.log(Math.ceil(5))           // 5
console.log(Math.ceil(-0.95))       // -0 (0, -0)
console.log(Math.ceil(-5.0001))     // -5

// floor(n): 내림. 주어진 숫자보다 가까운 가까운 정수
console.log("=========== floor()")
console.log(Math.floor(0.95))        // 0
console.log(Math.floor(5.0001))      // 5
console.log(Math.floor(5))           // 5
console.log(Math.floor(-0.95))       // -1
console.log(Math.floor(-5.0001))     // -6

// trunc(n): 절삭(버림)
console.log("=========== trunc()")
console.log(Math.trunc(0.95))        // 0
console.log(Math.trunc(5.0001))      // 5
console.log(Math.trunc(5))           // 5
console.log(Math.trunc(-0.95))       // -0
console.log(Math.trunc(-5.0001))     // -5

// round(n): 반올림해서 정수로 만듦
console.log("=========== round()")
console.log(Math.round(0.95))        // 1
console.log(Math.round(5.0001))      // 5
console.log(Math.round(5))           // 5
console.log(Math.round(-0.95))       // -1
console.log(Math.round(-5.0001))     // -5
console.log(Math.round(-5.6))        // -6
console.log(Math.round(-5.5))        // -5 (-0.5는 반올림하지 않음, -0.51은 반올림함)
console.log(Math.round(-5.51))       // -5 (-0.5는 반올림하지 않음, -0.51은 반올림함)
console.log(Math.round(5.3))         // 5
console.log(Math.round(5.5))         // 6

// 참고
console.log("========== 참고");
console.log(0 / 0);         // NaN
console.log(10 / 0);        // Infinity(양의 무한대)
console.log(10 / -0);       // -Infinity(음의 무한대)

console.log((0.1 + 0.2) === 0.3); // 같지 않다 (false)

// max, min
console.log("=========== max()")
console.log(Math.max(1, 5, 3));     // 5
console.log(Math.max(-1, -5, -3));  // -1
console.log(Math.max());            // -Infinity

let ary = [1, 5, 3]
console.log(Math.max(ary));         // 5
console.log(Math.max(...ary));      // ... 스프레드 연산자 

console.log("=========== min()")
console.log(Math.min(1, 5, 3));     // 5
console.log(Math.min(-1, -5, -3));  // -1
console.log(Math.min());            // -Infinity

let ary1 = [1, 5, 3]
console.log(Math.min(ary));         // 5
console.log(Math.min(...ary));      // ... 스프레드 연산자

// pow(n1, n1) : 거듭제곱을 구하는 연산자
console.log("=========== pow()")
console.log(Math.pow(5, 3))     // 125
console.log(5 ** 3);
console.log(Math.pow(4, 0.5))   // 2
console.log(4 ** 0.5)
console.log(Math.pow(4, -2))    // 2 (1/16)
console.log(4 ** -2)

console.log(Math.pow(-4, 2))    // 16
//console.log(-4 ** 2)          // Syntax 오류 (연산자 우선순위 때문에...)
console.log((-4) ** 2)          // 16

console.log(Math.pow(-4, -2))   // 0.00625
console.log(Math.pow(-4, -0.5)) // NaN

// random() : 0이상 ~ 1미만의 난수 발생
console.log("=========== random()")

for (let i = 0; i < 5; ++i)
    console.log(Math.random());

// 0 ~ 50 (0이상 50(포함)이하의 정수를 5번 발생시키시오)
let mi = 0;
let mx = 51;

for (let i = 0; i < 5; ++i)
    console.log(Math.floor(Math.random() * mx)); // 0~1, 0~50.





