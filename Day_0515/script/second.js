/* 데이터 타입의 종류 
    - 문자열, Escape Sequence

1) 문자열
    - '' "" 내부의 문자들
    - \n, \t, \b, \\. \', \""
2) 숫자형 : 정수(2진수(0b prefix), 10진수, 8진수(숫자 0이 prefix), 16진수(0x prefix)), 
               실수 (소숫점을 가진 수, 지수형 실수 0.123E+5)
3) 논리(boolean)
    true, false 
    논리형을 연산하면 true는 1로, false 0으로 인식

4) 함수형
   - function 키워드로 생성 ==> first class function(일급함수)
   - 전달인자로 전달하거나, 함수 그 자체를 리턴할 수 있다.

5) 객체(Object)
   - [] : 배열(Array) 객체
   - {} : Object - python의 dictionary, Java의 Hashmap

6) undefined
   - 값이 없는 변수를 나타내는 자료형
   - 변수를 선언하고 값을 대입하지 않을 때 undefined 형이라고 한다.

   ※ null : typeof 연산자를 사용하면 object라고 출력되지만 object는 아님.
            객체형에서 아무것도 참조하지 않을 때 
            개발자들이 참조형을 사용할 때 null로 초기화함.

7) Symbol 형
*/

// 문자열 연습
let str = "Kim's Bakery";
console.log(typeof str);

let n1 = 12;
console.log(typeof n1);

let n2 = 0xef;
console.log(n2 + " " + typeof n2);

let bool = 10 < 12;
console.log(bool + " : " + typeof bool);
console.log(true + true);

// 함수의 선언
function test(data) {
    console.log("전달된 값: " + data);
}

// 함수의 호출
test(25);

console.log(typeof test);
let test2 = test();   // test2의 결과 : undefined
let test3 = test;     // test3의 결과 : 함수

// 표현적 함수
let myfunc = function () { 
    console.log("익명함수를 처리함");
};

myfunc();
console.log(typeof myfunc);

let num = 1;
function timer() {
    console.log('문자처리 : ' + num);
}

// setTimeout(timer, 1000);
// setInterval(timer, 1000); ==> 함수를 전달인자로 전달(콜백함수)

function test4() {
    return function () {
        console.log("inner function");
    }
}

let myfunc2 = test4(); // 결과값이 변수에 대입
myfunc2();

(function test5() {
    console.log('immediate run');
})();

// Object 타입
let ary = [1, 2, 3, 4];
console.log(typeof ary);
console.log(ary + ", 개수: " + ary.length);

//-> 자바스크립트 객체, 값 이외에 함수도 포함 가능
let obj1 = { name: 'HongGildong', age: '25' };
console.log(typeof obj1);
console.log(obj1)

// => JSON (Java Script Object Notation) ==> 데이터 송수신용, 값만 포함
let obj2 = { "name": 'HongGildong', "age" : '25' };
console.log(typeof obj2);
console.log(obj2)

// undefined 형
let name;
console.log(name);
console.log(typeof name);

// null type
console.log(typeof null); // js v1에 전해내려오는 오류














