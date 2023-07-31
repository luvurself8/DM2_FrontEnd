let data1 = "ABCDEFG";

console.log('문자열 길이: ' + data1.length);
console.log('인덱스 0번위치의 문자: ' + data1.charAt(0));

let text = "Hello world, welcome to the universe.";
let result = text.includes("ll"); // 단어가 아니어도 찾을 수 있음
console.log(result);

result = text.replace('Hello', 'Hi');   // 단어를 찾아서 변경
console.log(text);
console.log(result);

// search() - index값 반환 / includes()-true, false 반환
result = text.search("welcome");
console.log(result);

result = text.search("school");  // 단어를 못찾으면 -1 반환
console.log(result);

// slice(index, index) : 부분 문자열을 반환
console.log("======= slice===========")
result = text.slice(5, 12); // 12는 위치를 의미함 ' world,'
console.log(result);

result = text.slice(12, 5); // 앞<뒤 인덱스보다 작아야함 (못가져옴)
console.log(result);

result = text.slice(-3, -1); // 앞<뒤 인덱스보다 작아야함 (-1이 마지막) : 'se'
console.log(result);

result = text.slice(-1, -3); // 앞<뒤 인덱스 규칙에 어긋남 (-1이 마지막) : 못가져옴
console.log(result);

// substr()
console.log("===substr : ES5 이후에는 사용을 권장하지 않음======")

result = text.substr(5, 12); // 12는 개수 의미함 ' world,'
console.log(result);
result = text.substr(35, 10); // 가져올 수 있는만큼 다 가져옴
console.log(result);

result = text.substr(-3, 2); // -3위치에서 2개 : 'se'
console.log(result);

result = text.substr(-1, 5); // 가져올 수 있는만큼 다 가져옴 (.)
console.log(result);

console.log("=== substring() : slice() 유사, 음수를 못쓴다. ======")
// let text = "Hello world, welcome to the universe.";
result = text.substring(5, 12); // 12는 위치를 의미함 ' world,'
console.log(result);

result = text.substring(35, 10); //앞<뒤 인덱스보다 작을 필요 없음
console.log(result);

result = text.substring(-3, 2); // -3위치에서 2개 : 'He' ==> (0, 2)
console.log(result);

result = text.substring(-1, 5); // 가져올 수 있는만큼 다 가져옴 (0, 5)
console.log(result);

console.log("=== split('구분문자열') ======")
// let text = "Hello world, welcome to the universe.";
let splitData = text.split(" ");
console.log("반환된 배열의 길이: " + splitData.length);

for (let item of splitData)
    console.log(item)

console.log("=== trim() ======")
text = "  Hello  ";
console.log('길이: ' + text.length); // 공백포함 전체길이
console.log('공백을 제외한 길이: ' + text.trim().length); // 공백을 제외한 길이




