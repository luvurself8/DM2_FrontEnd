let target = document.getElementById('target');
let btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    let username = document.getElementById('username');
    let age = document.getElementById('age');

    if (username.value.length == 0 || age.value.length == 0) {
        alert("데이터를 입력해주세요.");
        return;
    }
    
    if (isNaN(age.value)) {
        alert("나이는 숫자로만 입력해주세요");
        age.focus();
        age.select();
        return;
    }


    let data = `${username.value}, ${age.value}<br>`;
    target.insertAdjacentHTML('afterbegin', data);

    // 입력상자를 깨끗히
    username.value = '';
    age.value = '';
});

/*
'beforebegin' : element 앞에
'afterbegin' : element 안에 가장 첫번째 child
'beforeend' : element 안에 가장 마지막 child
'afterend' : element 뒤에
*/

// 예전 방식
// window.onload = first;

// function first() {
//     let target = document.getElementById('target');
//     console.log(target);
// }

