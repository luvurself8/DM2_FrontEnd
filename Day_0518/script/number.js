console.log(`최대값: ${Number.MAX_VALUE}`)
console.log(`최소값: ${Number.MIN_VALUE}`)

let data = "2.5";
console.log(data + 5);  // 결합

let temp = Number(data)
console.log(temp + 5);  // 

temp = parseFloat(data);
console.log(temp + 5);  // 7.5

temp = parseInt(data);
console.log(temp + 5);  // 7

//------------------
data = "2.5a7";
console.log(data + 5);  // 결합

temp = Number(data);    // 문자열이 포함되어 있으면 NaN
console.log(temp);      // NaN

temp = parseFloat(data);    // 변환이 가능한 부분까지 변환
console.log(temp + 5); 

temp = parseInt(data);      // 변환이 가능한 부분까지 변환
console.log(temp + 5);  
